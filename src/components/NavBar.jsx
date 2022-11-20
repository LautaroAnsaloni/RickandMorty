import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

  const [buscar, setBuscar] = useState([]);

  const isLogged = JSON.parse(localStorage.getItem("userLogged"));

  const navigate = useNavigate();
  const query = (e) => {
    e.preventDefault();
    navigate(`/search/${buscar}`);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand id="Brand" className='animate__animated animate__flash'>
          <h1>
            RICK AND MORTY
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            {isLogged &&
              <Form onSubmit={query}>
                <Stack direction="horizontal" gap={2}>
                  <Form.Control className="ms-auto" type="text" placeholder="Personaje..." onChange={(e) => setBuscar(e.target.value)} />
                  <Button type="submit" variant="outline-warning" >Buscar</Button>
                  <Link to="/" className="btn btn-outline-danger">
                    Reset
                  </Link>
                </Stack>
              </Form>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar