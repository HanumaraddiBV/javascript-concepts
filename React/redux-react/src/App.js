import logo from './logo.svg';
import './App.css';
// import {createStore} from 'redux'
import { Provider } from 'react-redux';
import ReduxThunkEx, { thunkReducer } from './components/ReduxThunk/ReduxThunkEx';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import I18nExa from './components/i18nExample/i18nExa';
// const applyMiddleware=redux.applyMiddleware
const thunk=require('redux-thunk').default;
const store = createStore(thunkReducer,applyMiddleware(thunk))
function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
        <ReduxThunkEx/>
       </Provider> */}
       <I18nExa/>
     </div>
  );
}

export default App;
