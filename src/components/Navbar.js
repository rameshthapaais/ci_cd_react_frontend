import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
                          
function Nabbar() {
    return (
        <>
            <Navbar bg='primary' expand="lg" className="bg-body-tertiary">
                <Container fluid>
                   
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <img src="https://www.eit.ac.nz/wp-content/themes/eit2016/img/eit-header-tepukenga.svg" alt='EIT college'></img>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/chatrooms">Chat Room</Nav.Link>
                            <Nav.Link href="/students">Add Student</Nav.Link>
                            <Nav.Link href="/student_marks">Student Marks</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

        </>
    );
}

export default Nabbar;