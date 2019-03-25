import React from 'react';
import { EDEADLK } from 'constants';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h3 className="header__subtitle">{props.subtitle}</h3>}
    </div>
  </div>
);
  
  Header.defaultProps = {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'
  }; 

  export default Header;