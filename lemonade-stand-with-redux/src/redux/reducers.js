import { DRINK, PAY, NO, RUN } from "./actionTypes";

const initialState = {
  amount: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DRINK: {
      return {
        ...state,
        amount: (action.payload.amount = action.payload.amount),
      };
    }
    case PAY: {
      return {
        ...state,
        amount: action.payload.amount - action.payload.amount,
      };
    }
    case NO: {
      alert(":(");
      return { ...state };
    }
    case RUN: {
      window.location.href = "https://www.youtube.com/watch?v=MtN1YnoL46Q";
      return { ...state };
    }
    default:
      return state;
  }
}
