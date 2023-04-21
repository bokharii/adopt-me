const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => { //one way data flow: flows only from parent to child (App -> Pet)
  //capitalize components!!!
  return React.createElement(
    "div", //what element are we putting here?
    {}, //attributes you are handing down (id, class, etc)
    [
      React.createElement("h1", {}, "Adopt Me!"), //what is inside or the contents of the element (children)
      React.createElement(Pet, {
        animal: "Dog",
        name: "Luna",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        animal: "Dog",
        name: "James",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Charles",
        breed: "Lion",
      }),
    ]
  );
};

//createElement takes in (thing we want to create, attributes, children) last 2 are optional.
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); //ReactDOM.createRoot replaces legacy ReactDOM.render
root.render(React.createElement(App)); //createElement can take in components as well and renders it out
