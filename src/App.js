import './App.css';
import Nabbar from './components/Navbar';
import AddStudent from './components/Student';
import AddMarks from './components/StudentMarks';

function App() {
  return (
    <div className="App">
    <Nabbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<AddStudent />} />
        <Route path="/student_marks" element={<AddMarks />} />
    </Routes>
    </div>
  );
}

export default App;
