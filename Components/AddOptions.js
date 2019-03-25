import React from 'react';

export default class AddOptions extends React.Component {

    state = {
      error: undefined
    };
  
    adding = (e) => {
      e.preventDefault();

      const option = e.target.elements.optAdd.value.trim();
      const error = this.props.handleAddOptions(option);

      this.setState(() => ({error}));

      if(!error){
        e.target.elements.optAdd.value = " ";
      }
    };
  
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option--error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.adding}>
            <input className='add-option__input' type="text" name="optAdd" />
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
  };