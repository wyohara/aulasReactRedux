
import React from 'react'; // usado para renderizar o JSX
import ReactDOM from 'react-dom'; // usado para manipular o DOM da tela

/*
  O arquivo index.js apenas monta os dados no DOM não lidando com os componentes
  O responsável por manipular os componentes é o App.js
*/
import App from './App'

const el = document.getElementById('root')
ReactDOM.render(
  <App/>,
  el
);
