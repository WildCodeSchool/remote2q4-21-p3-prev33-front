import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilesList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/posts`)
            .then((res) => res.data)
            .then((data) => setFiles(data))
    }, []);

    return (
        <div>
            {files &&
            files.map((post) => (
                <div key={post.id}></div>
            ))}
        </div>
    )
}

export default FilesList