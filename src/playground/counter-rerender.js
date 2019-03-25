class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.adding = this.adding.bind(this);
    this.removing = this.removing.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount(){
    let count = localStorage.getItem('count');
    count = Number(count);
    if(!isNaN(count)){
      this.setState(() => ( {count} ));
    }
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count',this.state.count);
    }
  }

  adding() {
    this.setState(prevState => ({count: prevState.count + 1}));
    // this.setState({count: this.state.count + 1});
  }
  removing() {
    this.setState(prevState => ( {count: prevState.count - 1} ));
    // this.setState({count: this.state.count - 1});
  }
  reset() {
    this.setState(prevState => ( {count: 0} ));
    // this.setState({count: 0});
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.adding}>+1</button>
        <button onClick={this.removing}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById("app"));

//Counter without Classes or React Component Start

// let count = 0;

// const addOne = () => {
//   count++;
//   reRenderCount();
// };

// const minusOne = () => {
//   count--;
//   reRenderCount();
// };

// const reset = () => {
//   count = 0;
//   reRenderCount();
// };

// const templateThree = (
//   <div>
//     <h1>Count : {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );

// ReactDOM.render(templateThree, appRoot);

//Rerender the main function for js expression to work properly

// const reRenderCount = () => {
//   const templateThree = (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateThree, document.getElementById('app'));
// };

// reRenderCount();
