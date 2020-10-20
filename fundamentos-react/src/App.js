/*
  Função responsável por manipular todos os componetes da aplicação
  Também manipula os arquivos estáticos e imports que afetam toda a aplicação
*/
import React from 'react';

// importando o css
import './css/index.css'

import Primeiro from './components/basic/Primeiro';
import ComponenteComParametro from './components/basic/ComponenteComParametro';
import ComponenteComFragmento from './components/basic/ComponenteComFragmento';
import ValorAleatorio from './components/desafios/ValorAleatorio'

export default ()=>{ // criando uma arrow function
  return (
    <div>
      <h1>Ola, realizando as aulas do primeiro componente</h1>
      <Primeiro/>
      <ComponenteComParametro titulo="Meu titulo" nota={10.0}/>
      <ComponenteComFragmento/>
      <ValorAleatorio min={10} max={100}/>
    </div>
  );
}
