import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
      <Navbar bg="success" variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <h3><span>Coleccionables Store</span></h3>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#marvel">Universo Marvel</Nav.Link>
            <Nav.Link href="#dc">Universo DC</Nav.Link>
            <Nav.Link href="#comics">Comics</Nav.Link>
            <Nav.Link href="#mangas">Mangas</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar;