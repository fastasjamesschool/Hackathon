import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation} from "react-router-dom";
import { MDBDataTable } from 'mdbreact';
import { Button } from 'bootstrap';
import { UpdateTask } from './UpdateTask'

export function Task() {
    const [task, setTask] = useState([])
    let navigate = useNavigate();
    const location = useLocation();
    const role = location.state.role.role
    //console.log(role)
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

    const currentTask = task[0]
    //console.log(currentTask)
    
    async function updateTask(projectId, taskId, taskName, description, assignedUser, dueDate, estimatedDuration, event) {
        event.preventDefault()
        const updatedTask = { projectId, taskId,taskName, description, assignedUser, dueDate, estimatedDuration };
        const url = `/api/:username/Projects/:id/Tasks/:taskId/Update`;
        const theNewTask = await fetch(url, {
            method: "PUT", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(updatedTask)
        })

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
        rows: task
    }

    
    return (
        <>
        {role && <UpdateTask updateTask = {updateTask} task = {currentTask} />}
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