import { useState, useRef } from "react";
import "./App.css";
import { FaHeart } from "react-icons/fa";

function App() {
  const [dis1Num, _setDis1Num] = useState(""); // Holds value for the upper display area
  const [dis2Num, _setDis2Num] = useState(""); // Holds value for the lower display area where we type in
  const [dis1El, _setDis1El] = useState("0");
  const [dis2El, setDis2El] = useState("0");
  const [tempResult, setTempResult] = useState("0"); // Temporary  rresult on the left of the page
  const [result, _setResult] = useState(null);
  const [lastOperation, setLastOperation] = useState("");
  const [haveDot, setHaveDot] = useState(false);

  const resultRef = useRef(result);
  const setResult = (data) => {
    resultRef.current = data; // Update the resultRef object's current property
    _setResult(data); // Actual state update of the result variable
  };

  const dis1NumRef = useRef(dis1Num);
  const setDis1Num = (data) => {
    dis1NumRef.current = data;
    _setDis1Num(data);
  };

  const dis1ElRef = useRef(dis1El);
  const setDis1El = (data) => {
    dis1ElRef.current = data;
    _setDis1El(data);
  };

  const dis2NumRef = useRef(dis2Num);
  const setDis2Num = (data) => {
    dis2NumRef.current = data;
    _setDis2Num(data);
  };

  const handleNumber = (num) => {
    if (num === "." && !haveDot) {
      setHaveDot(true);
    } else if (num === "." && haveDot) {
      return; // Ignore the dot since we already have one
    }
    setDis2Num(dis2Num.concat(num));
    setDis2El(dis2NumRef.current);
    //console.log("dis1Num: ", dis1NumRef.current);
    //console.log("dis2Num: ", dis2NumRef.current);
  };

  const handleOperation = (operation) => {
    //console.log("operation selected: " + operation);
    if (!dis2Num) {
      return; // No number to perform an operation on
    }
    setHaveDot(false);
    const operationName = operation; // e.g. +
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
      //console.log("Result: ", resultRef.current);
    } else {
      setResult(parseFloat(dis2Num));
      // console.log("Result: ", resultRef.current);
    }
    clearVar(operationName); // There is a trailing symbol (e.g. 20 + ) because anargument is passed into the function
    setLastOperation(operationName);
  };

  const clearVar = (name = "") => {
    setDis1Num(
      dis1NumRef.current
        .concat(dis2NumRef.current)
        .concat(" ")
        .concat(name)
        .concat(" ")
    );
    setDis1El(dis1NumRef.current); // 20+
    setDis2El("");
    setDis2Num("");
    setTempResult(resultRef.current);
  };

  const handleEqual = () => {
    //console.log("Equals selected");
    if (!dis1Num || !dis2Num) {
      return; // Cannot work on one number only, e.g. 20 =
    }
    setHaveDot(false); // To allow dots in the next number
    mathOperation();
    clearVar();
    setDis2El(resultRef.current);
    setDis2Num(resultRef.current);
    setDis1Num("");
    setTempResult("");
  };

  const mathOperation = () => {
    if (lastOperation === "+") {
      setResult(parseFloat(resultRef.current) + parseFloat(dis2NumRef.current));
    } else if (lastOperation === "-") {
      setResult(parseFloat(resultRef.current) - parseFloat(dis2NumRef.current));
    } else if (lastOperation === "*") {
      setResult(parseFloat(resultRef.current) * parseFloat(dis2NumRef.current));
    } else if (lastOperation === "/") {
      setResult(parseFloat(resultRef.current) / parseFloat(dis2NumRef.current));
    }
  };

  const handleClear = () => {
    setDis1Num("");
    setDis2Num("");
    setLastOperation("");
    setResult("");
    setTempResult("0");
    setDis1El("0");
    setDis2El("0");
    setHaveDot(false);
  };

  const handleClearEntity = () => {
    setDis2Num(dis2Num.slice(0, dis2Num.length - 1));
    setDis2El(dis2NumRef.current);
    console.log(dis2NumRef.current);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="calculator">
          <div id="display-container">
            <div id="history">{dis1El}</div>
            <div id="display">{dis2El}</div>
            <div id="temp-result">{tempResult}</div>
          </div>
          <div id="buttons">
            <button id="clear" onClick={handleClear}>
              C
            </button>
            <button id="clear=entity" onClick={handleClearEntity}>
              CE
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
              X
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
                handleEqual();
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
          Made with love <FaHeart /> by{" "}
          <a href="https://x.com/kevinnjoroge" target="_blank">
            {" "}
            Kevin Njoroge
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
