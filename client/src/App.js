import logo from './logo.svg';
import './App.css';
import Signup from './components/Signin';
import Login from './components/Login';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Productpage from './components/Productpage';
import Cart from './components/Cart';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Signup/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
<Route path="/Login" element={<Login/>}></Route>
    <Route path='Products' element={<Productpage/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
