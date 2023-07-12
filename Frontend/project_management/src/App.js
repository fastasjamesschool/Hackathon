import './App.css';
import { Homepage } from './Homepage';
import { Projects } from './Projects'
import { Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/Projects" element={<Projects/>} />
            {/* <Route path="/" element={<Task/>} /> */}
            {/* <Route path="/character/:id" element={<Character/>} /> */}
        </Routes>
        </>
        )
}
  
export default App;