import React, {Component} from 'react';

import './task-list.css';
import Task from "../task/Task";

class TaskList extends Component {

    render() {
        return (
            <div className="task-list-main"
                 onDragOver={this.props.onDragOver}
                 onDrop={(event) => {
                     this.props.onDrop(event, this.props.category)
                 }}>
                <span className="task-list-header">
                    {this.props.category}
                </span>

                <div className="tasks-section">
                    {
                        this.props.tasks.map((task) => {
                            return <Task
                                key={task.id}
                                taskId={task.id}
                                onDragStart={this.props.onDragStart}
                                title={task.title}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TaskList;