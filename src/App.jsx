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
  // price
  const [price, setPrice] = useState(500);

  // increase price
  const handleIncreasePrice = (pr) =>{
    setPrice(price + pr);
  }
  // handle selected
  const handleSelectedProduct = (product) =>{
    // find exist product
    const isExist = selectedProducts.find((p) => p.id == product.id);
    if(isExist){
      alert('exists already. u cant add');
    }
    else{
      handleIncreasePrice(product.price);
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


  const handleDeletePrice = (id) =>{
    const product = selectedProducts.find((p) => p.id == id);
    setPrice(price - product.price);
  }

  // handle Delete
  const handleDelete = (id) =>{
    handleDeletePrice(id)
    const remainingProduct = selectedProducts.filter((p) => p.id != id);
    setSelectedProducts(remainingProduct);
  }

  


  return (
    <>
    <Navbar price={price} selectedProducts={selectedProducts}></Navbar>
    <div className='flex'>
    <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
    <CartContainer handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} handleIsActive={handleIsActive}></CartContainer>
    </div>
    </>
  )
}

export default App
