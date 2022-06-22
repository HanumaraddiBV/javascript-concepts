/* eslint-disable react/jsx-no-comment-textnodes */
import logo from './logo.svg';
import './App.css';
import Images from './components/Images';
import SyntheticEvent from './components/synthetic events/SyntheticEvent';
import { ReactForm } from './components/ClassComp/ReactForm';
import LifeCycleMethods from './components/practice/LifeCycleMethods';
import Destructuring from './components/practice/Destructuring';
import SplitCompAndReactForm from './components/practice/SplitCompAndReactForm';
import LiftingStateUp from './components/practice/LiftingStateUp';
import GalleryContext from './components/ContextApi/GalleryContext';
import IncCount from './components/FunctionComponents/IncCount';
import TwoCounterComp from './components/FunctionComponents/TwoCounterComp';
import UserCredential from './components/FunctionComponents/UserCredential';
import ProductConetxtProvider from './components/FunctionComponents/Products/ProductConetxtProvider';
import UserContextProvider from './components/FunctionComponents/Users/UserContextProvider';
import FormContainer from './components/MultipleFormComponents/FormContainer';

function App() {
  return (
   
    <div className="App">
    

       {/* <ReactForm/> */}
      {/* <LifeCycleMethods clr='black'/> */}
      {/* <Destructuring/> */}
      {/* <SplitCompAndReactForm/> */}
      {/* <LiftingStateUp/> */}
      {/* <GalleryContext/> */}
     {/* <IncCount/> */}
     {/* <TwoCounterComp/> */}
     {/* <UserCredential/> */}
     {/* <ProductConetxtProvider/> */}
     {/* <UserContextProvider/> */}
     <FormContainer/>
      </div>
  );
}

export default App;
