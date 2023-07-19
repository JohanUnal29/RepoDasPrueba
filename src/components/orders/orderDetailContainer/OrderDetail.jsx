import React, { useState, useEffect } from 'react';
import { Modal, Container, Row, Col, Button, Table } from 'react-bootstrap';
import axios from "axios";
import './OrderDetail.css';

const OrderDetail = ({ order }) => {

  console.log("orden especificia: " + order)
  const cartItems = order.cart;

  const [status, setStatus] = useState();

  console.log(status)

  const uptadeProduct = async (id) => {

    try {

      const changes = {
        status: status,
      };
      axios.put(`/api/orders/${id}`, changes).then(res => {
        alert("producto actulizado");
      }).catch(err => {
        console.log(err);
      })
    } catch (error) {
      alert(error.message);
    }
    setStatus();

  };

  return (

    <Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Meensaje</th>
            <th>Total pedido</th>
            <th>Estado de la orden</th>
          </tr>
        </thead>
        <tbody>
          <tr key={order.id}>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.phone}</td>
            <td>${order.message}</td>
            <td>${order.totalPrice}</td>
            <td><select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pendiente">Pendiente</option>
              <option value="en_proceso">En proceso</option>
              <option value="finalizada">Finalizada</option>
            </select>
              <Button variant="success" onClick={() => uptadeProduct(order.id)}>Actualizar Estado</Button>
            </td>
          </tr>
        </tbody>
      </Table>

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
        <tbody>
          {cartItems.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td><img src={prod.thumbnails} alt={prod.title} className="imagen-miniatura" /></td>
              <td>{prod.quantity}</td>
              <td>${prod.price}</td>
              <td>${prod.price * prod.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>


  )
}

export default OrderDetail
