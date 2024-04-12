import './search-bar.component.css';
export function HomeSearch(){
    return(
        <div className="search-bar">
            <div className='row'>
            <div className="col-5">
            <input type="text" className='col-3 search-text form-control' placeholder='search here...!'/>
            </div>
            <div className="col-5" >
                <select className='form-control'>
                    <option>Events</option>
                    <option>Blogs</option>
                    <option>contact</option>
                    <option>....</option>
                </select>
            </div>
            <div className="col-2">
                <input type="button" value="Search" className="btn btn-primary"></input>
            </div>
            </div>
            

        </div>
    )
}