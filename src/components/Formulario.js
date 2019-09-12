import React from 'react'

export default class Formulario extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">time da casa</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Time da casa"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">time visitante</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Time Visitante"/>
                </div>

                <div class="form-group">
                    <label for="local">Local da partida</label>
                    <input type="text" class="form-control" id="local" placeholder="Local"/>
                </div>

                <div class="form-group">
                    <label for="hora">Horário da partida</label>
                    <input type="text" class="form-control" id="hora" placeholder="hora"/>
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        )
    }

}