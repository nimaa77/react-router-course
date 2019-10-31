import React from "react"

export const AuthProviderContext = React.createContext()
export const AuthProviderContextDispatcher = React.createContext()

const LOCAL_STORAGE_KEY = "authState"

const initialState = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || false)

function AuthProvider({ children }) {
  const [state, setState] = React.useState(initialState)

  React.useEffect(() => {
    const data = JSON.stringify(state)
    localStorage.setItem(LOCAL_STORAGE_KEY, data)
  }, [state])

  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  )
}

export default AuthProvider
