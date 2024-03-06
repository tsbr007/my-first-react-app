import React, { useState } from 'react';

const CustomerForm = () => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCustomerNumberChange = (event) => {
    setCustomerNumber(event.target.value);

    setErrorMessage('');
  };

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);

    if (customerNumber === 'Balaji') {
      if (event.target.value !== 'Wells Fargo') {
        setErrorMessage('Customer with name Balaji should have the bank as Wells Fargo only.');
      } else {
         setErrorMessage('');
      }
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <label>
        Customer Number:
        <input type="text" value={customerNumber} onChange={handleCustomerNumberChange} />
      </label>
      <br />
      <label>
        Bank Name:
        <input type="text" value={bankName} onChange={handleBankNameChange} />
      </label>
      <br />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CustomerForm;
