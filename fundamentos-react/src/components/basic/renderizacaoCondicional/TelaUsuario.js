import React from 'react';
import If from './If';
import Else from './Else';

export default (props)=>{
  const usuario = props.usuario ||{}
  return (
    <div>
      <If test={usuario && usuario.nome}>
        <h2>Seja bem vindo {usuario.nome}</h2>
      </If>
      <Else test={usuario && usuario.nome}>
        <h2>Seja bem vindo visitante</h2>
      </Else>
    </div>
  )
}
