import HomePage from "pages/HomePage"
import AboutUs from "pages/AboutUsPage"
import Post from "pages/PostPage"
import Blog from "pages/BlogPage"
import NotFound from "pages/NotFound"
import Example from "pages/Example"
import Login from "pages/LoginPage"
import ProfilePage from "pages/ProfilePage"
import LogoutPage from "pages/LogoutPage"

const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/post",
    component: Post,
  },
  {
    private: true,
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/example/:sort(asc|dec)?",
    component: Example,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/logout",
    component: LogoutPage,
  },
  {
    component: NotFound,
  },
]

export default routes

// path: "/example/:page([0-9]+)",
// path: "/example/:name([A-Za-z]+)",
