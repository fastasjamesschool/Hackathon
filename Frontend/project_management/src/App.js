import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Homepage } from './Homepage';
import { Projects } from './Projects'
import { Project } from './Project'
import { Tasks } from './Tasks'
import { Task } from './Task'

import { Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/:username" element={<Projects/>} />
            <Route path="/:username/Projects/:id" element={<Project/>} />
            <Route path="/:username/Projects/:id/Tasks" element={<Tasks/>} />
            <Route path="/:username/Projects/:id/Tasks/:taskId" element={<Task/>} />
            
        </Routes>
        </>
        )
}
  
export default App;