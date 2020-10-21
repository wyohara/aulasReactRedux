import React, {Component} from 'react';

import Display from './DisplayContador';
import Botoes from './Botoes';
import FormularioContador from './FormularioContador';

class Contador extends Component {

  constructor(props){
    super(props)
      this.state ={
        numero:this.props.numeroInicial ||0,
        numeroIncrementado:this.props.numeroInicial,
        incremento: this.props.incremento || 5,
      }
  } 

  incrementarValor = ()=>{
    this.setState({
      numeroIncrementado:this.state.numeroIncrementado + this.state.incremento
    });
  }


  decrementarValor = ()=>{
    this.setState({
      numeroIncrementado:this.state.numeroIncrementado - this.state.incremento
    });
  }

  alterarIncremento = (novoIncremento)=>{
    this.setState({
      incremento: novoIncremento,
    });
  }

  render(){
    return (
      <div>
        <h2>Contador</h2>
          <p>Numero inicial: {this.state.numero}</p>
          <Display numero ={this.state.numeroIncrementado}/>
          <FormularioContador valorDoIncremento={this.state.incremento} alterarIncremento={this.alterarIncremento}/>
        <Botoes incrementarValor={this.incrementarValor} decrementarValor={this.decrementarValor}/>
      </div>
    )
  }
}

export default Contador;
