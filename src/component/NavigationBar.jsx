import React from 'react'
import {
    NavDropdown,
    Nav,
    Navbar,
    Container,
    Button,
    Badge
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Toko Sepatu</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    {this.props.email
                                        ?
                                        <>
                                            <NavDropdown.Item as={Link} to="/login">logout</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/History'>History transaction</NavDropdown.Item>
                                        </>
                                        :
                                        <>
                                            <NavDropdown.Item as={Link} to="/login">login</NavDropdown.Item>

                                        </>
                                    }
                                </NavDropdown>
                                <Button variant="outline-warning" >cart
                                    <i className="fas fa-shopping-cart"></i> <Badge pill variant="danger"></Badge>
                                </Button>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.userReducer.email
    }
}

export default NavigationBar