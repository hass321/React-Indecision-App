class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelet = this.handleDelet.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.state = {
      options: []
    };
  }

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
  }
  componentDidUpdate(prevProps,prevState){
    
    if(prevState.options.length != this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  
  }
  componentWillUnmount(){
    console.log('componentWillUnmount!');
  }

  handleDelet() {
    this.setState(() => ( {options: []} ));
  }
  deleteOption(optionToRemove) {
    this.setState( (prevState) => ({
      options: prevState.options.filter((option) => optionToRemove != option)
    }));
  }

  handlePick() {
    let number = Math.floor(Math.random() * this.state.options.length);
    let pick = this.state.options[number];
    alert(pick);
  }

  handleAddOptions(option){
    this.setState( (e) => ({options: e.options.concat(option)}));
  }

  render() {
    return (
      <div>
        <Header />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <br />
        <Options
          options={this.state.options}
          handleOptions={this.handleDelet}
          deleteOption={this.deleteOption}
        />
        <br />
        <AddOptions 
          handleAddOptions={this.handleAddOptions} 
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  );
};

Header.defaultProps = {
  title:'Indecision App',
  // subtitle: 'Put your life in the hands of a computer.'
};  

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

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        what should i do?
      </button>
    </div>
  );
};

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

class AddOptions extends React.Component {

  constructor(props){
    super(props);
    this.adding = this.adding.bind(this);
    this.state = {
      error: undefined
    }
  }

  adding(e) {
    e.preventDefault();

    const option = e.target.elements.optAdd.value.trim();
    

    option && this.props.handleAddOptions(option);
    e.target.elements.optAdd.value = '';
  }

  render() {
    // console.log("AddOptions", this.props);
    return (
      <div>
        <form onSubmit={this.adding}>
          <input type="text" name="optAdd" />
          <button>ADD</button>
        </form>
      </div>
    );
  }
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleOptions}>Remove all</button>
      {props.options.length == 0 && <h3>Please add an option to get started</h3>}
      {props.options.map(item => (
        <Option 
          key={item}
          optionsText={item}
          deleteOption={props.deleteOption}
        />
      ))}
    </div>
  );
};

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

const Option = (props) => {
  return (
    <div>
      {props.optionsText}
      <button
        onClick={(e) => {
          return props.deleteOption(props.optionsText);
        }}
      >
      remove</button>
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     console.log("Option", this.props);
//     return (
//       <div>
//         <li>{this.props.optionsText}</li>
//       </div>
//     );
//   }
// }

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
