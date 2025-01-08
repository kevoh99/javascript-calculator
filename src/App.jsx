import { useState } from "react";
import "./App.css";
import { FaHeart } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);
  const handleClear = () => {
    console.log("display cleared");
  };

  const handleNumber = (num) => {
    console.log(num);
  };

  const handleOperation = (operation) => {
    console.log(operation + " selected");
  };

  return (
    <div className="app">
      <div className="container">
        <div className="calculator">
          <div id="display-container">
            <div id="history">0</div>
            <div id="display">0</div>
            <div id="temp-result">0</div>
          </div>
          <div id="buttons">
            <button id="clear" onClick={handleClear}>
              C
            </button>
            <button
              id="divide"
              onClick={() => {
                handleOperation("/");
              }}
            >
              /
            </button>
            <button
              id="multiply"
              onClick={() => {
                handleOperation("*");
              }}
            >
              *
            </button>
            <button
              id="seven"
              onClick={() => {
                handleNumber("7");
              }}
            >
              7
            </button>
            <button
              id="eight"
              onClick={() => {
                handleNumber("8");
              }}
            >
              8
            </button>
            <button
              id="nine"
              onClick={() => {
                handleNumber("9");
              }}
            >
              9
            </button>
            <button
              id="subtract"
              onClick={() => {
                handleOperation("-");
              }}
            >
              -
            </button>
            <button
              id="four"
              onClick={() => {
                handleNumber("4");
              }}
            >
              4
            </button>
            <button
              id="five"
              onClick={() => {
                handleNumber("5");
              }}
            >
              5
            </button>
            <button
              id="six"
              onClick={() => {
                handleNumber("6");
              }}
            >
              6
            </button>
            <button
              id="add"
              onClick={() => {
                handleOperation("+");
              }}
            >
              +
            </button>
            <button
              id="one"
              onClick={() => {
                handleNumber("1");
              }}
            >
              1
            </button>
            <button
              id="two"
              onClick={() => {
                handleNumber("2");
              }}
            >
              2
            </button>
            <button
              id="three"
              onClick={() => {
                handleNumber("3");
              }}
            >
              3
            </button>
            <button
              id="equals"
              onClick={() => {
                console.log("Equals selected");
              }}
            >
              =
            </button>
            <button
              id="zero"
              onClick={() => {
                handleNumber("0");
              }}
            >
              0
            </button>
            <button
              id="decimal"
              onClick={() => {
                handleNumber(".");
              }}
            >
              .
            </button>
          </div>
        </div>
        <footer>
          Made with love <FaHeart /> by Kevin Njoroge.
        </footer>
      </div>
    </div>
  );
}

export default App;
