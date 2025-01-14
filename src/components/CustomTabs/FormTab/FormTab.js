import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './FormTab.css'; // Asegúrate de crear este archivo para los estilos personalizados

const FormTab = () => {
  return (
    <Container className="form-tab-container mb-4 pb-4">
      <Form className="custom-form" style={{maxWidth: '600px', margin: '0 auto'}}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Dirección</Form.Label>
          <Form.Control placeholder="Calle Principal 1234" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Dirección 2</Form.Label>
          <Form.Control placeholder="Apartamento, estudio, o piso" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Control as="select" defaultValue="Elige...">
              <option>Elige...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Recuérdame" />
        </Form.Group>

        <Button variant="dark outline-dark border" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default FormTab;