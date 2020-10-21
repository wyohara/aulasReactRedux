import React from 'react';

import dadosAlunos from '../../data/dadosAlunos';

export default ()=>{

  const list = dadosAlunos.map((aluno)=>{
    return (
        <li key={aluno.id}>{aluno.nome} -> {aluno.nota}</li>
    )}
  )

  return (
    <div style={{'padding':'20px'}}>
      <ul>
      {list}
      </ul>
    </div>
  );
}
