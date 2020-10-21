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
import ListaProdutos from './components/desafios/ListaProdutos';
import RenderizaoCondicional from './components/basic/renderizacaoCondicional/RenderizacaoCondicional';
import TelaUsuario from './components/basic/renderizacaoCondicional/TelaUsuario';
import ComunicacaoDireta from './components/basic/comunicacao/direta/ComunicacaoDireta_pai';
import ComunicacaoIndireta from './components/basic/comunicacao/direta/ComunicacaoIndireta_pai';
import ComponenteControlado from './components/basic/ComponenteControlado';
import Contador from './components/basic/contador/Contador';
import ContadorFuncional from './components/basic/contador/funcional/ContadorFuncional.js';
import GeradorMegasena from './components/desafios/megasena/GeradorMegasena';


// components de layout
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


        <Card title="Desafio - Criando a tabela de produtos" color="#2AA">
          <ListaProdutos/>
        </Card>

        <Card title="Aula 8 - Renderização condicional" color="#2AF">
          <TelaUsuario usuario={{"nome":"Willian"}}/>
          <TelaUsuario usuario={{"email":"Willian"}}/>
          <RenderizaoCondicional numero={20}/>
        </Card>

        <Card title="Aula 9 - Comunicação direta e indireta entre componente pai e filho" color="#BAF">
          <ComunicacaoDireta/>
        </Card>

        <Card title="Aula 10 - Comunicação indireta entre componente pai e filho" color="#FAB">
          <ComunicacaoIndireta/>
        </Card>

        <Card title="Aula 10 - Usando componente controlado" color="#23B">
          <ComponenteControlado/>
        </Card>

        <Card title="Aula 11 - Criando um contador usando classe" color="#424242">
          <Contador numeroInicial={10}/>
        </Card>

        <Card title="Aula 12 - Criando um contador funcional" color="#242424">
          <ContadorFuncional numeroInicial={10}/>
        </Card>

        <Card title="Aula 13 - Desafio Mega Sena" color="#24FB24">
          <GeradorMegasena/>
        </Card>
      </div>
    </div>
  );
}
