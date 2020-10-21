import React from 'react';


export default (props)=>{
  return (
    <div>
      <button onClick={props.incrementarValor}>+</button>
      <button onClick={props.decrementarValor}>-</button>
    </div>
  )
}
