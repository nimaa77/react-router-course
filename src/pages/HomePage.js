import React from "react"
import { Link } from "react-router-dom"

function HomePage(props) {
  return (
    <>
      <p>اینجا صفحه اصلی است</p>
      <Link to="/about-us">برو به صفحه درباره ما</Link>
    </>
  )
}

export default HomePage
