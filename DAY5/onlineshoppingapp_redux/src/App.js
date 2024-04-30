import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector(store => store.products);
  console.log(products);
  return <div>App</div>;
}

export default App;
