import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { MDBDataTable } from 'mdbreact';

export function Tasks() {
    const [tasks, setTasks] = useState([])
    let navigate = useNavigate();
    let params = useParams();
    async function fetchTasks() {
        const response = await fetch(`/api/${params.username}/Projects/${params.id}/Tasks`);
        const responseJson = await response.json();
        console.log(responseJson)
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

    for (var i = 0; i < tasks.length; i++){
        tasks[i]["clickEvent"] = (tasks) => handleTaskClick(tasks.TaskId)
        
        
        //console.log(projects[i])
    }

    function handleTaskClick(taskId){
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

    return (
        <MDBDataTable
      striped
      bordered
      small
      noBottomColumns={true}
      data={data}
    />
    )

}