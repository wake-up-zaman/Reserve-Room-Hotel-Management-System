import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import './App.css'
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Authentication/Login";
import SingleHotel from "./Pages/SingleHotel/SingleHotel";
import About from "./Pages/About/About";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/hotels' element={<Hotel></Hotel>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/singleHotel' element={<SingleHotel></SingleHotel>}></Route>
      </Routes>
    </div>
  );
}

export default App;
