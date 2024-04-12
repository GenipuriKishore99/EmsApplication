import { useEffect, useState } from "react";
import { GridComponent } from "../../../shared/grid/grid.component"
import { getBirthdayCelebrationData } from "../../../../service/events/birthdaycelebration.service";

export function BirthdayEventView(){
    const header=["Id","Name","Email","PhoneNumber","BirthdayDate","Address","EventDescription","Status"];
    const [bithdayData,setBirthData]=useState();
    useEffect(()=>{
        getData();
        
    },[])
    function getData(){
        getBirthdayCelebrationData().then((res)=>{
            setBirthData(res.data)
        })
    }
    return(
        <div>
           <GridComponent headers={header} data={bithdayData}></GridComponent> 
        </div>

    )
}