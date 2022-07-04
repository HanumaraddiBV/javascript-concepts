//importing redux
const redux = require("redux");

//action types
const INC_COUNT = "INC_COUNT";
const DEC_COUNT = "DEC_COUNT";

//actions

function incCount() {
  return {
    type: INC_COUNT,
    value: 1,
  };
}

function decCount() {
  return {
    type: DEC_COUNT,
    value: 1,
  };
}

//reducer

//we have declare initial state of application
const init = {
  count: 0,
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case INC_COUNT:
      return { ...state, count: state.count + action.value };
    case DEC_COUNT:
      return { ...state, count: state.count - action.value };
    default:
      return state;
  }
};

//creating store with help of redux library
const createStore = redux.createStore;

const store = createStore(reducer);

//make sure that store is created or not?
//   console.log(store.getState())

//next step is to we have to create subscribe method

const unSubscribe = store.subscribe(() =>
  console.log("state updated", store.getState())
);

//and then dispatching the actions

store.dispatch(incCount());
store.dispatch(incCount());
store.dispatch(incCount());
store.dispatch(decCount());
store.dispatch(decCount());

store.dispatch(incCount());
store.dispatch(incCount());
store.dispatch(incCount());
// at the last we have to unsubscribbe the store

unSubscribe();
