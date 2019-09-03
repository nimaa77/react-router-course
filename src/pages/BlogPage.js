import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

import useBlog from "hooks/useBlog"

function Blog(props) {
  const [loading, posts] = useBlog()
  return (
    <>
      <p>اینجا صفحه بلاگ است</p>
      {loading ? (
        <p>درحال بارگذاری</p>
      ) : (
        posts.map((post) => <Post {...post} />)
      )}
    </>
  )
}

function Post({ title, body, id }) {
  return (
    <Card>
      <CardBody>
        <Link to={`/to/post/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
      </CardBody>
    </Card>
  )
}

export default Blog
