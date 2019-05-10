import React, { Component } from 'react';
// import './App.css';
// import Product from './Compunents/Product';  
class App extends Component {
    constructor(Props){
        super(Props);
        this.state = {
            data :0
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    }
    setStateHandler= () =>{
        console.log('jaiai')
        console.log('akakak')
        console.log('kdkdkdk')
        console.log('lam')
        this.setState({data : this.state.data+1});
    }
    render(){
        return (
            <div>
                <button onClick = {this.setStateHandler}>
                    click me
                </button>
                <h1>{this.state.data}</h1>
            </div>
        );
    }
    
 
}
class Contend extends Component{
    componentWillMount = ()=>{
        console.log('component will mount');
    }
    componentDidMount = ()=>{
        console.log('component did mount');
    }
    componentWillUnmount = () =>{
        console.log('component will un mount');
    }
    shouldComponentUpdate = ()=>{
        console.log('shound component update');
    }
    componentWillUpdate = ()=>{
        console.log('component will update');
    }
    componentDidUpdate = ()=>{
        console.log('component did upfate');
    }
    render(){
        return(
            <div>
                <h1>{this.props.fullname}</h1>
            </div>
        );
    }
}

 
  
export default App;
