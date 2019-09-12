import React from 'react'
import Time from './Time'
import Partida from './Partida'
import '../style/Partida.css'
import '../style/PlacarContainer.css'
export default class PlacarContainer extends React.Component{

    constructor(){
        super();
        this.state={
            timeDaCasa:'',
            timeVisitante:'',
            partida:{
                local:'',
                horario:''
            }
        }
    }

    setarDados(){
        this.setState({
            timeDaCasa:'TimeDaCasa',
            timeVisitante:'timeVisitante',
            partida:{
                local:'Maracanã',
                horario:'19h'
            }
        })
    }
    componentWillMount(){
        this.setarDados()
    }
    render(){
        return(
            <div className="container">
                <Time nome={this.state.timeDaCasa}/>
                <Partida dados={this.state.partida} />
                <Time nome={this.state.timeVisitante}/>

            </div>
        );
    }
}