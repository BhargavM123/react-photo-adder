import React, {Component} from "react";

class List extends Component{
    render(){
        return <ul>
                {this.props.tasks.map((tasks, index) => < li key={index} > {tasks} </li>)}
            </ul>
        
    }
}
export default List;