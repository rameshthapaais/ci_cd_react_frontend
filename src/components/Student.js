import React, { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../consistents';


function AddStudent() {
    const [Name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [Program, setProgram] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleStudentIdChange = (e) => {
        setStudentId(e.target.value);
    };

    const handleProgramChange = (e) => {
        setProgram(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            "name": Name,
            "student_id": studentId,
            "program": Program
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'sis/students/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                setSuccess('Student added successfully!');
                setName('');
                setStudentId('');
                setProgram('');
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                setError('Error adding student. Please try again.');
                setSuccess('');
                console.log(error);
            });
    };

    return (
        <div>
            <h2>Add Student</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <div >
                <label>Name:</label>
                <input
                        className="col-form-label mx-3"
                        type="text"
                        value={Name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <br/>
                <div >
                    <label>Student Id:</label>
                    <input
                        className="col-form-label mx-1"
                        type="number"
                        value={studentId}
                        onChange={handleStudentIdChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label>Program:</label>
                    <input
                        className="col-form-label mx-1"
                        type="number"
                        value={Program}
                        onChange={handleProgramChange}
                        required
                    />
                </div>
                <br/>
                <button type="submit" className='btn btn-primary'>Add Student</button>
                <p>
                </p>

            </form>
            
        </div>
    );
}

export default AddStudent;