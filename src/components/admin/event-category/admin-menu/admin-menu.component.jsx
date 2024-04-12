import {} from './admin-menu.component.css';
export function AdminMenu(){
    return(
        <div className='admin-menu'> 
            <ul>
                <li className='admin-menu-item'>Category</li>
                <li className='admin-menu-item'>Gallery</li>
            </ul>
        </div>
    )
}