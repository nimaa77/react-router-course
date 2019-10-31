import React from "react"
import { Route, Switch } from "react-router-dom"
import routes from "./routes"
import Template from "components/Template"
import AuthProvider from "components/AuthProvider"
import PrivateRoute from "components/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <Template>
        <Switch>
          {routes.map((route) =>
            route.private === true ? (
              <PrivateRoute {...route} />
            ) : (
              <Route {...route} />
            )
          )}
        </Switch>
      </Template>
    </AuthProvider>
  )
}

export default App
