// import { saveData } from "../service/context.service"
import { useEffect, useRef, useState } from "react";
import { saveOrders ,getDataOrders,getOrdersData} from "../service/orders.service"
import { useParams,useNavigate } from "react-router-dom";
export const CreateOrders=()=>{
    const nameref=useRef();
    const priceref=useRef();
    const params=useParams();
    const navigate=useNavigate();
    const [btn,setBtn]=useState();
    useEffect(()=>{
        if(params.id){
            setBtn("Update")
            getData(params.id)
        }
        else{
            setBtn("Create")
        }
        
    },[])
    function getData(id){
        getDataOrders(id).then((res)=>{
            nameref.current.value =res.data.name;
            priceref.current.value =res.data.price;

        })
    }
    function saveData(){
        if(params.id){
            let obj={
                "id":params.id,
                "name":nameref.current.value,
                "price":priceref.current.value
            }
            getOrdersData(params.id,obj).then(()=>{
                       alert("data updated!")
                       navigation();
            })


        }

        else{
        let obj={
            "name":nameref.current.value,
            "price":priceref.current.value
        }
        // alert(JSON.stringify(obj))
        saveOrders(obj).then(()=>{
            alert("data saved!")
            navigation();
        })
    }
    }
    function navigation(){
        navigate("/Orders")

    }
    return(
        <div className="m-3">
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="name" ref={nameref}></input>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" id="price" ref={priceref}></input>
                </div>
                <div className="m-3">
                    <input type="button" value={btn} className="btn btn-primary me-2" onClick={()=>{saveData()}}></input>
                    <input type="button" value="cancel" className="btn btn-danger"></input>
                </div>
            </form>
        </div>
    )
}