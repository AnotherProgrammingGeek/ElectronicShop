
import WiredHeadphones from "../../components/wiredHeadphones/WiredHeadphones"
import WirelessHeadphones from "../../components/wirelessHeadphones/WirelessHeadphones"

type PropsType = {
  loading : false,
  products: {  
    id: number,
    img: string,
    type: string,
    title: string,
    price: number,
    rate: number,
  }[],
  addToCart : (product: PropsType["products"][0]) => void
}

export default function Home(props : PropsType){
  
  return (
    <>
      <span className="productType">Наушники</span>
      <div className="wiredHeadphones">
        {
          props.products.map((product)=> {
            if(product.type === "Wiredheadphones"){
              return (
                <div key = {product.id} className="productCard">
                  <WiredHeadphones key= {product.id} productEl = {product} addToCart = {props.addToCart}/>
                </div>
              )
            }
          })
        }
      </div>
      <span className="productType">Беспроводные наушники</span>
      <div className="wirelessHeadphones">
        {
          props.products.map((product)=> {
            if(product.type === "Wirlessheadphones"){
              return (
                <div key={product.id} className="productCard">
                  <WirelessHeadphones key= {product.id} productEl = {product} addToCart = {props.addToCart}/>
                </div>
              )
            }
          
          })  
          
        }
      </div>
    </>
  )
};
