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

  const RenderNotes = (response)=> {
    
    return <Notes data={response ? response.data.user.name : null}/>
  }

  const PrivateNotes = (response)=> {

    response ? RenderNotes(response) : console.log("nao veio response");
  }


  const location = useLocation();
  const display = location.pathname === '/notes';

    return (
      <>
       {!display && <Header/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login receiveResponse={PrivateNotes}/>}/>
          <Route path="/notes" element={RenderNotes()}/>
        </Routes>
      </>
    );
};
  
export default Routess;