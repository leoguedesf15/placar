import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlacarContainer from './components/PlacarContainer';
import Formulario from './components/Formulario'

export default class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      placar:{
        nomeTimeCasa:'',
        nomeTimeVisitante:'',
        partida:{
          local:'',
          horario:''
        }
      }
    }
  }
  
  setarEstado(placar){

  }


  render(){
  return (
    <div>
      <Formulario action={(placar)=>this.setarEstado(placar)}/>
      <PlacarContainer/>
    </div>
  );

}
}


