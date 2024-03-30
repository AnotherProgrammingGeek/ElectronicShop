import { MdOutlineCurrencyRuble } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
type CartProuctProp={
    product: {
        id: number,
        img: string,
        type: string,
        title: string,
        price: number,
        rate: number,
      };
    cartEl: { 
        id_product: number,
        count: number
    }
    deleteProductCart : (productId: number) => void
    addCartEl: (product: CartProuctProp["product"]) => void
    subCartEl: (product: CartProuctProp["product"]) => void
  }

export default function CartProduct(props : CartProuctProp){
    let product = props.product
    let cartEl = props.cartEl

    return (
      <div className="cartElement">
        <div className="cartElImg-count">
          <img className="cartElementImg" src= {require(`../../assets/${product.img}`)}  alt={product.title} />
          <div className="countBtn">
            <button className="subtractBtn" onClick={()=> props.subCartEl(product)}>-</button>
            <span className="cartElementCount">{cartEl.count}</span>
            <button className="addBtn" onClick={()=> props.addCartEl(product) }>+</button>
          </div>
        </div>
        <div className="cartElTitle-price">
          <span className="cartElemenTitle">{product.title}</span>
          <span className="cartElementPrice">{product.price}<MdOutlineCurrencyRuble/></span>
        </div>
        <div className="cartElementTotal-del">
          <button className="cartElementDelete" onClick={()=> props.deleteProductCart(product.id)}><RiDeleteBin2Line /></button>
          <span className="cartElementTotalPrice">{cartEl.count * product.price} <MdOutlineCurrencyRuble/></span>
        </div>
      </div>
    
    )
  }
  
  