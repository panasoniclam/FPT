import React, { Component } from 'react';
// import Header from './Compunents/Header.';
// import logo from './logo.svg';
// import './App.css';
// import Product from './Compunents/Product';



  
class Props extends Component {
     constructor(props){
         super(props);
         this.state ={
             header:'ahihi',
             contend:'sssss'
         }
     }
     render(){
         return(
             <div>
                 <h1>{this.state.contend}</h1>
                 <h2> {this.props.headerpro}</h2>
             </div>
         );
     }
}
 App.defaultProps ={
     headerpro :'jsjsjs'
 }
 
export default Props;
