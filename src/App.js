import React, { Component } from 'react';

export default class Calcu extends Component {
     
  state = {
      n1 : '',
      n2 : '',
      result : ''
  }
     
    inputOne = (event) => {
        this.setState({
           n1 : Number(event.target.value)
        })
    };
    
    inputTwo = (event) => {
        this.setState ({
          n2 : Number(event.target.value)
        })
    };

   soma = () => {
     const {n1, n2} = this.state
        this.setState({
           result: n1 + n2
        })
  };
     
    subtrair = () => {
       const {n1, n2} = this.state
          this.setState({
            result : n1 - n2
        })
    };

     multiplicar = () => {
         const {n1, n2} = this.state
             this.setState({
                result : n1 * n2
            })
        }; 

     dividir = () => {
          const {n1, n2} = this.state
             this.setState({
                 result : n1 / n2
             })
         };   

     delete = () => {
       const {n1, n2} = this.state
          this.setState({
            result : ""
          })
        } 
     
     render() {
         return(
            <div>
                <h1>Calculadora React</h1>
                <input onChange={this.inputOne} type = "number"/>
                <input onChange={this.inputTwo} type = "number"/>
                <button onClick = {this.soma}>+</button>
                <button onClick = {this.subtrair}>-</button>
                <button onClick = {this.multiplicar}>x</button>
                <button onClick = {this.dividir}>/</button>
                <button onClick={this.delete}>C</button>
                <h2>{this.state.result}</h2>
            </div>         
         );
     }
} 