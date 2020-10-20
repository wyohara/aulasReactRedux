import React from 'react';

/*
  Componente que aceita parametro
    - dentro do index.js é passado o valor no formato <ComponenteComParametro titulo="Meu titulo"/>
    - no componente original o parametro é acessado como um json o nome por padrão é props
*/
export default function ComponenteComParametro(props){
  return (
    <div>
      <h2>Componente com parâmetro</h2>
      <p> Seu valor é: {props.titulo}</p>
      <strong> Sua nota é: {props.nota}</strong>
    </div>
  );
}
