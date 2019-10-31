import React from "react"
import { AuthProviderContextDispatcher } from "components/AuthProvider"

function useAuthActions() {
  return React.useContext(AuthProviderContextDispatcher)
}

export default useAuthActions
