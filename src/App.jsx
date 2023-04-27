import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams"

const App = () => {
  return (
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
  )
};

//createElement takes in (thing we want to create, attributes, children) last 2 are optional.
const container = document.getElementById("root");
const root = createRoot(container); //ReactDOM.createRoot replaces legacy ReactDOM.render
root.render(<App />); //createElement can take in components as well and renders it out
