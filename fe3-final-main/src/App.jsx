
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
const{themeState} = useContextGlobal()

  return (
      <div className="App"
      style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
        <Navbar/>  
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/user/:id" element={<Detail/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>    
        <Footer/>  
      </div>
  );
}

export default App;
