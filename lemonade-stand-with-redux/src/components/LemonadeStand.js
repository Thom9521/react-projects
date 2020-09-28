import React from "react";

import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { drink, pay, no, run } from "../redux/actions";
import { useDispatch } from "react-redux";

// Importér Reactstrap komponenter
import { Container, Button } from "reactstrap";

const LemonadeStand = () => {
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
    <Container>
      <h1 className="mb-3">Lemonade Stand</h1>
      <h5 className="mb-5">
        Hello and welcome to my lemonade stand <br />A lemonade cost 10 DKK each
      </h5>
      <p>Do you want a lemonade?</p>
      <Button color="primary" className="mr-1" onClick={handleDrink}>
        Drink lemonade
      </Button>
      <Button color="danger" onClick={handleNo}>
        No thanks
      </Button>
      <p id="noThanks"></p>

      <p className="mt-5">
        You currently need to pay: <span id="value">{amount}</span> DKK
      </p>
      <Button color="primary" className="mr-1" onClick={handlePay}>
        Pay
      </Button>
      <Button color="danger" onClick={handleRun}>
        RUN!
      </Button>
    </Container>
  );
};

export default connect(null, { drink, pay, no, run })(LemonadeStand);
