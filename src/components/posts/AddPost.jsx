import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const navigator = useNavigate();
    // récupération des states des différents champs du formulaire
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [picture, setPicture] = useState('');

    const handleSubmit = async () => {
        const formData = new FormData();
        // découpage du formulaire
        formData.append('title', title);
        formData.append('content', content);
        formData.append('picture', picture);

        await axios.post(`${process.env.REACT_APP_API_URL}/posts`, formData);
        navigator('/readpost')
    }

    return (
        <div className='AddPostForm'>
            <label htmlFor="title">title</label>
            <input type="text" id='title' onChange={(event) => setTitle(event.target.value)}/>

            <label htmlFor="content">content</label>
            <input type="textarea" id='content' onChange={(event) => setContent(event.target.value)}/>

            <label htmlFor="picture">picture</label>
            {/* on envoie le fichier numéro 0 */}
            <input type="file" id='picture' onChange={(event) => setPicture(event.target.files[0])}/>

            <button type='submit' onClick={handleSubmit}>Envoyer</button>
        </div>
    )
}

export default AddPost