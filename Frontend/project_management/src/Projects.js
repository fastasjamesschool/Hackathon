import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

export function Projects() {
    const [projects, setProjects] = useState([])
    let params = useParams()
    let navigate = useNavigate();
    async function fetchProjects() {
        const response = await fetch(`/api/${params.username}`);
        const projects = await response.json();
        // console.log(projects)
        setProjects(projects)  
    }
    
    useEffect(() => {
        fetchProjects()
    }, [])
    //console.log({ projects })

    // let handleClick = (params) =>
    //     console.log({params})


    for (var i = 0; i < projects.length; i++){
        //console.log(projects[i])
        projects[i]["clickEvent"] = (projects) => handleProjectClick(projects.ProjectId)
        //console.log(projects[i])
    }

    function handleProjectClick(projectId){
        //console.log(projectId)
        navigate(`/${params.username}/Projects/${projectId}/Tasks`)
    }

    const data = {
        columns: [
          {
            label: 'ProjectId',
            field: 'ProjectId',
            sort: 'asc',
            width: 10
          },
          {
            label: 'AssignedUsers',
            field: 'AssignedUsers',
            sort: 'asc',
            width: 50
          },
          {
            label: 'Budget',
            field: 'Budget',
            sort: 'asc',
            width: 200
          },
          {
            label: 'CompletionTime',
            field: 'CompletionTime',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Description',
            field: 'Description',
            sort: 'asc',
            width: 130
          },
          {
            label: 'ProjectName',
            field: 'ProjectName',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Workload',
            field: 'Workload',
            sort: 'asc',
            width: 100
          }
        ],
        rows: projects
    }

    return (
        // <>
        // <h1>{JSON.stringify(projects)}</h1>
        // </> 
        <MDBDataTable
      striped
      bordered
      small
      noBottomColumns={true}
      data={data}
    />
    )


}