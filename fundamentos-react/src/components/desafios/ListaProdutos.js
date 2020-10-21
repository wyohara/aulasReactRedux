import React from 'react';

import produtos from '../../data/dadosProdutos';
import '../componentsCSS/listaProdutos.css';

export default ()=>{

  function get_linesTableProdutos(){
    return produtos.map((produto, i)=>{
      return (
        <tr key={produto.id} className={i%2 === 0 ? '' :'zebrado' /*caso i%2 aplica zebrado*/}> 
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preco.toFixed(2)}</td>
        </tr>
      )
    })
  }

  return (
    <div style={{'padding':'20px'}} className='tabelaProdutos'>
      <h2>Tabela de produtos</h2>
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>nome</th>
          <th>preço</th>
        </tr>
        </thead>
        <tbody>
          {get_linesTableProdutos()}
        </tbody>
      </table>
    </div>
  );
}
