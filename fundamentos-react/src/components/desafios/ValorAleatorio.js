import React from 'react';

/*
  Componente que irá gerar um valor aleatório qualquer ao ser renderizado
*/
export default function ValorAleatorio(props){
  const {min, max} = props; // realizando o destruct para receber os valores

  const result = parseInt(Math.random() * (max - min)) - min;

  return (
    <div>
      <h2>Gerando valor aleatório</h2>
      <p> Valor minimo  {min}</p>
      <p> Valor maximo  {max}</p>
      <strong> Resultado  {result}</strong>
    </div>
  );
}
