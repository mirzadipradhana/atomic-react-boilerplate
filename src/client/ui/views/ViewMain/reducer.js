import update from 'immutability-helper';

const initialState = {
  modal: {
    open: false,
    modal: false,
    actions: [],
  },
};

export default function (state = initialState, { type, payload }) {
  console.log(payload);
  switch (type) {
  case 'OPEN_MODAL':
    return update(state, {
      modal: {
        $apply: () => {
          return Object.assign({}, { open: true }, payload || {});
        },
      },
    });

  case 'CLOSE_MODAL':
    return update(state, {
      modal: { $set: initialState.modal },
    });

  default:
    return state;
  }
}
