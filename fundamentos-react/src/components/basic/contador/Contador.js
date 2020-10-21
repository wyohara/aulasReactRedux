import React, {Component} from 'react';

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

  alterarIncremento = (evento)=>{
    this.setState({
      incremento: +parseInt(evento.target.value),
    });
  }

  render(){
    return (
      <div>
        <h2>Contador</h2>
        <p>Numero inicial: {this.state.numero}</p>
        <p>Contador : {this.state.numeroIncrementado} </p>
        <input id="incremento" type="number" value={this.state.incremento} onChange={this.alterarIncremento}/>
        <button onClick={this.incrementarValor}>+</button>
        <button onClick={this.decrementarValor}>-</button>
      </div>
    )
  }
}

export default Contador;
