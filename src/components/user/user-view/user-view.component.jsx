import { GridComponent } from "../../shared/grid/grid.component"

export const UserView=()=>{
    const header=["ID","Name","Email","phone"]
    const details=[
        {id:1,name:"kishore",email:"kishore@gmail.com",phone:9959222482},
        {id:2,name:"Genipuri",email:"kishore@gmail.com",phone:9959222482},
        {id:3,name:"kishore",email:"kishore@gmail.com",phone:9959222482},
    ]
    return(
        // <table className="table table-primary table-hover">
        //     <thead>
        //         <tr>
        //             {
        //                 header.map((item)=>{
        //                     return(
        //                         <th>{item}</th>
        //                     )
        //                 })
        //             }
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             details.map((item)=>{
        //                 return(
        //                     <tr>
        //                         <td>{item.id}</td>
        //                         <td>{item.name}</td>
        //                         <td>{item.email}</td>
        //                         <td>{item.phone}</td>
        //                     </tr>
        //                 )
        //             })
        //         }
        //     </tbody>
        // </table>
        <GridComponent headers={header} data={details}></GridComponent>
    )
}