import React, { Component } from 'react';
// import Header from './Compunents/Header.';
// import logo from './logo.svg';
// import './App.css';
// import Product from './Compunents/Product';

class App extends Component {
     constructor(Props){
        super(Props);
        this.state = {
           data :[]
        }
     }
     setStateHandler = ()=>{
        var item = 'set State',
        var myarray = this.state.data.slice();
        myarray.push(item);
        this.setState({data:myarray});
     }
     render = ()=>{
        return(
           <div>
              <button>
                 click me
              </button>
              <h1>{this.state.data}</h1>
           </div>
        );
     }
}
export default App;
