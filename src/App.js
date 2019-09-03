import React from "react"
import { Route } from "react-router-dom"
import routes from "./routes"
import Template from "components/Template"

function App() {
  return (
    <Template>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Template>
  )
}

export default App
