import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header =()=>{
    
    return(
        <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className='text-danger'>todo list</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Link className='text-decoration-none text-white float-right ' to="/add">Add Data</Link>
              <Link to="/edit"></Link>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;