import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { MDBDataTable } from 'mdbreact';
import { CreateTask } from './CreateTask'

export function Task() {
    const [task, setTask] = useState([])
    let navigate = useNavigate();
    let params = useParams();
    async function fetchTask() {
        const response = await fetch(`/api/${params.username}/Projects/${params.id}/Tasks/${params.taskId}`);
        const responseJson = await response.json();
        //console.log(responseJson)
        setTask(responseJson)  
    }
    
    useEffect(() => {
        fetchTask()
    }, [])

    // task["clickEvent"] = (task) => handleTaskClick(tasks.TaskId)
    //console.log(projects[i])
    
    // function handleTaskClick(taskId){
    //     //console.log(projectId)
    //     navigate(`/${params.username}/Projects/${params.id}/Tasks/${taskId}`)
    // }

    const data = {
        columns: [
          {
            label: 'AssignedUser',
            field: 'AssignedUser',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Description',
            field: 'Description',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Due Date',
            field: 'Due Date',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Estimated Duration',
            field: 'Estimated Duration',
            sort: 'asc',
            width: 100
          },
          {
            label: 'ProjectId',
            field: 'ProjectId',
            sort: 'asc',
            width: 150
          },
          {
            label: 'TaskName',
            field: 'TaskName',
            sort: 'asc',
            width: 100
          },
          {
            label: 'TaskId',
            field: 'TaskId',
            sort: 'asc',
            width: 100
          }
        ],
        rows: task
    }
    async function sendNewTask(taskName, description,assignedUser,dueDate,estimatedDuration, event) {
        event.preventDefault()
        // Make API call to send data to server as a POST
        const newTask = { taskName, description,assignedUser,dueDate,estimatedDuration };
        const url = `/api/:username/Projects/:id/Tasks/:taskId`;
        const theNewTask = await fetch(url, {
          method: "POST", headers: {
            "Content-Type": "application/json"
          }, body: JSON.stringify(newTask)
        }).then(res => res.json())
        
        // Put it in the list. Update the page to show our new todo.
        // setTodos([...todos, theNewTask])
      }
    

    return (
        <>
        <CreateTask sendNewTask={sendNewTask}/>
        <MDBDataTable
      striped
      bordered
      small
      noBottomColumns={true}
      data={data}
    />
    </>
    )

}