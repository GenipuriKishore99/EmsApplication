// import { AdminMenu } from "./admin/event-category/admin-menu/admin-menu.component";
import './menu.component.css';
import { Link } from "react-router-dom";
export const Menu=()=>{
  return(
    <div>
      <div className='menu'>
        <label><Link to="/Home" className='menu-item'>Home</Link></label>a
        <label><Link to="/AdminLayout" className='menu-item'>AdminLayout</Link></label>
        <label><Link to="/ImageGallary" className='menu-item'>ImageGallary</Link></label>
        <label><Link to="/UserLogin" className='menu-item'>UserLogin</Link></label>
        <label><Link to="/" className='menu-item'>Home</Link></label>

      </div>
    </div>
  )
}