import logo from './logo.svg';
import './App.css';
import Navbar from './Componants/Navbar/Navbar';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Signup from './Componants/Signup/Signup';
import Login from './Componants/Login/Login';
import Home from './Componants/Pages/Home';
function App() {
  return (
   <BrowserRouter>
    <Navbar/>
   <Routes>

   <Route path='/Signup' element={<Signup/>}></Route>
   <Route path='/Login' element={<Login/>}></Route>
   <Route path='/Home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
