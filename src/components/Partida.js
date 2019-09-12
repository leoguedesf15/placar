import React from 'react'


export default class Partida extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <span className="dadospartida">
                <h4>{this.props.dados.local}</h4>
                <h5>{this.props.dados.horario}</h5>
            </span>
        );
    }
}