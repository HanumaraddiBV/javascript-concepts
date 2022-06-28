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
import { UseReducerExa1 } from './components/Reducer/UseReducerExa1';
import { UseReducerExp2 } from './components/Reducer/UseReducerExp2';
import { UseReducerAxios } from './components/Reducer/UseReducerAxios';
import { UseRefExample } from './components/UseRef/UseRefExample';
import CreateRefComp from './components/UseRef/CreateRefComp';
import { UseMemoAndCallback } from './components/MemoAndCallback/UseMemoAndCallback';
import ImageUpload from './components/UseRef/ImageUpload';

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
     {/* <FormContainer/> */}
     {/* <UseReducerExa1/> */}
     {/* <UseReducerExp2/> */}
     {/* <UseReducerAxios/> */}
     {/* <UseRefExample/> */}
     {/* <CreateRefComp/> */}
     <UseMemoAndCallback/>
     {/* <ImageUpload/> */}
      </div>
  );
}

export default App;
