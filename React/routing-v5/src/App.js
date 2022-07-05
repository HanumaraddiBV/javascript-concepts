import logo from './logo.svg';
import './App.css';
import { RoutingVFive } from './routing/RoutingVFive';
import Routing1 from './components/RoutingEx/Routing1';
import NoMatch from './routing/NoMatch';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Product from './routing/QuerryParams';
import QuerryParams from './routing/QuerryParams';
import UseParam from './routing/UseParam';
import NestingRouting from './routing/NestingRouting';
import NestingWithJson from './routing/NestingWithJson';
import TonyStark from './components/HOC/TonyStark';
import WarMachine from './components/HOC/WarMachine';
import { NavigationMenu } from './components/PrivateRouting/NavigationMenu';
import FormParent from './components/FormWithRouting/FormUserData';
import { FormNavigationMenu } from './components/FormWithRouting/NavigationMenu';
import Store from './components/Redux/ReduxEx2/Store';
import reducer from './components/Redux/ReduxEx2/reducers';

const store = createStore(reducer)
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <RoutingVFive/> */}
     {/* <Routing1/> */}
     {/* <NoMatch/> */}
     {/* <QuerryParams/> */}
     {/* <UseParam/> */}
     {/* <NestingRouting/> */}
     {/* <NestingWithJson/> */}
     {/* <TonyStark/> */}
     {/* <WarMachine/> */}
     {/* <NavigationMenu/> */}
     {/* <FormParent/> */}
    {/* <FormNavigationMenu/> */}
    
    </div>
    <Store/>
    </Provider>
  );
}

export default App;
