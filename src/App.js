import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div class="d-flex">
        <div id="container" class="bg">
            <div class="logo">
                <h4 class="text-light font-weight-bold">Sensor-Glass</h4>
            </div>
            <div class="menu">
                <a href="#" class="d-block"><i class="icon ion-md-keypad"></i>Inicio</a>
                <a href="#" class="d-block"><i class="icon ion-md-switch"></i>Tablero</a>
                <a href="#" class="d-block"><i class="icon ion-md-walk"></i>
                    Cerrar sesión</a>
            </div>
        </div>
    </div>
    );
  }
}

export default withAuthenticator(App, true);
