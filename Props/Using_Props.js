import React, { Component } from 'react';
// import Header from './Compunents/Header.';
// import logo from './logo.svg';
// import './App.css';
// import Product from './Compunents/Product';

class App extends Component {
    render(){
        return(
             <div className = 'demo '><h1>xin chao </h1></div>
        );
    }
}



 class Demo extends Component{
     render(){
         return(
             <div>
                 <h1>{this.props.fullname}</h1>
                 <h1>{this.props.old}</h1>
             </div>
         );
     }
 }
 
export default App;
