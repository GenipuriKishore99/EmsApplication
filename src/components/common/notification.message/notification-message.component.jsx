
import { useEffect, useState } from 'react';
import './notification-message.component.css';
export function NotificationMessage(props){
    const [showMessage,setShowMessage]=useState(false);
    
    function closeMessage(){
        setShowMessage(false);

    }
    useEffect(()=>{
        if(props.type != " "){
            setShowMessage(true)

        }
        

    },[props.type])

        return(
            <div className="notification-message">
                {
                    showMessage &&
                     <div data-type={props.type}>
                        {props.message}
                     <div className="close-btn" onClick={()=>{closeMessage()}}>&times;</div>
                    </div>
                }
               
                

            </div>

        )
    }
