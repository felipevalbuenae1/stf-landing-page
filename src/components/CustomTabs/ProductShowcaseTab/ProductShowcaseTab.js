import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductShowcaseTab.css'; // Asegúrate de crear este archivo para los estilos personalizados

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Esta es una descripción del producto 1.',
    image: 'https://studiofco.vteximg.com.br/arquivos/ids/1507825-4000-4284/-stfco-producto-Blazer-NARANJA-S301805A-1.jpg?v=638276314124770000',
    price: '$100'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Esta es una descripción del producto 2.',
    image: 'https://studiofco.vteximg.com.br/arquivos/ids/1554582-4000-4284/-stfco-producto-Camisasyblusas-ROSAPASTEL-S174164A-1.jpg?v=638458763051570000',
    price: '$200'
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Esta es una descripción del producto 3.',
    image: 'https://studiofco.vteximg.com.br/arquivos/ids/1333064-4000-4284/-stfco-producto-Skinny-NEGRO-S139909C-1.jpg?v=638001474958800000',
    price: '$300'
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'Esta es una descripción del producto 4.',
    image: 'https://studiofco.vteximg.com.br/arquivos/ids/1286533-4000-4284/-stfco-producto-Bota-campana-AZULOSCURO-S139667-1.jpg?v=637804529536670000',
    price: '$400'
  },
  {
    id: 5,
    name: 'Producto 5',
    description: 'Esta es una descripción del producto 5.',
    image: 'https://studiofco.vteximg.com.br/arquivos/ids/1486411-4000-4284/-stfco-producto-Camisasyblusas-NATURAL-S173880-1.jpg?v=638223718476630000',
    price: '$500'
  },
  {
    id: 6,
    name: 'Producto 6',
    description: 'Esta es una descripción del producto 6.',
    image: 'https://studiofco.vteximg.com.br/arquivos/ids/1508602-4000-4284/-stfco-producto-Camisasyblusas-BLANCO-S174173-1.jpg?v=638276319294700000',
    price: '$600'
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductShowcaseTab = () => {
  return (
    <Container className="product-showcase-container">
      <Carousel className='pb-5' responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {products.map(product => (
          <div key={product.id} className="product-card-container">
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="product-price">{product.price}</Card.Text>
                <Button variant="dark outline-dark border">Agregar al Carrito</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProductShowcaseTab;