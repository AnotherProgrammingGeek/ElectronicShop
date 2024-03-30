import './App.css';
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Layout from './components/layout/Layout';
import { data } from './data';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Fav from './pages/fav/Fav';

type Products = {
  id: number,
  img: string,
  type: string,
  title: string,
  price: number,
  rate: number,
}[]
type Cart = {
  id_product: number,
  count: number,
}[]

export default function App() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Products | []>([])
  const [cart, setCart] = useState<Cart>([])
  
  
  useEffect(()=>{
    setTimeout(() => {
      setProducts(data)
      setLoading(false)
    }, 500);
  },[])
  
  
  if(loading){
    return(
      <section>Loading</section>
    )
  }

  const addToCart = (product : Products[0])=>{
    let flag = false;
    for(let cartEl of cart){
      if(cartEl.id_product === product.id){
        flag = true;
        cartEl.count++;
        break;
      }
    }

    if(!flag){
      cart.push({id_product: product.id, count: 1});
    }
    
    setCart(cart.slice());
    
  }
  function deleteProductCart(productId : number){
    setCart(cart.filter((cartElement) => cartElement.id_product !== productId));

  }
  
  function addCartEl (product : Products[0]){
    cart.map((cartEl)=> {
      if(cartEl.id_product === product.id){
        cartEl.count++
      }
    })
    setCart(cart.slice());
  }
  function subCartEl (product: Products[0]){
    cart.map((cartEl)=> {
      if(cartEl.id_product === product.id && cartEl.count > 0){
        cartEl.count--
      }
      
    })
    setCart(cart.slice());
  }
  
  
  
  return (
    <Routes>
      <Route path='/' element={<Layout cart = {cart} />}>
        <Route index 
          element={<Home 
          loading = {loading} 
          products = {products} 
          addToCart = {addToCart}
          />}
        />

        <Route path='fav' element={<Fav/>}/>
        <Route path='cart' 
          element={<Cart 
            cart = {cart} 
            products = {products}
            deleteProductCart = {deleteProductCart}
            addCartEl = {addCartEl}
            subCartEl = {subCartEl}
            />}
        />
        
      </Route>
    </Routes>
  );
}
