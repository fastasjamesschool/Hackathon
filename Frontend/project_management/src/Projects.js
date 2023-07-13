import { useState, useEffect } from 'react';

export function Projects() {
    const [projects, setProjects] = useState([])
    async function fetchProjects() {
        const response = await fetch('/api/Projects');
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