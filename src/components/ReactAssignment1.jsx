import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    address1: '',
    address2: '',
    phone1: '',
    phone2: '',
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  return (
    <div>
      {/* First line with two TextInput fields */}
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Address 1"
          value={formData.address1}
          onChange={(e) => handleChange('address1', e.target.value)}
        />
        <input
          type="text"
          placeholder="Address 2"
          value={formData.address2}
          onChange={(e) => handleChange('address2', e.target.value)}
        />
      </div>

      {/* Second line with two TextInput fields */}
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          placeholder="Phone 1"
          value={formData.phone1}
          onChange={(e) => handleChange('phone1', e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone 2"
          value={formData.phone2}
          onChange={(e) => handleChange('phone2', e.target.value)}
        />
      </div>

      <div>
        <p>Address 1: {formData.address1}</p>
        <p>Address 2: {formData.address2}</p>
        <p>Phone 1: {formData.phone1}</p>
        <p>Phone 2: {formData.phone2}</p>
      </div>
    </div>
  );
};

export default MyForm;
