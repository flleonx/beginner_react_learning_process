import { CounterState } from "./interfaces/interfaces";
import { CounterAction } from "./actions/actions";

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    case "increaseBy":
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };

    default:
      return state;
  }
};
