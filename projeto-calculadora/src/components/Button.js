import React from 'react';
import './Button.css';

export default(props)=>{

  function definirEstilos(props){
    return `button  
    ${props.isOoperation ?'operation' : ''}
    ${props.isDouble ?'double': ''}
    ${props.isTriple ?'triple': ''} `
  }

  return(
    <button
      className={definirEstilos(props)}
      onClick={e=>props.click && props.click(e.target.innerHTML)}>
      {props.label}
    </button>
  )
}
