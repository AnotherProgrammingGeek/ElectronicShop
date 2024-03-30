import { MdOutlineCurrencyRuble } from "react-icons/md";
import { FaStar } from "react-icons/fa";
type ProductProps = {
  productEl:{
    id: number,
    img: string,
    type: string,
    title: string,
    price: number,
    rate: number,
  }
  addToCart : (productEl:ProductProps["productEl"] )=> void
}

export default function WiredHeadphones(props: ProductProps){
  return (
    <>
      <img className="productImg" src={require(`../../assets/${props.productEl.img}`)} alt={props.productEl.title} />
      <div className="productInfo">
        <div className="productTitle-Rate">
          <span className="productTitle">{props.productEl.title}</span>
          <span className="productRate"><FaStar className="star"/> {props.productEl.rate}</span>
        </div>
        <div className="productPrice-Btn">
          <span className="productPrice">{props.productEl.price} <MdOutlineCurrencyRuble className="rouble"/></span>
          <button  onClick = {()=> props.addToCart(props.productEl)}>Купить</button>
        </div>
      </div>
    </>
  )
};

