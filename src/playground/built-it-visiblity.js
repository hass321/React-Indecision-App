class Visiblity extends React.Component{
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.state = {
            visiblity: false,
            text: 'Hey.This is some details you can now see!'
        };
    }

    show(){
        // let showText = document.getElementById('text');

        this.setState({ visiblity: !this.state.visiblity });
    }

    render() {
        // let visiblity = false;
        return(
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.show}>{this.state.visiblity ? 'Hide details': 'Show details'}</button>
                <p>{this.state.visiblity && this.state.text}</p>
            </div>
        );
    }
}

ReactDOM.render(<Visiblity />, document.getElementById('app'));




// let visiblity = true;

// const show = () => {
//     visiblity = !visiblity;
//     reRender();
// };

// const reRender = () => {
//     const template = (
//         <div>
//             <h1>visiblity Toggle</h1>
//             <button onClick={show}>{visiblity ? 'show details' : 'Hide details'}</button>
//             {!visiblity && (
//                 <p>This is the Hidden "Text"</p> 
//             )}    
//         </div>
//     );
//     ReactDOM.render(template,document.querySelector('#app'));
// };

// reRender();