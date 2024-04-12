import { useEffect, useState } from "react";
import { updateAnniversaryData,getAnniversaryData } from "../../../../service/event/anniversary-event.service"
import {GridApproveComponent} from '../../../shared/grid-approve/grid-approve.component';

export const AnniversdayView=()=>{
    const header=["Id","AnniversdayName","Email","Phone Number","Address","Event Date","EventDescription"];
    const [anniversdayData,setAnniversdayData]=useState();
    
    useEffect(()=>{
        getAnniversdayDetails();
    },[])
    function getAnniversdayDetails(){
        getAnniversaryData().then((res)=>{
            setAnniversdayData(res.data)
        })
    }
    function ApproveData(data){
        data.status="Approve";
        updateAnniversaryData(data).then((res)=>{
            alert("Data Approved....!")
        })

    }
    function RejectData(data){
        data.status="Reject";
        updateAnniversaryData(data).then((res)=>{
            alert("Data Rejected....!")
        })


    }
    return(
        <div>
             <GridApproveComponent headers={header} data={anniversdayData} Approve={(data)=>{ApproveData(data)}} Reject={(data)=>{RejectData(data)}}></GridApproveComponent>
        </div>

    )
}