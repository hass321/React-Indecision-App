import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link" 
        onClick={props.handleOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length == 0 && <h3 className="widget__message">Please add an option to get started</h3>}
    {props.options.map((item,index) => (
      <Option 
        count={index + 1}
        key={item}
        optionsText={item}
        deleteOption={props.deleteOption}
      />
    ))}
  </div>
);

  export default Options;