import React from "react"

class Post extends React.Component {
  state = {
    loading: true,
    data: null,
  }

  componentDidMount() {
    const { page } = this.props.match.params
    fetch(`https://jsonplaceholder.ir/posts/${page}`)
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .finally(() => this.setState({ loading: false }))
  }

  render() {
    const { data, loading } = this.state
    return loading ? "در حال بار گذاری" : JSON.stringify(data, null, 2)
  }
}

export default Post
