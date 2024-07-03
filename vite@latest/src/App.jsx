// src/components/CurrencyList.js

import React, { useState, useEffect } from 'react';

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/519a9a21833865b3c4ad353e/latest/USD')
      .then(response => response.json())
      .then(data => {
        // Extraemos las monedas del objeto de respuesta
        const currenciesArray = Object.keys(data.conversion_rates);
        setCurrencies(currenciesArray);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Monedas Disponibles:</h2>
      <ul>
        {currencies.map(currency => (
          <li key={currency}>{currency}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;