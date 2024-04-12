import { useEffect, useState } from "react";
import { getProduct } from "../service/product.service";
export const Product=()=>{
    const header=["id","name","price","quantity","gst","total"];
    const [data,setData]=useState([]);
    useEffect(()=>{
        getData(); 
    },[])
    function getData(){
        getProduct().then((res)=>{
            // alert(JSON.stringify(res))
            setData(res.data)
        })
    }
    return(
        <table className="table table-primary table-bordered table-hover">
            <thead>
                <tr>
                    {
                        header.map((item)=>{
                            return(
                                <th>{item}</th>
                            )
                        })

                    }
                </tr>

            </thead>
            <tbody>
                {
                    data.map((item)=>{
                        item.total=((item.price*(item.gst/100))+item.price)*item.quantity
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.gst}</td>
                                <td>{item.total}</td>
                            </tr>
                        )
                    })
                }
               

            </tbody>
        </table>

    )
}