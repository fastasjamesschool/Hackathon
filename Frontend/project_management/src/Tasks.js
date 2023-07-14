import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { MDBDataTable } from 'mdbreact';
import { CreateTask } from './CreateTask'

export function Tasks() {
    const [tasks, setTasks] = useState([])
    let navigate = useNavigate();
    let params = useParams();
    async function fetchTasks() {
        const response = await fetch(`/api/${params.username}/Projects/${params.id}/Tasks`);
        const responseJson = await response.json();
        //console.log(responseJson)
        setTasks(responseJson)
    }

    useEffect(() => {
        fetchTasks()
    }, [])
    // console.log({ project })

    // return (
    //     <>
    //     {JSON.stringify(tasks)}
    //     </> 
    // )

    for (var i = 0; i < tasks.length; i++) {
        tasks[i]["clickEvent"] = (tasks) => handleTaskClick(tasks.TaskId)


        //console.log(projects[i])
    }

    function handleTaskClick(taskId) {
        //console.log(projectId)
        navigate(`/${params.username}/Projects/${params.id}/Tasks/${taskId}`)
    }

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
        rows: tasks
    }

    async function sendNewTask(projectId, taskId, taskName, description, assignedUser, dueDate, estimatedDuration, event) {
        event.preventDefault()
        // console.log(taskId)
        // Make API call to send data to server as a POST
        const newTask = { projectId, taskId, taskName, description, assignedUser, dueDate, estimatedDuration };
        // console.log(JSON.stringify(newTask))
        const url = `/api/:username/Projects/:id/Tasks/:taskId`;
        const theNewTask = await fetch(url, {
            method: "POST", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(newTask)
        })


        // Put it in the list. Update the page to show our new todo.
        // setTodos([...todos, theNewTask])
    }

    return (
        <>
            <CreateTask sendNewTask={sendNewTask} projectId={params.id} taskId={params.TaskId} />
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