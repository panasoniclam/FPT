import React, { Component } from 'react';
// import Header from './Compunents/Header.';
// import logo from './logo.svg';
// import './App.css';
// import Product from './Compunents/Product';
class App extends Component {
   
    render(){
            var Wrapper = {
                width:960,margin:0 ,
            }
            var header ={
                padding:14 ,
                background:'#404040'
            }
            var contend ={
                background:'#ffffff',
                padding:20,
                height:850,
                color:'#808080'
            }
            var footer ={
                background:'#808080',
                padding:27
            }
            var T=3 
            var a = 'congratulations'
            var b = 'out'
            
        return(
                <div style ={Wrapper}>
                        <div style ={header}><h1>{ T==3 ? a  : b}</h1></div>
                        <div style ={contend}><h1>contend</h1></div>
                        <div style={footer}><h1>footer</h1></div>
                </div>

        );
    }
}
class Expressions extends Component{
    
}

 
export default App;
