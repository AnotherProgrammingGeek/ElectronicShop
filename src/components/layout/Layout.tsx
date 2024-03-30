import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/footer";

type CartProps ={
  cart:{
    id_product: number,
    count: number,
  }[]
}


export default function Layout(props : CartProps){
  return (
    <div className="container">
      <NavBar cart = {props.cart} />
      <main><Outlet/></main>
      <Footer/>
    </div>
  )
};
