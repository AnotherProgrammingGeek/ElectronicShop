import CartProduct from "./CartProduct"
import TotalPrice from "./TotalPrice"

type CartProps = {
  products: {
    id: number,
    img: string,
    type: string,
    title: string,
    price: number,
    rate: number,
  }[]
  cart:{
  id_product: number,
  count: number,
  }[]
  deleteProductCart : (productId: number) => void
  addCartEl : (product: CartProps["products"][0]) => void
  subCartEl : (product: CartProps["products"][0]) => void
}

export default function Cart(props : CartProps){
  const cart = props.cart
  const products = props.products
  
  const cartElement = cart.map((cartEl)=>{
    for(let product of products){
        if(cartEl.id_product === product.id){
          return(
            <CartProduct 
            key={product.id}
            cartEl = {cartEl} 
            product = {product}
            deleteProductCart = {props.deleteProductCart}
            addCartEl = {props.addCartEl} 
            subCartEl = {props.subCartEl} />
            )
          }
        }
  
  })

  return (
    <>
      <span className="cartPageTitle">Корзина</span>
      <div className="cartContainer">
        <div className="cartProducts">
          {cartElement}
        </div>
        <TotalPrice cart = {cart} products = {products}/>
      </div>
    </>
  )
}
  