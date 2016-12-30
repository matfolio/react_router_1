import React from 'react';
import ReactDOM from 'react-dom';
class About extends React.Component {
	
	constructor(){
		super();
		this.state ={
			name : "Welcome To About page Muftau"
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
export default About;