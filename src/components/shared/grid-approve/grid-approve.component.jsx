import { GridCell } from "../../atomic/grid-cell/grid-cell.component"

export const GridApproveComponent=(props)=>{
    function Approve(item){
        props.Approve(item);

    }
    function Reject(item){
        props.Reject(item);

    }
    return(
        <table className="table table-secondary table-hover table striped table-bordered">
            <thead>
            <tr>
                    {
                        props && props.headers&& props.headers.map((item)=>{
                            return(
                                <th>{item}</th>
                            )
                        })

                    }
                </tr>
            </thead>
            <tbody>
            {
                    props && props.data && props.data.map((item)=>{
                        return(
                            <tr>
                                {
                                    Object.values(item).map((d)=>{
                                        return(
                                            <GridCell data={d}></GridCell>
                                           
                                        )
                                    
                                        
                                    })
                                }
                                <input type="button" value="Approve" className="btn btn-primary" onClick={()=>{Approve(item)}}></input> 
                                <input type="button" value="Reject" className="btn btn-danger" onClick={()=>{Reject(item)}}></input>
                                       
                            </tr>
                           
                        )
                    })
    
                }
                {
                    props && props.data?.length === 0 && <div>No records....</div>
                } 
            </tbody>
        </table>
    )
}