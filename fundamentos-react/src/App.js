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
import ValorAleatorio from './components/desafios/ValorAleatorio';
import Familia from './components/basic/Familia';
import Familia2 from './components/basic/Familia2';
import Filho from './components/basic/Filho';
import ListaAlunos from './components/basic/ListaAlunos';

import Card from './components/layouts/Card';

export default ()=>{ // criando uma arrow function
  return (
    <div >
      <h1>Ola, realizando as aulas do primeiro componente</h1>
      <div className="app">
        <Card title="Parte 1 - Meu primeiro componente">
          <Primeiro/>
        </Card>

        <Card title="Parte 2 - Aprendendo a usar props" color="#700">
          <ComponenteComParametro titulo="Meu titulo" nota={10.0}/>
        </Card>

        <Card title="Parte 3 - Usando fragment" color="#007">
          <ComponenteComFragmento/>
        </Card>

        <Card title="Parte 4 - Card de desafio valor aleatório" color="#070">
          <ValorAleatorio min={10} max={100}/>
        </Card>

        <Card title="Parte 5 - Usando componentes filhos" color="#070">
          <Familia sobrenome="ohara"></Familia>
        </Card>

        <Card title="Parte 6 - Usando componentes filhos e props.children" color="#270">
          <Familia2 sobrenome="ohara">
            <Filho name="willian"/>
            <Filho name="marcio"/>
            <Filho name="fernando"/>
          </Familia2>
        </Card>

        <Card title="Parte 7 - Percorrendo listas" color="#20A">
          <ListaAlunos/>
        </Card>

      </div>
    </div>
  );
}
