import React from 'react';
import {
  Navbar,
  Container,
  Form,
  Nav,
  FormControl,
  Button,
} from 'react-bootstrap';
import { MenuItems } from '../MenuItems';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Examen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          />
          <Nav>
            {MenuItems.map((item) => {
              return (
                <Nav.Link as={Link} to={item.path}>
                  {item.title}
                </Nav.Link>
              );
            })}
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}
export default Menu;
