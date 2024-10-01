import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestConnection() {
    const [message, setMessage] = useState('');

    useEffect(()=> {
        axios.get('http://localhost:8080/api/test')
        .then(response => setMessage(response.data))
        .catch(error => setMessage('Error: '+error.message));
    }, []);

    return(
        <div>
            <h2>Backend Connection Test</h2>
            <p>{message || 'Loading...'}</p>
        </div>
    );
}

export default TestConnection;