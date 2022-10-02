import {
Routes,
Route,
useLocation
} from "react-router-dom";
    
//   pages
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Notes from '../pages/Notes';
import Header from '../components/Header/Header';

function Routess() {

  const location = useLocation()
  const display = location.pathname === '/notes'


    return (
      <>
       {!display && <Header/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/notes" element={<Notes/>}/>
        </Routes>
      </>
    );
};
  
export default Routess;