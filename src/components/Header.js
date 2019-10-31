import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import { NavLink } from "react-router-dom"

import useAuth from "hooks/useAuth"

function Header(props) {
  const [open, setOpen] = React.useState(false)
  const isLoggedIn = useAuth()
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">تست</NavbarBrand>
      <NavbarToggler onClick={() => setOpen((o) => !o)} />
      <Collapse isOpen={open} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              خانه
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/blog"
              className="nav-link"
              activeClassName="active"
            >
              وبلاگ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/about-us"
              className="nav-link"
              activeClassName="active"
            >
              درباره ما
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to={isLoggedIn ? "/profile" : "/login"}
              className="nav-link"
              activeClassName="active"
            >
              {isLoggedIn ? "خوش آمدید" : "ورود به حساب کاربری"}
            </NavLink>
          </NavItem>
          {isLoggedIn && (
            <NavItem>
              <NavLink
                exact
                to="/logout"
                className="nav-link"
                activeClassName="active"
              >
                خروج
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
