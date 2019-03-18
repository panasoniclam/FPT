import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class State extends Component {
    constructor(props){
        super(props);
        this.state ={
            header :'ahihi',
            contend :'ahaha'
        }
        this.props ={
            header:'dddddd'
        }
    }
    render(){
      
    this.setState({header:'con heo ú'},{contend:'con khỉ khô'})
        
        return(
            <div><h1>{this.state.header}</h1>
            <h1>{this.state.contend}</h1>
           
            </div>
            
        );
    }
}

       

export default State;
