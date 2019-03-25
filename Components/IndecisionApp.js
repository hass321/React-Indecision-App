import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
      options: [],
      selectedOption: undefined,
    };
  
    //React State Life Cycle
  
    componentDidMount(){
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        options && this.setState(() => ({ options }));
      }
      catch(e){
        console.log(e);
      }
    };

    componentDidUpdate(prevProps,prevState){
      
      if(prevState.options.length != this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
      };
    
    };

    componentWillUnmount(){
      
    };
  
    handleDelet = () => {
      this.setState(() => ( {options: []} ));
    };

    deleteOption = (optionToRemove) => {
      this.setState( (prevState) => ({
        options: prevState.options.filter((option) => optionToRemove != option)
      }));
    };
  
    handlePick = () => {
      let number = Math.floor(Math.random() * this.state.options.length);
      let pick = this.state.options[number];
      this.setState( () => ( {selectedOption: pick} ));
    };
  
    handleAddOptions = (option) => {
      
      if(!option){
        return 'Enter valid value to add items';
      }
      else if(this.state.options.indexOf(option) > - 1){
        return 'This option already exist';
      }
      
      this.setState( (e) => ({options: e.options.concat(option)}));
      
      console.log(option);
    
    };

    clickOk = () => {
      this.setState( () => ( {selectedOption: undefined} ))
    };
  
    render() {
      return (
        <div>
          <Header />
          <div className="container">
            <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
            options={this.state.options}
            handleOptions={this.handleDelet}
            deleteOption={this.deleteOption}
            />
            <AddOptions 
              handleAddOptions={this.handleAddOptions} 
            />
          </div>
          </div>
          <OptionModal 
            selectedOption={this.state.selectedOption}
            clickOk={this.clickOk}
          />
        </div>
      );
    };
  };

  export default IndecisionApp;