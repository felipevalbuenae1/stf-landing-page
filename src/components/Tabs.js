import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const CustomTabs = () => {
  const [key, setKey] = useState('form');

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="form" title="Form">
        <div>Form Content</div>
      </Tab>
      <Tab eventKey="video" title="Video">
        <div>Video Content</div>
      </Tab>
      <Tab eventKey="product" title="Product Showcase">
        <div>Product Showcase</div>
      </Tab>
      <Tab eventKey="custom" title="Custom Proposal">
        <div>Custom Proposal</div>
      </Tab>
    </Tabs>
  );
};

export default CustomTabs;