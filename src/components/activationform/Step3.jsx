import React from 'react';

const Step3 = ({ formData, setFormData }) => {
  return (
    <div>
      <h3>Passo 3</h3>
      <div className="mb-3">
        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
        <input 
          type="date" 
          className="form-control" 
          id="dataNascimento" 
          value={formData.dataNascimento} 
          onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })} 
        />
      </div>
    </div>
  );
};

export default Step3;
