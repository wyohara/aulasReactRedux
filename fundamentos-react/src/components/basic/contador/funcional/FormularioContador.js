import React from 'react';


export default (props)=>{
  return (
    <div>
      <input id="incremento" type="number" value={props.valorDoIncremento} onChange={(e) =>props.alterarIncremento(+e.target.value)}/>
    </div>
  )
}
