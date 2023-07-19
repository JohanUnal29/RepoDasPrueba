import React, { useState, useContext } from 'react';
import { Modal, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext';
import axios from "axios";
import Carrito from './Carrito';

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

    const abrirModalInsertar = () => {
        setModalInsertar(true);
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
                            <label>Name</label>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant='success' onClick={() => {
                                abrirModalInsertar();
                                props.onHide();
                            }}>Comprar</Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

            <Modal show={modalInsertar} onHide={() => setModalInsertar(false)}>
                <Modal.Header>
                    <Modal.Title>Ordenar</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <h5>Orden</h5>

                    <div className="form-group">

                        <label>Name</label>
                        <input
                            className="form-control"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <br />

                        <label>Email</label>
                        <input
                            className="form-control"
                            placeholder="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <br />

                        <label>Phone</label>
                        <input
                            className="form-control"
                            placeholder="Phone"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                        <br />

                        <label>Sugerencias</label>
                        <textarea
                            className="form-control"
                            placeholder="Message"
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                        <br />

                    </div>

                    <Modal.Footer>
                        <Button type="button" variant="success" onClick={() => {
                            handleSubmit();
                            setModalInsertar(false);
                        }}>Comprar
                        </Button>
                        <Button variant="danger" onClick={() => setModalInsertar(false)}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal></>
    );
}