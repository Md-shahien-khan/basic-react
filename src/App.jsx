import './App.css'
import Navbar from './components/Header/Navbar'
import CartContainer from './components/CartContainer/CartContainer'
import AllProducts from './components/AllProducts/AllProducts'
import { useState } from 'react'

function App() {
  const [isActive, setIsActive] = useState({
    cart : true,
    status : "active"
  });
  const [selectedProducts, setSelectedProducts] = useState([]);

  // handle selected
  const handleSelectedProduct = (product) =>{
    // find exist product
    const isExist = selectedProducts.find((p) => p.id == product.id);
    if(isExist){
      alert('exists already. u cant add');
    }
    else{
      // merging all product
    const newProducts = [...selectedProducts, product];
    setSelectedProducts(newProducts);
    }

    // console.log(product);
    
    
  }
  console.log(selectedProducts);


  // conditional rendering
  const handleIsActive = (status) =>{
    if(status === 'cart'){
      setIsActive({
        cart  : true,
        status : "active"
      })
    }
    else{
      setIsActive({
        cart : false,
        status  : "about"
      })
    }
  };
  // console.log(isActive);


  // handle Delete
  const handleDelete = (id) =>{
    const remainingProduct = selectedProducts.filter((p) => p.id != id);
    setSelectedProducts(remainingProduct);
  }



  return (
    <>
    <Navbar selectedProducts={selectedProducts}></Navbar>
    <div className='flex'>
    <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
    <CartContainer handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} handleIsActive={handleIsActive}></CartContainer>
    </div>
    </>
  )
}

export default App
