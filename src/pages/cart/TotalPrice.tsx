import { useState } from "react";
import { MdOutlineCurrencyRuble } from "react-icons/md";
import PaymentForm from "../../components/paymentForm/PaymentForm";
type TotalPriceProps = {
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
}

export default function TotalPrice(props : TotalPriceProps){
  const [popUpForm, setPopUpForm] = useState(false)
  const products = props.products
  const cart = props.cart
  let totalPrice = 0
  function addPrices (){
      cart.map((cartEl=>{
          products.map((product)=>{
              if(cartEl.id_product === product.id){
                  totalPrice = totalPrice + (cartEl.count * product.price)
              }
          })
      }))
      return totalPrice
  }
  addPrices()
  return (
    <>
    <div className="totalAndPayment">
      <div className="totalPrice">
        <span className="totalPricetxt">Итого</span>
        <span className="totalPriceCount"><MdOutlineCurrencyRuble/> {totalPrice}</span>
      </div>
      <button className="paymentBtn" onClick={()=>setPopUpForm(true)}>Перейти к оформлению</button>
    </div>
    <PaymentForm trigger = {popUpForm} setTrigger = {setPopUpForm}/>
    </>

  )
};
