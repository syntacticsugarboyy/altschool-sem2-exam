import { Link } from "react-router-dom";
import customHook from "./customHook";
import "./counter.css";
import {
  ChevronUp,
  ChevronsUp,
  RefreshCw,
  Sidebar,
  ChevronsDown,
  ChevronDown,
} from "react-feather";

function Counter() {
  const {
    count,
    handleCountIncrease,
    handleCountInflate,
    handleCountReset,
    handleCountSet,
    handleCountDeflate,
    handleCountReduce,
  } = customHook();

  return (
    <>
      <div className="container">
        <h3>Current value:</h3>
        <h1>{count}</h1>
        <div className="flex">
          <ChevronUp onClick={handleCountIncrease} className="toggle-buttons" />
          <ChevronsUp onClick={handleCountInflate} className="toggle-buttons" />
          <RefreshCw onClick={handleCountReset} className="toggle-buttons" />
          <Sidebar onClick={handleCountSet} className="toggle-buttons" />
          <ChevronsDown
            onClick={handleCountDeflate}
            className="toggle-buttons"
          />
          <ChevronDown onClick={handleCountReduce} className="toggle-buttons" />
        </div>
      </div>
    </>
  );
}

export default Counter;
