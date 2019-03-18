import React, { Component } from 'react';
// import Header from './Compunents/Header.';
// import logo from './logo.svg';
// import './App.css';
// import Product from './Compunents/Product';



  
class App extends Component {
        constructor(Props){
            super(Props);
            this.state={
                header:'this is header',
                contend:'this is contend'
            }
        }
        render(){
            return(
                <div>
                    <Header headerP = {this.state.header}/>,
                    <Contend contendP = {this.state.contend}/>
                </div>
            );
        }

}
class Header extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerP}</h1>
            </div>
        );

    }
}
class Contend extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.contendP}</h1>
            </div>
        );
    }
}
export default App;
