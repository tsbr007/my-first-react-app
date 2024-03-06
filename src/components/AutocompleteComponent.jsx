import React, { useState } from 'react';

const AutocompleteComponent = () => {
  const defaultCountries = [
    'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain',
    'Russia', 'China', 'Japan', 'India', 'Australia', 'South Korea', 'South Africa', 'Nigeria', 'Egypt', 'Kenya',
    'Saudi Arabia', 'United Arab Emirates', 'Turkey', 'Iran', 'Israel', 'Pakistan', 'Indonesia', 'Thailand', 'Vietnam',
    'Singapore', 'Malaysia', 'Philippines', 'New Zealand', 'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Finland',
    'Denmark', 'Switzerland', 'Austria', 'Greece', 'Portugal', 'Poland', 'Hungary', 'Czech Republic', 'Ireland'
  ];
  const [inputValue, setInputValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(defaultCountries);

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setInputValue(userInput);

    const filtered = defaultCountries.filter(country =>
      country.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleInputClear = () => {
    setInputValue('');
    setFilteredCountries(defaultCountries);
  };

  return (
    <div>
      <label>
        Country:
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type to filter countries"
          />
          <button onClick={handleInputClear} style={{ marginLeft: '5px' }}>
            Clear
          </button>
          {filteredCountries.length > 0 && (
            <select
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                padding: '5px',
                border: '1px solid #ccc',
                borderTop: 0,
                cursor: 'pointer'
              }}
              size={filteredCountries.length > 5 ? 5 : filteredCountries.length}
              onChange={(e) => setInputValue(e.target.value)}
            >
              {filteredCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          )}
        </div>
      </label>
    </div>
  );
};

export default AutocompleteComponent;
