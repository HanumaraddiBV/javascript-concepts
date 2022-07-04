// importing redux
const redux = require("redux");

//action types

const INC_COUNT = "INC_COUNT";
const DEC_COUNT = "DEC_COUNT";

//actions creators

function incCount() {
  return {
    type: INC_COUNT,
    value: 2,
  };
}

function decCount() {
  return {
    type: DEC_COUNT,
    value: 1,
  };
}

//reducers and initial state

const initCount = {
  count: 0,
};

const initValue = {
  num: 0,
};

const countReducer = (state = initCount, action) => {
  switch (action.type) {
    case INC_COUNT:
      return { ...state, count: state.count + action.value };
    case DEC_COUNT:
      return { ...state, count: state.count - action.value };
    default:
      return state;
    // always keep in mind if we using multiple reducers we have to write default otherwise it will throw an error
  }
};

const numReducer = (state = initValue, action) => {
  switch (action.type) {
    case INC_COUNT:
      return { ...state, num: state.num + action.value };
    case DEC_COUNT:
      return { ...state, num: state.num - action.value };
    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  count: countReducer,
  num: numReducer,
});

//creating store
const createStore = redux.createStore;

const store = createStore(rootReducer);

//confirmation
console.log(store.getState());

//we have to create subscribe and unsubscribe function as well

const unSubscribe = store.subscribe(() =>
  console.log("state updated", store.getState())
);

//finally we have to dispatch the action to the reudcers

store.dispatch(incCount());
store.dispatch(incCount());
store.dispatch(incCount());
store.dispatch(incCount());
store.dispatch(decCount());
store.dispatch(decCount());
store.dispatch(incCount());

unSubscribe();
