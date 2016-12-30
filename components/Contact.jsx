import React from 'react';
import ReactDOM from 'react-dom';
class Contact extends React.Component {
	constructor(){
		super();
		this.state ={
			name : "Welcome to contact page Muftau"
		}
	}
   render() {
      return (
         <div>
            <h1>{this.state.name}</h1>
         </div>
      )
   }
}
export default Contact;