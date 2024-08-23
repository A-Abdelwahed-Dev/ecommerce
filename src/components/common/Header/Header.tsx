import styles from "./styles.module.css"
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HeaderBasket } from "@components/ecommerce";

const { headerContainer, headerLogo } = styles;

function Header() {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg='info'>Ecom</Badge>
        </h1>

    <HeaderBasket />
      </div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="\">Home</Nav.Link>
              <Nav.Link href="categories">Categories</Nav.Link>
              <Nav.Link href="AboutUs">About</Nav.Link>

            </Nav>
            <Nav >
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
