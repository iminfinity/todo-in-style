import React from "react";
import "./task.styles.scss";
import Delete from "../delete-task/delete-task.component";
import axios from "axios";
import Update from "../update-task/update-task.component";

class Task extends React.Component {
  deleteTask(id) {
    axios
      .delete(`http://localhost:5000/todo/delete/${id}`)
      .then(() => console.log("Task Deleted"))
      .catch((error) => console.log(error));
  }
  updateTask(id, task) {
    axios
      .post(`http://localhost:5000/todo/update/${id}`, { task })
      .then(() => console.log("Task Updated"))
      .catch((error) => console.log(error));
  }
  render() {
    const { task, createdAt, id } = this.props;
    return (
      <div className="task">
        <div className="task-header">
          {task} <span>{createdAt}</span>
        </div>
        <div>
          <Update task={task} id={id} updateTask={this.updateTask.bind(this)} />
          <Delete id={id} deleteTask={this.deleteTask.bind(this)} />
        </div>
      </div>
    );
  }
}
export default Task;
