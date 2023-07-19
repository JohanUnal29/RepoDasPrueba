import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import './Navbar3.css';

export default function NavBar3() {

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
        <Navbar className="nav-grande2" bg="white" expand="lg">
            <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                <div className="logo-container">
                    <Navbar.Brand>
                        <Link to="/">
                            <a className="navbar-brand col-6">
                                <img className="logotipo" src="https://drive.google.com/uc?export=download&id=1tBsb0t3bUc1vG8BzvAs0wuCOBos_2_fa" alt="Logo Dasein" />
                            </a>
                            {/* <span className="logo-title">Adopta un cheems</span> */}
                        </Link>
                    </Navbar.Brand>

                </div>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link><Link className="Menu2" to="/">Inicio</Link></Nav.Link>
                        <Nav.Link><Link className="Menu2" to="/orders">Ordenes</Link></Nav.Link>
                        <Nav.Link><Link className="Menu2" to="/orders/pendiente">Pendientes</Link></Nav.Link>
                        <Nav.Link><Link className="Menu2" to="/orders/en_proceso">En proceso</Link></Nav.Link>
                        <Nav.Link><Link className="Menu2" to="/orders/finalizada">Finalizadas</Link></Nav.Link>
                        {
                            veri === true &&
                            <Nav.Link onClick={logout}><p className="Cerrar" >Cerrar Sesión</p></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
