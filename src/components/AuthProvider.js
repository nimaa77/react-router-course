import React from "react"

export const AuthProviderContext = React.createContext()
export const AuthProviderContextDispatcher = React.createContext()

function AuthProvider({ children }) {
  const [state, setState] = React.useState(false)
  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  )
}

export default AuthProvider
