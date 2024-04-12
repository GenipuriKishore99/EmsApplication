import './birthdayEvent.component.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { saveBirthdayCelebrationData } from '../../../service/events/birthdaycelebration.service';
import { BirthdayEventView } from './birthdayeventsview/birthdayEventView.component';
import { NotificationMessage } from '../../common/notification.message/notification-message.component';

export function BirtdayCelebrations(){
    const [success,setSuccess]=useState();
    const [message,setMessage]=useState();    
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();
    function saveData(data){
        data.id=0;
        saveBirthdayCelebrationData(data).then((res)=>{
            // alert(JSON.stringify(res.data))
            setSuccess({type:"success"});
            setMessage({message:"Data succesfully saved.....!"})
            window.location.reload();

        })
    }
    return(
        <form onSubmit={handleSubmit((data)=>{alert((saveData(data)))})}>
            <div className="form-group bithday-form">
                <label>PersonName *</label>
                <input type="text" placeholder="Enter Birthday boy name here.....@!" className="form-control" {...register ("Name",{required:true})}></input>
            </div>
            {errors.Name &&<div className="text-danger">Name is mandatory</div>}
            <div>
                <label>Email *</label>
                <input type="email" placeholder="Enter Email here.....@!" className="form-control" {...register ("Email",{required:true})}></input>
            </div>
            {errors.Email &&<div className="text-danger">Email is mandatory</div>}
            <div>
                <label>Phone Number *</label>
                <input type="number"placeholder="Enter Phone number Here.....!" className="form-control" {...register ("PhoneNumber",{required:true})}></input>
            </div>
            {errors.PhoneNumber &&<div className="text-danger">Phone number is Mandatory</div>}
            <div>
                <label>Date Of Birth *</label>
                <input type="date" className="form-control" {...register ("Date",{required:true})}></input>
            </div>
            {errors.Date &&<div className="text-danger">Date is mandatory</div>}
            <div>
                <label>Address *</label>
                <textarea row={5} className="form-control" {...register ("Address",{required:true})}>

                </textarea>
            </div>
            {errors.Address&&<div className="text-danger">Address is mandatory</div>}
            <div>
                <label>Event Description *</label>
                <textarea row={5} className="form-control" {...register ("Description",{required:true})}>

                </textarea>
            </div>
            {errors.Description &&<div className="text-danger">Description is mandatory</div>}
            <div className="m-2">
                <input type="submit" value="Save" className="btn btn-primary me-3"></input>
                <input type="reset" value="Cancel" className="btn btn-danger"></input>
            </div>
            <BirthdayEventView></BirthdayEventView>
            <NotificationMessage type={success} message={message}></NotificationMessage>
        </form>
    )
}