import React from 'react';
import { Card } from 'react-bootstrap';

const Step = ({ title, description, icon }) => {
  return (
    <Card className="shadow-lg text-center">
      <Card.Body>
        <h3>{icon}</h3>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </Card.Body>
    </Card>
  );
};

export default Step;