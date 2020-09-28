import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importér Reactstrap komponenter
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";

const Header = () => {
  // States med React Hooks
  const [isOpen, setIsOpen] = useState(false);

  // Toggles
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="lightBlackBg headerStyles" dark expand="md">
      <Container>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to={"/"} className="linkStyles headerItem">
                Lemonade Stand
              </Link>
            </NavItem>
            <NavItem>
              <Link to={"/jokes"} className="linkStyles headerItem">
                Jokes 🦆
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
