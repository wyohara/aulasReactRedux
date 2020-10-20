
import React from 'react'; // usado para renderizar o JSX
import ReactDOM from 'react-dom'; // usado para manipular o DOM da tela

// importando o css
import './css/index.css'

import Primeiro from './components/basic/Primeiro';
import ComponenteComParametro from './components/basic/ComponenteComParametro';

const el = document.getElementById('root')
ReactDOM.render(
  <div>
    <h1>Ola</h1>
    <Primeiro/>
    <ComponenteComParametro titulo="Meu titulo" nota={10.0}/>
  </div>,
  el
);
