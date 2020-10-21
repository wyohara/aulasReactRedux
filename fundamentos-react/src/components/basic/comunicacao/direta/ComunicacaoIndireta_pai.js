import React, {useState} from 'react';
import ComunicacaoFilho from './ComunicacaoIndireta_filho';

export default (props)=>{
    let [campo_nome, set_nome]= useState("?");
    let [campo_numero, set_numero]=useState(0);
    let [campo_bool, set_bool]=useState(false);
    function exibirInformacoes(nome, numero, bool){
      set_nome(nome)
      set_numero(numero)
      set_bool(bool)
    }

    return(
      <div>
        <div>Pai</div>
        <span>{campo_nome} </span>
        <span>{campo_numero} </span>
        <span>{campo_bool? "Verdadeiro":"Falso"} </span>
        <ComunicacaoFilho quandoClicar={exibirInformacoes}/>
      </div>
    )
  }
