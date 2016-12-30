import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class App extends React.Component {
 render() {
  var mystyle = {
   marginTop:70,
   color:'#0a67ed',
   content: {
    fontSize:50
  },
 }
 return (
   <div>
   <div className="container">
     <nav className="navbar navbar-inverse navbar-fixed-top">
         <div className="container-fluid">
             <div className="navbar-header">
                 <a className="navbar-brand" href="#"></a>
             </div>
             <ul className="nav navbar-nav">
                <li><Link to="home">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
             </ul>
         </div>
     </nav>

     <div style={mystyle}>
         <h1 style ={mystyle.content}>{this.props.children}</h1>
     </div>
   </div>
   </div>
   )
}
}

export default App;

