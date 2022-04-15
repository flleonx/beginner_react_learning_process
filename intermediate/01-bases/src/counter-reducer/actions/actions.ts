export type CounterAction =
  { type: 'increaseBy', payload: { value: number } } | { type: 'reset' };


// NOTE: Action creators: pattern to work with reducers
export const doReset = (): CounterAction => ({
    type: 'reset'
});

export const doIncreaseBy = (value: number): CounterAction => {
  return {
    type: 'increaseBy',
    payload: { value }
  };
};
