import { DRINK, PAY, NO, RUN } from "./actionTypes";

export const drink = (amount) => ({
  type: DRINK,
  payload: {
    amount,
  },
});

export const pay = (amount) => ({
  type: PAY,
  payload: {
    amount,
  },
});

export const no = () => ({
  type: NO,
  payload: {},
});

export const run = () => ({
  type: RUN,
  payload: {},
});
