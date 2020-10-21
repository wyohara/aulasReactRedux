import React, {useState} from 'react';

export default (props)=>{
  function geradorNumerosNaoRepetidos (min, max, array){
    const aleatorio = parseInt((Math.random() *((max+1) - min)) + min)
    return array.includes(aleatorio) ? geradorNumerosNaoRepetidos (min, max, array): aleatorio
  }


  function gerarArrayDaMegasenaOrdenado(quantValoresMegasena){
    const arrayMegasenaFillZeros = Array(quantValoresMegasena).fill(0) // preenchendo o array com zeros
    .reduce((arayAnalisado) =>{
        // reduce aplica uma ação no array e passa o mesmo array como parâmetro, como forma recursiva
        const novoValorParaArray = geradorNumerosNaoRepetidos(1,60,arayAnalisado)
        return [...arayAnalisado, novoValorParaArray]
      }, []).sort((n1, n2) => n1 - n2) // organizando em forma crescente

    return arrayMegasenaFillZeros
  }

  const [quantNumerosMegasena, setQuantNumerosMegasena] = useState(props.quantidade || 6);
  const [numeros, setNumeros] = useState(Array(quantNumerosMegasena).fill(0))
  return(
    <div>
      <h2> Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        <label> numeros sorteados </label>
        <input type="number" value={quantNumerosMegasena} onChange={(event) => {setQuantNumerosMegasena(+event.target.value)}}/>
      </div>
      <button onClick={()=>setNumeros(gerarArrayDaMegasenaOrdenado(quantNumerosMegasena))}>gerar numeros </button>
    </div>
  )
}
