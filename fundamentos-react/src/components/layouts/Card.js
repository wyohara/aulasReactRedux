import React from 'react';
import "./card.css";
// exibindo os componentes que estão dentro do componente Card usa props.children
export default (props)=>{
  const estilo = {
    backgroundColor: props.color || 'red',
    border:'2px solid '+ props.color|| 'red',
  }

  return (
    <div className="card" style={estilo}>
      <h2>{props.title}</h2>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}
