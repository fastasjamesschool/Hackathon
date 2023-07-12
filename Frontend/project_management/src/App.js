import './App.css';
import { Homepage } from './Homepage';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            {/* <Route path="/character/:id" element={<Character/>} /> */}
        </Routes>
        </>
        )
}
  
export default App;