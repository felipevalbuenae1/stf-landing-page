import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './Breadcrumb.css';
import { useNavigate } from 'react-router-dom';

const CustomBreadcrumb = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => handleClick('/a')} active>Studio F</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default CustomBreadcrumb;