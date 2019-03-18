import React, { Component } from 'react';
// import Header from './Compunents/Header.';
// import logo from './logo.svg';
// import './App.css';
// import Product from './Compunents/Product';

class App extends Component {
     constructor(props){
         super(props);
         this.state = {
             data : 'ahihi'
         }
         this.setStateHandler = this.setStateHandler.bind(this);
     }
     setStateHandler =()=>{
            this.setState({data:'con heo u'});
     }
     render (){
         return (
             <div>
                 <button onClick= { this.setStateHandler}>click me</button>
                 <h1>{this.state.data}</h1>
             </div>
         );
     }
 }
export default App;
