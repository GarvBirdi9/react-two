import React, { useState } from "react";
import Message from "../components/Message";
import { Button } from "../components/Button";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  const plus = () => {
    // count++;
    setCount(count + 1);
    console.log("plus ", count);
  };

  const minus = () => {
    // count--;
    setCount(count - 1);
    console.log("minus ", count);
  };

  return (
    <div className="container">
      <Message color="alert alert-success text-center" msg="Counter App" />
      <Message
        color="alert alert-info"
        msg="The number of counts are : "
        val={count}
      />
      {/* component is giving an attribute to the single components */}
      <Button fn={plus} color="btn btn-primary" val="+" /> &nbsp;
      <Button fn={minus} color="btn btn-danger" val="-" />
    </div>
  );
};
