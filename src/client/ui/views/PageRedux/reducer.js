import update from 'immutability-helper';

const initialState = {
  counter: 0,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
  case 'INCREMENT':
    return update(state, {
      counter: { $set: state.counter + 1 },
    });

  case 'INCREMENT_IF_ODD':
    return update(state, {
      counter: {
        $apply: (val) => {
          return (val % 2 !== 0) ? val + 1 : val;
        },
      },
    });

  case 'INCREMENT_ASYNC_SUCCESS':
    return update(state, {
      counter: { $set: state.counter + 1 },
    });

  case 'DECREMENT':
    return update(state, {
      counter: { $set: state.counter - 1 },
    });
  default:
    return state;
  }
}
