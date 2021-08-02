import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fontsource/roboto'; // Defaults to weight 400.
import { ThemeContext } from './Components/context/context';
const dark = {color: 'darkRed', backgroundColor: 'red'}

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={dark} >
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
