import { useForm } from "react-hook-form";
import { getUsers } from "../../../service/user.service";
import { useEffect, useState } from "react";
import { store } from "../../../service/redux-service.service";
// import { useNavigate } from "react-router-dom";
// import { saveDataFromCookie, saveDataFromWindowObject, saveDataToLocalStorage } from "../../../service/storage.service";
// import { saveDataToSessionStorage } from "../../../service/storage.service";

export const UserLogin = () => {
  const [validationError, setValidationError] = useState(false);
  const [showDate,setShowDate]=useState();
  // const navigate=useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function bindDate(){
    setInterval(()=>{
      let date=new Date();
    setShowDate(date.toString())

    },1000)
    
  }
  useEffect(()=>{
    bindDate();
    // subscribestore();
  })
  

 function validateUsers(data){
    // alert(JSON.stringify(data))
    getUsers().then((res)=>{
        let users=res.data;
        let response=users.find((item)=> item.name === data.userName && item.password === data.password)
    if(response){
      store.dipatch({type:"userinfo",data:response})
    //   saveDataToLocalStorage("user",JSON.stringify(response))
    //   saveDataToSessionStorage("user",JSON.stringify(response));
    //   let date=new Date();
    //  date.setDate(date.getDate()+1)
    //   saveDataFromCookie("user",JSON.stringify(response),date)
    //   saveDataFromWindowObject(response)
    //     alert("user Exist");
    //     navigate("/home")
    }
   
    else{
      setValidationError(true)
       const clear=setTimeout(()=>{
        setValidationError(false);
      },2000)
       clearTimeout(clear)
        
    }

    }).catch(()=>{

    })
    

 }
  return (
    <div className="m-3">
      <form  className= "m-5" onSubmit={handleSubmit((data )=>{validateUsers(data )})}>
        <div>{showDate}</div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            {...register("userName", { required: true })}
          ></input>
        </div>
        {errors.userName && (
          <div className="text-danger">UserName must be required</div>
        )}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          ></input>
        </div>
        {errors.password && (
          <div className="text-danger">password must be required</div>
        )}
        <div className="m-3">
          <input type="submit" value="submit" className="btn btn-primary"></input>
          <input
            type="reset"
            value="cancel"
            className="btn btn-danger ms-3"
          ></input>
        </div>
        { validationError && (
          <div
            className="text-danger bg-warning p-2"
            style={{ position: "fixed", right: "0px", top: "0px" }}
          >
            User Not exist
          </div>
        )}
      </form>
    </div>
  );
};
