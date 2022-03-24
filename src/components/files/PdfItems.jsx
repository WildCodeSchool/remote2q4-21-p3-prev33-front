import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formation from './Pdf';

const PdfItems = () => {
    const [formations, setFormations] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/training/1`)
            .then((res) => res.data)
            .then((data) => setFormations(data));
    }, []);

    return (
        <div>{formations &&
            formations.map((formation, index) => (
                <div>
                    <Formation formation={formation}/>
                </div>
            ))}
        </div>
    )
}

export default PdfItems