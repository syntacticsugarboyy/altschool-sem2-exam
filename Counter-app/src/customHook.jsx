import { useState } from "react";

function customHook(initialState = 0) {
  const [count, setCount] = useState(initialState); // useState to keep track of the count

  const handleCountIncrease = () => {
    //To increase the count by 1
    setCount((count) => count + 1);
  };

  const handleCountInflate = () => {
    //  To increase the count by 10
    setCount((count) => count + 10);
  };

  const handleCountReduce = () => {
    //  To reduce the count by 1
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const handleCountDeflate = () => {
    //  To reduce the count by 10
    if (count > 0 && count - 10 > 0) {
      setCount((count) => count - 10);
    }
  };

  const handleCountReset = () => {
    //  To reset the count
    setCount(initialState);
  };

  const handleCountSet = () => {
    // To start from a set count
    let set = prompt("Enter a number:");

    if (set) {
      setCount(set);
    }
  };

  return {
    count,
    handleCountIncrease,
    handleCountInflate,
    handleCountReset,
    handleCountSet,
    handleCountDeflate,
    handleCountReduce,
  };
}

export default customHook;
