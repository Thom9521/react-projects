import React, { useState } from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { drink, pay, no, run } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.amount);

  const handleDrink = () => {
    dispatch({
      type: "DRINK",
      payload: { amount: amount + 10 },
    });
  };
  const handleNo = () => {
    dispatch({
      type: "NO",
      payload: {},
    });
  };
  const handlePay = () => {
    dispatch({
      type: "PAY",
      payload: { amount: amount },
    });
  };
  const handleRun = () => {
    dispatch({
      type: "RUN",
      payload: {},
    });
  };

  return (
    <div className="container">
      <h1 class="mb-3">Lemonade Stand</h1>
      <h5 class="mb-5">
        Hello and welcome to my lemonade stand <br />A lemonade cost 10 DKK each
      </h5>
      <p>Do you want a lemonade?</p>
      <button class="btn btn-primary" onClick={handleDrink}>
        Drink lemonade
      </button>
      <button class="btn btn-danger" onClick={handleNo}>
        No thanks
      </button>
      <p id="noThanks"></p>

      <p class="mt-5">
        You currently need to pay: <span id="value">{amount}</span> DKK
      </p>
      <button class="btn btn-primary" onClick={handlePay}>
        Pay
      </button>
      <button class="btn btn-danger" onClick={handleRun}>
        RUN!
      </button>
    </div>
  );
}

export default connect(null, { drink, pay, no, run })(App);
