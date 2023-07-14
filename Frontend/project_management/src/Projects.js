import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Projects() {
    const [projects, setProjects] = useState([])
    let params = useParams()
    async function fetchProjects() {
        const response = await fetch(`/api/${params.username}`);
        const projects = await response.json();
        // console.log(projects)
        setProjects(projects)  
    }
    
    useEffect(() => {
        fetchProjects()
    }, [])
    console.log({ projects })

    return (
        <>
        <h1>{JSON.stringify(projects)}</h1>
        </> 
    )

}