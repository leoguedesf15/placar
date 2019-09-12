import React from 'react'
import Botao from './Botao'
export default class Time extends React.Component{
    constructor(){
        super();
        this.state={            
            gols:0
        }
    }

    marcarGol(){
        this.setState({gols:this.state.gols+1})
    }

    render(){
        return(
            <span>
                <h1>{this.props.nome}</h1>
                <h3>{this.state.gols}</h3>
                <Botao texto='Marcar Gol!' action={this.marcarGol.bind(this)} />
            </span>
        )
    }
}