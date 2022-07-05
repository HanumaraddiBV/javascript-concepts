import logo from './logo.svg';
import './App.css';
// import {createStore} from 'redux'
import { Provider } from 'react-redux';
import ReduxThunkEx, { thunkReducer } from './components/ReduxThunk/ReduxThunkEx';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// const applyMiddleware=redux.applyMiddleware
const thunk=require('redux-thunk').default;
const store = createStore(thunkReducer,applyMiddleware(thunk))
function App() {
  return (
    // <div className="App">
      <Provider store={store}>
        <ReduxThunkEx/>
      </Provider>
    // </div>
  );
}

export default App;
