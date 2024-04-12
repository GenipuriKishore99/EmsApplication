// import { useState } from "react";
// import { AnniversdayView } from "../admin-menu/anniversday-view/anniversday-view.component";
import './anniversary.component.css';
import { saveAnniversaryData } from "../../../service/event/anniversary-event.service";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { NotificationMessage } from '../../common/notification.message/notification-message.component';
export const AnniversdayEvent=()=>{
    // const [validateData,setValidateData]=useState(false);
    const [success,setSuccess]=useState("");
    const [message,setMessage]=useState("");
    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    function validateEvent(data){
        saveAnniversaryData(data).then((res)=>{
            alert(JSON.stringify(res.data))
            setSuccess("successs");
            setMessage("Data succesfully saved.....!")

        })
    }

    return(
        <div style={{color:"white"}}>
            <form onSubmit={handleSubmit((data)=>{validateEvent(data)})}>
                <h2>Anniversary Event Celebrations</h2>
                <div className="form-group">
                    <label className="from-label">Anniversary Name</label>
                    <input type="text" className="form-control" {...register("Name",{required:true})} placeholder="Enter Events here.....!"></input>
                </div>
                {errors.Name &&<div className="text-danger">Name is mandatory</div>}
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" {...register("PhoneNumber",{required:true})}></input>
                </div>
                {errors.PhoneNumber && <div className="text-danger">Phone number is mandatory</div>}
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter @mail Here.....!" className="form-control" {...register ("Email",{required:true})}></input>
                </div>
                {errors.Email && <div className="text-danger">Email is Mandatory</div>}

                <div className="form-group">
                    <label>Address</label>
                    <textarea row={5} className="form-control" {...register("Address",{required:true})}></textarea>
                </div>
               {errors.Address&& <div className="text-danger">Address mandatory</div>}
                <div className="form-group">
                    <label>Anniverday Date</label>
                    <input type="date" className="form-control" {...register("Date",{required:true})}></input>
                </div>
                {errors.Date &&<div className="text-danger">Date mandatory</div>}
                <div className="form-group">
                    <label>Anniversday Description</label>
                    <textarea row={5} className="form-control" {...register("Description",{required:true})}>
                    </textarea>
                </div>
                {errors.Description &&<div className="text-danger">Description mandatory</div>}
                <div className="m-2">
                    <input type="submit" value="Save" className="btn btn-primary me-2"></input>
                    <input type="reset" value="Cancel" className="btn btn-danger"></input>
                </div>
               {/* {validateData && <div className="text-danger">All fields Are Mandatory</div>} */}
               {/* <GridComponent header={headers}></GridComponent> */}
            </form>
            {/* <AnniversdayView></AnniversdayView> */}
            <NotificationMessage type={success} message={message}></NotificationMessage>
        </div>
    )
}