import React, {Component} from 'react';

import TaskList from '../task-list/TaskList';

import './task-board.css';

class TaskBoard extends Component {

    state = {
        tasks: [
            {
                "category": "wip",
                "tasks": [
                    {
                        "id": 1,
                        "title": "Upload profile picture"
                    },
                    {
                        "id": 2,
                        "title": "remove unused imports"
                    },
                    {
                        "id": 3,
                        "title": "clean and refactor the code"
                    }
                ]
            },
            {
                "category": "completed",
                "tasks": [
                    {
                        "id": 4,
                        "title": "fix the bug in the login page"
                    }
                ]
            }

        ]
    };


    onDragOver = (event) => {
        console.log("on drag over ");
        event.preventDefault();
    };


    onDragStart(event, id) {
        console.log(" started to drag element [" + id + "] ");

        //this will work in IE and all other browsers
        event.dataTransfer.setData("text/plain", id);
    }


    onDrop(event, movedCategory) {

        let taskId = event.dataTransfer.getData("text/plain");
        console.log(" task [" + taskId + "] was dragged to category [" + movedCategory + "] ");

        // console.log(this.state);
        this.state.tasks.forEach(category => {

            let taskIndex = category.tasks.findIndex(taskEntry => {
                return (taskEntry.id == taskId);
            });

            console.log(" Task index [" + taskIndex + "] ");

            if (taskIndex >= 0) {

                let task = category.tasks[taskIndex];
                console.log(task);

                //remove the task from past category
                category.tasks.splice(taskIndex, 1); // remove 1 element from given index (exactly the element in the index)
                // this.setState(this.state);

                //add the task to newly moved category
                this.updateStateWithNewDraggedElement(movedCategory, task);
            }
        });
    }


    updateStateWithNewDraggedElement(movedCategory, newDraggedElement) {

        this.state.tasks.forEach((taskCategory) => {
            console.log("[" + taskCategory.category + "] [" + movedCategory + "] ");
            if (taskCategory.category == movedCategory) {
                console.log(" true ==== ");

                console.log(taskCategory.tasks);

                taskCategory.tasks.push(newDraggedElement);

                this.setState(this.state);
            }
        });
    }


    render() {
        return (
            <div className="task-board-main">
                <span className="task-board-header">
                    Displaying the task board
                </span>

                <div className="task-list-section">
                    {
                        this.state.tasks.map(category => {
                            return <TaskList
                                onDragOver={this.onDragOver}
                                onDragStart={this.onDragStart}
                                onDrop={this.onDrop.bind(this)}
                                key={category.category}
                                category={category.category}
                                tasks={category.tasks}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TaskBoard;