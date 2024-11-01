import React from 'react';

import { Table, CardBody, CardText, FormGroup, Input } from "reactstrap";

const Step2 = ({ formData, setFormData }) => {
  return (
    <CardBody className="">
      <CardText>Selecione a ONU/ONT disponível</CardText>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>OLT</th>
            <th>SERIAL</th>
            <th>ÁREA</th>
            <th>PON</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>PTS-EST1</td>
            <td>54504C478946C0C8</td>
            <td>A99</td>
            <td>0/9/5</td>
            <td>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
              </FormGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PTS-EST1</td>
            <td>485754439DDC0FAB</td>
            <td>A54</td>
            <td>0/3/4</td>
            <td>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
              </FormGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>PTS-EST1</td>
            <td>48575443476200AE</td>
            <td>A2</td>
            <td>0/1/0</td>
            <td>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
              </FormGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  );
};

export default Step2;
