import React from "react"

class Post extends React.Component {
  state = {
    loading: true,
    data: null,
  }

  mounted = true

  setStateIfMounted = (newState) => {
    if (this.mounted) {
      this.setState(newState)
    }
  }

  fetchData = () => {
    const { page } = this.props.match.params
    fetch(`https://jsonplaceholder.ir/posts/${page}`)
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .finally(() => this.setState({ loading: false }))
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props.match.params
    if (prevProps.match.params.page !== page) {
      this.setState({ loading: true })
      this.fetchData()
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { data, loading } = this.state
    return loading ? "در حال بار گذاری" : JSON.stringify(data, null, 2)
  }
}

export default Post
