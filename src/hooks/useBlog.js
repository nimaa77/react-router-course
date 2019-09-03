import React from "react"

function useBlog() {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let mounted = true
    fetch("https://jsonplaceholder.ir/posts")
      .then((response) => response.json())
      .then((data) => mounted && setData(data))
      .then(false)
      .then(setLoading)
    return () => (mounted = false)
  }, [])

  return [loading, data]
}

export default useBlog
