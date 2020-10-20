import React from 'react';

import Filho from './Filho';

/*
  os dados das props pai podem ser passados para os filhos diretamente por props: caso willian
  é ossivel passar os dados por spread usando {...props}: caso marcio
  é também possivel sobrescrever diretamente: caso fernando
*/

export default (props)=>{
  return (
    <span>
      <Filho name="willian" sobrenome={props.sobrenome}/>
      <Filho name="marcio" {...props}/>
      <Filho name="fernando" sobrenome="silva"/>
    </span>
  );
}
