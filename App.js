import logo from "./logo.svg";
import "./App.css";
import { CounterApp } from "./pages/CounterApp";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // return (
  //   <div className="center">
  //     <label>
  //       Enter your name
  //       <input placeholder="" />
  //     </label>
  //     <div>
  //       <label>
  //         Enter your age
  //         <input placeholder="" />
  //       </label>
  //     </div>
  //     <div className="buttonDiv">
  //       <button>Submit</button>
  //     </div>
  //   </div>
  // );

  return (<CounterApp/>);
}

export default App;
