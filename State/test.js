import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class test extends Component {
    constructor(Props){
        super(Props);
        this.state ={
            data:[
                 {
                        id:1,
                        name:'ga',
                        age:22
                },
                 {
                    id:1,
                    name:'ga',
                    age:22
            },
           {
                id:1,
                name:'ga',
                age:22
              }
            ]
        }
    }
    render(){
        return(
            <div>
                <Header/> 
                <table>
                    <tbody>
                        {this.state.data.map((person,i)=> <TableRow key={i} data ={person}/>)}
                    </tbody>
                </table>

            </div>
        );
    }
}
class Header extends Component{
    render(){
        return(
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
 class TableRow extends Component{
     render(){
         return (
             <tr>
                 <td>{this.props.data.id}</td>
                 <td>{this.props.data.name}</td>
                 <td>{this.props.data.age}</td>
             </tr>
         );
     }
 }
       

export default test;
