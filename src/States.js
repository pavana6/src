import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"NISHIMIYA"
        }
    }
    
    render() {
        setTimeout(()=>
        {this.setState({name:"NISHIMIYA SAN"})},2000)
        return (
            <div>
                <h1>
                    {this.state.name}
                    </h1>  
            </div>
        )
    }
}
