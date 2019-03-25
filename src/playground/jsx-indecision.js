const appRoot = document.querySelector("#app");

const info = {
  title: "React App",
  subTitle: "First React App From Scratch",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.options.value;
  
  if(option){
    info.options.push(option);
    e.target.elements.options.value = '';
    reRender();
  }
};

const removeAll = () => {
  info.options = [];
  reRender();
};

const decision = () => {
  const randomNum = Math.floor(Math.random() * info.options.length);
  const doIt = info.options[randomNum];
  alert(doIt);
};


const reRender = () => {
  const template = (
    <div>
      <h1>{info.title}</h1>
      {info.subTitle && <p>{info.subTitle}</p>}
      <p>{info.options.length > 0 ? 'Here are your Options' : 'No options'}</p>
      {/*<p>{info.options.length}</p> */}
      <button disabled={info.options.length == 0} onClick={decision}>What should I do?</button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {info.options.map( (item) => <li key={item}>{item}</li> )}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options"/>
        <button>Add Options</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template,appRoot);
};

reRender();

const userName = "M. Hassan";
const userAge = 26;
const userLocation = "Karachi";

function getLocation(location) {
  if (location && location != " ") {
    return <p>City : {location}</p>;
  }
  // else{
  //     return 'Unknown';
  // }
}

const user = {
  name: "Hassan",
  age: 26,
  location: "Karachi"
};
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymus"}</h1>
    {user.age && user.age >= 18 && <p>Age : {user.age}</p>}
    {getLocation(user.location)}
  </div>
);



