import React, { useState, useContext } from 'react';
import { Modal, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext';
import axios from "axios";
import Carrito from './Carrito';
import { Link } from 'react-router-dom';

export default function ModalCart(props) {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

    const [modalInsertar, setModalInsertar] = useState(false);
    console.log(carrito);
    const handleSubmit = async () => {

        try {
            const OrderForm = {
                name: name,
                email: email,
                phone: phone,
                message: message,
                cart: carrito,
                totalPrice: precioTotal(),
            };
            alert("Gracias por odenar con nosotros, pronto nos contactaremos contigo ❤️");
            axios.post("/api/orders/addorder", OrderForm).then(res => {
                alert(res.data);
            }).catch(err => {
                console.log(err);
            })
        } catch (error) {
            alert(error.message);
        }

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        vaciarCarrito();
    };

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (

        <><Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Carrito de compras
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Titulo</th>
                                            <th>Foto</th>
                                            <th>Cant</th>
                                            <th>Precio.U</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <Carrito></Carrito>
                                </Table>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            {carrito.length > 0 ?
                                <>
                                    <Button variant='danger' onClick={handleVaciar}>Vaciar</Button>
                                </> :
                                <h2>El carrito está vacío :(</h2>}
                        </Col>
                        <Col xs={6} md={4}>
                            <h6>Total: ${precioTotal()}</h6>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant='success' onClick={() => {
                                props.onHide();
                            }}><Link className="Menu" to="/checkout">Comprar</Link></Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
</>
    );
}