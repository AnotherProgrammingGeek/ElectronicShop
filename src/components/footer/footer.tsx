import { NavLink, Link } from "react-router-dom"
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";
import { MdLanguage } from "react-icons/md";
export default function Footer(){
  return (
    <footer>
      <NavLink className ="logo" to='/' >QPICK</NavLink>
      <div className="menu">
        <NavLink className ="footerFav" to='fav' >Избранное</NavLink>
        <NavLink className ="footerCart" to='cart' >Корзина</NavLink>
        <NavLink className ="footerContact" to='https://www.neoflex.ru/contacts'>Контакты</NavLink>
      </div>
      <div className="service-lang">
        <NavLink className ="footerService" to='https://okdesk.ru/blog/razvitie-klientskogo-servisa?ysclid=ludl4yd39z345845084'>Условия сервиса</NavLink>
        <span><MdLanguage /> Каз Рус Eng</span>
      </div>
      <div className="socialNet">
        <Link className ="vKontact" to='https://vk.com'><SlSocialVkontakte /></Link>
        <Link className ="telegram" to='https://telegram.org/'><FaTelegramPlane /></Link>
        <Link className ="whatsapp" to='https://www.whatsapp.com/'><FaWhatsapp /></Link>
      </div>
    </footer>

    
  )
};
