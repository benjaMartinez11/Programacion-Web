// src/components/CurrencyList.js

import React, { useState, useEffect } from 'react';

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

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

  const handleConvert = () => {
    fetch(`https://v6.exchangerate-api.com/v6/519a9a21833865b3c4ad353e/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const conversionRate = data.conversion_rates[toCurrency];
        const result = amount * conversionRate;
        setConvertedAmount(result);
      })
      .catch(error => console.error('Error fetching conversion data:', error));
  };

  return (
    <div ClasName="currency-converter button">
      <h2>Conversor de Monedas</h2>
      <div>
        <label>
          Desde:
          <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </label>
        <label>
          Hacia:
          <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </label>
        <label>
          Cantidad:
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <button onClick={handleConvert}>Convertir</button>
      </div>
      {convertedAmount && (
        <p>{amount} {fromCurrency} equivale a {convertedAmount.toFixed(2)} {toCurrency}</p>
      )}
    </div>
  );
};

export default CurrencyList;