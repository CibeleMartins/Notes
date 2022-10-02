import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";
    
//   pages

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Notes from '../pages/Notes';


    function Routess() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/notes" element={<Notes/>}/>
        </Routes>
      </BrowserRouter>
    );
    };
  
export default Routess;