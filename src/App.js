import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './page/Home';
import Brand from './page/Brand';
import Laptop from './page/Laptop';
import Desktop from './page/Desktop';
import Accessories from './page/Accessories';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/brand' element={<Brand/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/desktop' element={<Desktop/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
