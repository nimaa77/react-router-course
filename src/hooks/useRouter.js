import React from "react"
import { __RouterContext } from "react-router-dom"

function useRouter() {
  return React.useContext(__RouterContext)
}

export default useRouter
