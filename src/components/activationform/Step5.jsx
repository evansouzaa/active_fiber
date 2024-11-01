import React from 'react';

const Step5 = ({ formData, setFormData }) => {
  return (
    <div>
      <h3>Passo 5</h3>
      <div className="mb-3">
        <label htmlFor="arquivo" className="form-label">Carregar Arquivo</label>
        <input 
          type="file" 
          className="form-control" 
          id="arquivo" 
          onChange={(e) => setFormData({ ...formData, arquivo: e.target.files[0] })} 
        />
      </div>
    </div>
  );
};

export default Step5;
