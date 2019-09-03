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

function Header(props) {
  const [open, setOpen] = React.useState(false)
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">فروشگاه تست</NavbarBrand>
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
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
