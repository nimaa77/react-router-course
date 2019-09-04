import React from "react"
import Login from "components/Login"
import { Jumbotron, Container } from "reactstrap"

function LoginPage() {
  return (
    <>
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-3">ورود به حساب کاربری</h1>
            <Login />
          </Container>
        </Jumbotron>
      </div>
    </>
  )
}

export default LoginPage
