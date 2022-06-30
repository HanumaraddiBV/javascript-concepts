import logo from './logo.svg';
import './App.css';
import { RoutingVFive } from './routing/RoutingVFive';
import Routing1 from './components/RoutingEx/Routing1';
import NoMatch from './routing/NoMatch';

import Product from './routing/QuerryParams';
import QuerryParams from './routing/QuerryParams';
import UseParam from './routing/UseParam';
import NestingRouting from './routing/NestingRouting';
import NestingWithJson from './routing/NestingWithJson';
import TonyStark from './components/HOC/TonyStark';
import WarMachine from './components/HOC/WarMachine';

function App() {
  return (
    <div className="App">
     {/* <RoutingVFive/> */}
     {/* <Routing1/> */}
     {/* <NoMatch/> */}
     {/* <QuerryParams/> */}
     {/* <UseParam/> */}
     {/* <NestingRouting/> */}
     {/* <NestingWithJson/> */}
     <TonyStark/>
     <WarMachine/>
    </div>
  );
}

export default App;
