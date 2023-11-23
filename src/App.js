import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from './components/Home';
import Products from "./components/ProductCont/Hinduproducts";
import ProductsChrist from "./components/ProductCont/ChristianProducts";
import ProductIslamic from "./components/ProductCont/IlamicProducts"
import ProductHindu from "./components/ProductsDetails/ProductHindu";
import ProductChristian from "./components/ProductsDetails/ProductChrisian";
import ProductIslamicItem from "./components/ProductsDetails/ProductIlamic"

import {Footer} from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path= "/ProductHindu" element={<Products/>}> </Route> 
          <Route path="/ProductChirstian" element={<ProductsChrist/>}> </Route>
          <Route path="/ProductIlamic" element={<ProductIslamic/>}></Route>
          <Route path="/HinduProduct/:id" element={<ProductHindu/>}></Route>
          <Route path="/ChristianProduct/:id" element={<ProductChristian/>}></Route>
          <Route path="/IslamicProduct/:id" element={<ProductIslamicItem/>}> </Route>        
        </Routes>
     <Footer/>  
    </Router>
     
  )
}

export default App;
