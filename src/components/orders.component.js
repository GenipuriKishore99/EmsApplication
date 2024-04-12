import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../service/orders.service";

export const Orders=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        getData();
    })
    function getData(){
        getOrders().then((res)=>{
            setData(res.data)

        })
    }
    return(
        <table className="table table-secondary">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>{
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Link to={"/edit-Orders/"+ item.id} >Edit</Link></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}