import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { Form, Row, Col, Card, CardTitle, Button } from 'reactstrap';

const FormActivation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    arquivo: null
  });

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData} />;
      case 5:
        return <Step5 formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Ativação ONT/ONU
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            {renderStep()}
            <div className="d-flex justify-content-between p-3">
              {currentStep > 1 && <Button className="btn" color="secondary" onClick={prevStep}>Voltar</Button>}
              {currentStep < 5 && <Button className="btn" color="primary" onClick={nextStep}>Próximo</Button>}
              {currentStep === 5 && <Button type="submit" className="btn-success">Enviar</Button>}
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default FormActivation;
