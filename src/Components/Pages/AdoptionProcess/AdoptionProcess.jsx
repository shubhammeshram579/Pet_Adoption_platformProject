import React from 'react';
import Step from '../AdoptionProcess/Steps.jsx';
import { Container, Row, Col } from 'react-bootstrap';

const AdoptionProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Your Pet",
      description: "Browse our pets available for adoption and choose the one you love.",
      icon: "🐶",
    },
    {
      id: 2,
      title: "Submit an Application",
      description: "Fill out the adoption form with necessary details to proceed.",
      icon: "📄",
    },
    {
      id: 3,
      title: "Meet & Greet",
      description: "Schedule a meeting with the pet to ensure compatibility.",
      icon: "🤝",
    },
    {
      id: 4,
      title: "Home Visit",
      description: "A representative will visit to ensure a safe environment.",
      icon: "🏠",
    },
    {
      id: 5,
      title: "Final Adoption",
      description: "Complete the paperwork and bring your new friend home!",
      icon: "🎉",
    },
  ];

  return (
    <>
  
      <div style={{padding:"100px 20px"}}>
      <Container className="mt-5 p-4 bg-light rounded shadow">
        <h2 className="text-center text-primary mb-4">🐾 Pet Adoption Process</h2>
        <Row className="justify-content-center">
          {steps.map((step) => (
            <Col md={4} sm={6} xs={12} key={step.id} className="mb-4">
              <Step title={step.title} description={step.description} icon={step.icon} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
      
    </>
  );
};

export default AdoptionProcess;