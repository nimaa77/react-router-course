import React from "react"

function Debug(props) {
  return (
    <pre className="bg-warning ltr p-4">{JSON.stringify(props, null, 2)}</pre>
  )
}

export default Debug
