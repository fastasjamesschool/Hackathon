import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export function Task() {
    const [task, setTask] = useState([])
    let navigate = useNavigate();
    let params = useParams();
    async function fetchTask() {
        const response = await fetch(`/api/Projects/${params.id}/Tasks/${params.taskId}`);
        const responseJson = await response.json();
        //console.log(responseJson)
        setTask(responseJson)  
    }
    
    useEffect(() => {
        fetchTask()
    }, [])

    return (
        <>
        {JSON.stringify(task)}
        </> 
    )

}