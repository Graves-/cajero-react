import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Inicio</h1>

        <h2>Bienvenido, {this.props.nombre}. Tu saldo es de: ${this.props.saldo.toFixed(2)}</h2>
      </div>
    );
  }
}
