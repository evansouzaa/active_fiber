import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import { Link } from "react-router-dom";

const Erro404 = () => {
    return (
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-bell me-2"> </i>
                        Erro404 Admin Pro React
                    </CardTitle>
                    <CardBody className="p-4">
                        <Row justify-content>
                            <Col lg="8">
                                <h2 className="mt-4">Error ;)</h2>
                                <h5 className=" mb-4">
                                    Página não encontrada!
                                </h5>
                                <br />
                                <Link to="/" className="d-block button">Voltar</Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Erro404;
