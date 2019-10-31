import React from "react"
import { Route, Switch } from "react-router-dom"
import routes from "./routes"
import Template from "components/Template"
import AuthProvider from "components/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Template>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Template>
    </AuthProvider>
  )
}

export default App
