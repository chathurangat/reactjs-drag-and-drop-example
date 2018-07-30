import React, {Component} from 'react';

import './task.css';

class Task extends Component {

    render() {
        return (
            <div className="task-item" draggable onDragStart={(event) => {
                this.props.onDragStart(event, this.props.taskId)
            }}>
                {this.props.title}
            </div>
        );
    }
}

export default Task;