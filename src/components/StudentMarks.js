import React, { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../consistents';

function AddMarks() {
    const [StudentName, setStudentName] = useState('');
    const [Course, setCourse] = useState('');
    const [Marks, setMarks] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleStudentNameChange = (e) => {
        setStudentName(e.target.value);
    };

    const handleCourseChange = (e) => {
        setCourse(e.target.value);
    };

    const handleMarksChange = (e) => {
        setMarks(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
    const data = JSON.stringify({
        "student": StudentName,
        "course": Course,
        "mark": Marks
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: BaseUrl + 'sis/studentmarks/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios.request(config)
        .then((response) => {
            setSuccess('Marks added sucessfully')
            setStudentName('')
            setCourse('')
            setMarks('')
            console.log(JSON.stringify(response.data));

        })
        .catch((error) => {
            setError('Error adding Marks. Please try again.')
            setSuccess('')
            console.log(error);
        });
    }
    return (
        <div>
            <h2>Add Student</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <form onSubmit={handleSubmit}>
                <p className="form-group ">
                    <label>Student Name</label>
                    <input type="number" className="mx-1" value={StudentName} onChange={handleStudentNameChange}></input>
                </p>
                <br />
                <p className="form-group ">
                    <label>Subject</label>
                    <input type="text" className="mx-1" value={Course} onChange={handleCourseChange}></input>
                </p>
                <br />
                <p className="form-group ">
                    <label>Enter Marks</label>
                    <input type="text" className="mx-1" value={Marks} onChange={handleMarksChange}></input>
                </p>
                <br />
                <div>
                    <button type="submit" className="btn btn-primary">Add Marks</button>
                </div>
            </form>
        </div>
    );
}

export default AddMarks;