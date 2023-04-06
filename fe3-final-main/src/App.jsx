
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";


function App() {
  return (
      <div className="App">
        <Navbar/>  
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>    
        <Footer/>  
      </div>
  );
}

export default App;
