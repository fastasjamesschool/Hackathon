import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export function Project() {
    const [project, setProject] = useState([])
    let navigate = useNavigate();
    let params = useParams();
    async function fetchProject() {
        const response = await fetch(`/api/Projects/${params.id}`);
        const responseJson = await response.json();
        console.log(responseJson)
        setProject(responseJson)  
    }
    
    useEffect(() => {
        fetchProject()
    }, [])
    // console.log({ project })

    return (
        <>
        {JSON.stringify(project)}
        </> 
    )

}