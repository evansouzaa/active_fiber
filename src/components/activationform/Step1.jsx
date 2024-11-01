import {
  CardBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { formConfig } from "../../config/config.js";

const Step1 = ({ formData, setFormData }) => {
  return (

    <CardBody>
      {/* <CardText>Selecione OLT/ESTAÇÃO</CardText> */}
      <FormGroup>
        <Label for="station">Selecione OLT/ESTAÇÃO</Label>
        <Input id="station" name="station" type="select"
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        >
          {formConfig.olt.map((item, index) => (
            <option key={index}>{item.oltName}</option>
          ))}
        </Input>
      </FormGroup>
    </CardBody>
  );
};

export default Step1;
