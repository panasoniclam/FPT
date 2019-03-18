import React, { Component } from 'react';
// import Header from './Compunents/Header.';
// import logo from './logo.svg';
// import './App.css';
// import Product from './Compunents/Product';



  
class App extends Component {
      render(){
          return(
              <div>
                  <h3>Array:{this.propArray}</h3>
              </div>
          );
      }
}
 App.propTypes ={
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
 } 
 App.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString: "String value...",
    
    propObject: {
       objectName1:"objectValue1",
       objectName2: "objectValue2",
       objectName3: "objectValue3"
    }
 }
export default App;
