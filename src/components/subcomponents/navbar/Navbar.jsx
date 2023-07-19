import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from "../../products/cart/CartWidget.jsx";
import axios from "axios";
import './Navbar.css';
import LoginWidget from '../../login/LoginWidget.jsx';

export default function NavBar() {

    const [userLogin, setUserLogin] = useState([]);
    const [veri, setVeri] = useState(false);

    const logout = async () => {
        
        try {
            axios.get("/api/sessionsGoogle/logout").then(res => {
                alert("sesión cerrada");
                setUserLogin([]);
                setVeri(false);
            }).catch(err => {
                console.log(err);
            })
        } catch (error) {
            alert(error.message);
        }

    };

    useEffect(() => {
        axios.get("/api/sessionsGoogle/user").then(res => {
            setUserLogin(res.data.payload);
            console.log('sesión');
            console.log(userLogin);
            if (res.data.payload) {
                setVeri(true);
                console.log("veri: true");
            } else {
                setVeri(false);
                console.log("veri: false");
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])




    return (
        <Navbar className="nav-grande sticky-top" bg="white" expand="lg">
            <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                <div className="logo-container">
                    <Navbar.Brand>
                        <Link to="/">
                            <a className="navbar-brand col-6">
                                <img className="logotipo" src="https://drive.google.com/uc?export=download&id=1tBsb0t3bUc1vG8BzvAs0wuCOBos_2_fa" alt="Logo Dasein" />
                            </a>
                        </Link>
                    </Navbar.Brand>

                </div>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link><Link className="Menu" to="/">Inicio</Link></Nav.Link>
                        <Nav.Link><Link className="Menu" to="/products">Productos</Link></Nav.Link>
                        <Nav.Link className="Menu" target="_blank" href="https://www.instagram.com/dasein.accesorios/?igshid=Yzg5MTU1MDY%3D">Ir a @dasein.outfit</Nav.Link>
                        <Nav.Link><CartWidget></CartWidget></Nav.Link>
                        {
                            veri === false &&
                            <Nav.Link><LoginWidget /></Nav.Link>
                        }
                        {
                            veri === true &&
                            <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                                <Nav.Link><Link className="Menu" to="/">Perfil</Link></Nav.Link>
                                {
                                    userLogin.admin &&
                                    <Nav.Link><Link className="Menu" to="/orders">Administradora</Link></Nav.Link>
                                }
                                <NavDropdown.Divider />
                                <Nav.Link onClick={logout}><p className="Cerrar" >Cerrar Sesión</p></Nav.Link>
                            </NavDropdown>
                        }
                    </Nav>
                    {/* <Link to="/carrito"><CardWidget cantidad="10" /></Link> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
