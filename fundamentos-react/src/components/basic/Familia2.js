import React from 'react';

/*
  os dados das props pai podem ser passados para os filhos diretamente por props: caso willian
  é ossivel passar os dados por spread usando {...props}: caso marcio
  é também possivel sobrescrever diretamente: caso fernando

  React.cloneElement permite recuperar os componentes filhos e adicionar as props para manipular
*/

export default (props)=>{
  return (
    <div>
      {
        props.children.map((el, i)=>{ // criando um map para percorrer a props.children
              return React.cloneElement(el, {...props, key:i}) // para cada children o react irá clonar e adicionar as props
          })
        }
    </div>
  );
}
