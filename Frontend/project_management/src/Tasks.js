import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export function Tasks() {
    const [tasks, setTasks] = useState([])
    let navigate = useNavigate();
    let params = useParams();
    async function fetchTasks() {
        const response = await fetch(`/api/Projects/${params.id}/Tasks`);
        const responseJson = await response.json();
        console.log(responseJson)
        setTasks(responseJson)  
    }
    
    useEffect(() => {
        fetchTasks()
    }, [])
    // console.log({ project })

    return (
        <>
        {JSON.stringify(tasks)}
        </> 
    )

}