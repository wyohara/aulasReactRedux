import React, {useState} from 'react';


export default (props)=>{
  const [valor, setValor] = useState("valorInicial");

  function changeInput(e){
    console.log(e)
    setValor(e.target.value)
  }

  return (
    <div>
      <div><span>{valor}</span></div>
      <input value={valor} onChange={changeInput}/>
      <input value={valor} readyOnly/>
    </div>
  )
}
