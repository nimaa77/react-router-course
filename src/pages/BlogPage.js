import React from "react"
import { Card, CardText, CardBody, CardTitle } from "reactstrap"

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

function Post({ title, body }) {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{body}</CardText>
      </CardBody>
    </Card>
  )
}

export default Blog
