import './App.css';
import { Homepage } from './Homepage';
import { Projects } from './Projects'
import { Project } from './Project'
import { Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Projects/:id" element={<Project/>} />
            {/* <Route path="/character/:id" element={<Character/>} /> */}
        </Routes>
        </>
        )
}
  
export default App;