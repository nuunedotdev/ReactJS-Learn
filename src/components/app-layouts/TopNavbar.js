import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function TopNavbar() {

    const name = "Abdulkadir";
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="/add">Add</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">

                        <NavDropdown title={ name } id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.2">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Change Password</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://google.com/"> Sign Out</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>

    );
}

export default TopNavbar;