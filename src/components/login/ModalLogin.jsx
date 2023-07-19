import React, { useState } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import axios from "axios";

export default function ModalLogin(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const popup = window.open(
        "http://localhost:5000/api/sessionsGoogle/auth/google",
        "targetWindow",
        `toolbar=no,
        location=no,
        status=no,
        menubar=no,
        scrollbars=yes,
        resizable=yes,
        width=620,
        height=700`
      );

      const checkPopupClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkPopupClosed);
          setLoading(false);
          window.location.reload(); // Recargar la página después de cerrar la ventana emergente
        }
      }, 100);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Inicio de sesión
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Button variant='danger' onClick={handleSubmit} disabled={loading}>
            {loading ? "Cargando..." : "Iniciar sesión con Google"}
          </Button>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
