import React from "react"
import useAuthActions from "hooks/useAuthActions"
import useHistory from "hooks/useHistory"

function LogoutPage() {
  const setLogin = useAuthActions()
  const history = useHistory()

  React.useState(() => {
    setLogin(false)
    history.push("/")
  }, [])

  return <h1>لطفا کمی صبر کنید</h1>
}

export default LogoutPage
