// import validator from 'validator';
// console.log(validator.isEmail('test@wo.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from '../Components/IndecisionApp';
import './styles/style.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));


// ******* Some Extra Code *********

  
  // class Header extends React.Component {
  //   render() {
  //     console.log(this.props);
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1>
  //         <h3>{this.props.subtitle}</h3>
  //       </div>
  //     );
  //   }
  // }
  
  // class Action extends React.Component {
  //   render() {
  //     console.log("Action", this.props);
  //     return (
  //       <div>
  //         <button
  //           onClick={this.props.handlePick}
  //           disabled={!this.props.hasOptions}
  //         >
  //           what should i do?
  //         </button>
  //       </div>
  //     );
  //   }
  // }
  
  // class Options extends React.Component {
  //   render() {
  //     console.log("Options", this.props);
  //     return (
  //       <div>
  //         <button onClick={this.props.handleOptions}>Remove all</button>
  //         {this.props.options.map(item => (
  //           <Option key={item} optionsText={item} />
  //         ))}
  //       </div>
  //     );
  //   }
  // }
  