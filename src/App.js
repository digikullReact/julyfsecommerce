import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import { useState } from 'react';

function App() {
  const [state,setState]=useState([]);

  const AddToCart=(title)=>{
  
    setState([...state,title]);

  }
  return (
    <div className="App">
      <Header state={state}/>
      <Banner/>
      <ProductList AddToCart={AddToCart}/>

      <Footer/>
    
    </div>
  );
}

export default App;
