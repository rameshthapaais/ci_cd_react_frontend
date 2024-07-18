import './App.css';
import Nabbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import AddStudent from './components/Student';
import AddMarks from './components/StudentMarks';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Nabbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<AddStudent />} />
          <Route path="/student_marks" element={<AddMarks />} />
        </Routes>

      
      <br />
    </div>
  );
}

export default App;
