import React from "react";
import {GridApproveComponent} from '../../../shared/grid-approve/grid-approve.component';
import {getEventCategoryData} from '../../../../service/event/event-category.service';
import { NotificationMessage } from "../../../common/notification.message/notification-message.component";

export class EventCategoryView extends React.Component{
    constructor(){
        super();
        this.state={
            eventCategory:[],
            notificationType:"",
            notificationMessage:"",
            id:-1

        }
        this.header=["ID","EventName","EventDescription","Active","Actions"];
        this.data=[];
    }
    componentDidMount(){
        this.getData();

    }
    shouldComponentUpdate(){ 

            if(this.props.id !== this.state.id){
                this.getData();
            this.setState({id:this.props.id});
            return true;
           }
           else{
            return false;
           }

    }
    componentDidUpdate(){
        this.getData();
      
    
    }

    editRecord(item){
        // alert(JSON.stringify(item))
        this.props.edit(item)

    }
    deleteRecord(item){
        this.props.delete(item);

    }
    getData(){
        getEventCategoryData().then((res)=>{
            let activeRecords= res.data.filter((item) => item.isactive == true);
            this.setState({eventCategory:activeRecords});
            // let
            // this.setState({eventCategory:res.data})

        }).catch(()=>{
            this.setState({notificationType:'error',notificationMessage:'Network error contact admni.....!'});
        })

    }
    render(){
        return(
            <div>
                <GridApproveComponent headers={this.header} data={ this.state.eventCategory } edit={(item)=>{this.editRecord(item)}} delete={(item)=>{this.deleteRecord(item)}}></GridApproveComponent>
                <NotificationMessage type={this.state.notificationType} message={this.state.notificationMessage }></NotificationMessage>
            </div>
        )
    }
}