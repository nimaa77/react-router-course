import React from "react"
import { Route, Switch } from "react-router-dom"
import routes from "./routes"
import Template from "components/Template"

function App() {
  return (
    <Template>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Template>
  )
}

export default App
