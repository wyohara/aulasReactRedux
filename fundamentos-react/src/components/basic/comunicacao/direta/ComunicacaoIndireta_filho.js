import React from 'react';

export default (props)=>{
  const idadeAleatoria = parseInt(Math.random()*(50-70)+50);
  const gerarBool = Math.random()>0.5;

  return(
    <div>
      <span>Filho</span>

    <button onClick={ (e) => {
          props.quandoClicar('Filho->Pai', idadeAleatoria, gerarBool)
        }
      }>Fornecer informação</button>
    </div>
  )
}
