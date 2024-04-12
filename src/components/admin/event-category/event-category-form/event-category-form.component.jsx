// import React, { createRef } from "react";
import React from 'react';
import { saveEventCategoryData, updateEventCategory } from "../../../../service/event/event-category.service";
import {EventCategoryView} from '../event-category-view/event-category-view.component';
import { NotificationMessage } from "../../../common/notification.message/notification-message.component";

export class EventCategoryForm extends React.Component{
    constructor(){
        super();
        this.state={
            id:0,
            btnText:"Create",
            type:"",
            message:""

        }
        this.categoryName=React.createRef();
        this.categoryDescription=React.createRef();
    }
    saveData(event){
        event.preventDefault();
        let data={
             id:this.state.id,
            categoryName:this.categoryName.current.value,
            categoryDescription:this.categoryDescription.current.value,
            isactive:true
        }
        if(this.state.id === 0){

        saveEventCategoryData(data).then((res)=>{
            this.setState({id:res.data.id})
        })
    }
    else{
        updateEventCategory(data).then((res)=>{
            this.setState({type:"succes"});
            this.setState({message:"Data saved Successfully"})
            window.location.reload();
            this.refresh();
        });

    }

    }

    editRecord(item){
        this.categoryName.current.value=item.categoryName;
        this.categoryDescription.current.value=item.categoryDescription;
        this.setState({id:item.id});
        this.setState({btnText:"update"});
    }
    deleteRecord(item){
        let data={
            id:item.id,
           categoryName:item.categoryName,
           categoryDescription:item.categoryDescription,
           isactive:false
       };
       updateEventCategory(data).then((res)=>{
        this.setState({type:"info"});
        this.setState({message:"Data Delete succesfully"});
       });

       }

    // }
    refresh(){
        this.categoryName.current.value=" ";
        this.categoryDescription.current.value=" ";
        this.setState({btnText:"Create"});

    }
    render(){
        return(
            <div className="m-3">
                <form onSubmit={(event)=>{this.saveData(event)}}>
                    <div className="form-group">
                        <label>EventName</label>
                        <input type="text" className="form-control" ref={this.categoryName}></input>
                    </div>
                    <div className="form-group">
                        <label>Event Description </label>
                        <textarea row={4} className="form-control" ref={this.categoryDescription}>

                        </textarea>
                    </div>
                    <div className="m-3">
                        <input type="submit" value={this.state.btnText} className="btn btn-primary"></input>
                        <input type="reset" value="Cancel" className="btn btn-secondary ms-3"></input>
                    </div>
                </form>
                <EventCategoryView id={this.state.id} edit={(item)=>{this.editRecord(item)}} delete={(item)=>{this.deleteRecord(item)}}></EventCategoryView>
                <NotificationMessage type={this.state.type } message={this.state.message }></NotificationMessage>
            </div>
        )
    }
}