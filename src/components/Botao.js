import React from 'react'

export default class Botao extends React.Component{

    constructor(){
        super();        
    }

    render(){
        return(<button className="btn btn-primary" onClick={this.props.action}>{this.props.texto}</button>)
    }

}