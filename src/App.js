import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import { useState } from 'react';

function App() {
  const [state,setState]=useState([]);
  const [productCount,setProductCount]=useState(0);

  const AddToCart=(title)=>{
  
    setState([...state,title]);

  }

  const dataCount=(length)=>{
    setProductCount(length);
  
  // console.log("product length",length)
  }
  return (
    <div className="App">
      <Header state={state} productCount={productCount}/>
      <Banner/>
      <ProductList AddToCart={AddToCart} dataCount={dataCount}/>

      <Footer/>
    
    </div>
  );
}

export default App;
