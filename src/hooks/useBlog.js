import React from "react"

function useBlog() {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch("https://jsonplaceholder.ir/posts")
      .then((response) => response.json())
      .then(setData)
      .then(false)
      .then(setLoading)
  }, [])

  return [loading, data]
}

export default useBlog
