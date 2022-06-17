
import './App.css';
import CalcParent from './components/Calculator/CalcParent';
import MainData from './components/splitComponent/MainData';
import Parent from './components/splitComponent/parent';
// import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
     <MainData />
     <CalcParent/>
   
    </div>
  );
}

export default App;
