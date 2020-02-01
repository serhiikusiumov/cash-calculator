import React from 'react';
import './App.css';
import CashListContainer from "../../containers/CashListContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CashListContainer />
      </header>
    </div>
  );
}

export default App;

// function getExchangeRate() {
//   // Where we're fetching data from
//   fetch(`http://resources.finance.ua/ua/public/currency-cash.json`,
//     {
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*'
//       }
//     })
//     // We get the API response and receive data in JSON format...
//     .then(response => response.json())
//     // ...then we update the users state
//     .then(data =>
//       console.log(data)
//     )
// }
// getExchangeRate();