import React from "react"
import { AuthProviderContext } from "components/AuthProvider"

function useAuth() {
  return React.useContext(AuthProviderContext)
}

export default useAuth
