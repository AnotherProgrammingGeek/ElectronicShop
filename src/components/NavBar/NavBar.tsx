import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

type NavBarProps ={
      cart:{
        id_product: number,
        count: number,
      }[]
  }

export default function NavBar(props : NavBarProps){
  let totalCount = 0
  function tCount (){
    props.cart.map((cartEl=>{
      totalCount += cartEl.count
    }))
  }
  tCount()
  return (
    <nav>
        <NavLink className ="logo" to='/' >QPICK</NavLink>
        <div className="icons">
          <NavLink className="favIcon" to="fav"><CiHeart/></NavLink>
          <NavLink className="cartIcon" to='cart'>
            <AiOutlineShoppingCart />
            <span className="totalCount">{totalCount}</span>
          </NavLink>
        </div>
    </nav>
    
  )
};
