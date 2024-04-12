import React from "react";
export class GridCell extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <td style={{backgroundColor:"skyblue"}}>{this.props.data.toString()}</td>
        )

    }

}