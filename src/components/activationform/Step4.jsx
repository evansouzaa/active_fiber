import React from 'react';

const Step4 = ({ formData, setFormData }) => {
  return (
    <div>
      <h3>Passo 4</h3>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
      </div>
    </div>
  );
};

export default Step4;
