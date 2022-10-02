    import {
        BrowserRouter,
        Routes,
        Route,
    } from "react-router-dom";
    
    //   pages

    import Home from '../pages/Home';
    import Register from '../pages/Register';


  function Routess() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
    export default Routess;