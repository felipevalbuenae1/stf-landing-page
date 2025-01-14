import React, { useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import FormTab from './FormTab/FormTab';
import VideoTab from './VideoTab/VideoTab';
import ProductShowcaseTab from './ProductShowcaseTab/ProductShowcaseTab';
import CustomProposalTab from './CustomProposalTab/CustomProposalTab';
import './CustomTabs.scss'; // Importa el archivo CSS personalizado

const CustomTabs = () => {
  const [key, setKey] = useState('formulario');

  return (
    <Container>
      <Tabs id="controlled-tab-example" className='justify-content-center text-muted custom-tabs' activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="formulario" title="Formulario">
          <FormTab />
        </Tab>
        <Tab eventKey="video" title="Video">
          <VideoTab />
        </Tab>
        <Tab eventKey="producto" title="Vitrina de Productos">
          <ProductShowcaseTab />
        </Tab>
        <Tab eventKey="personalizado" title="Propuesta Personalizada">
          <CustomProposalTab />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default CustomTabs;