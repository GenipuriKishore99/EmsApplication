import './menu.component.css';
import { Link } from 'react-router-dom';
export function MainMenu(){
    return(
        <div>
            <div className='menu'>
                <ul>
               <li><Link to="/">Home</Link></li> 
               <li> <Link to ="/AnniversdayEvent">Anniversday Events</Link></li> 
               <li> <Link to ="/Blogs">Blogs</Link></li> 
               <li><Link to ="/Contact us">Contact us</Link></li>   
               <li><Link to ="/Login">Login</Link></li>   
               </ul>
               </div>
        </div>
    )
}