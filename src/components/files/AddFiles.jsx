import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddFiles = () => {
    const navigator = useNavigate();

    const [title, setTitle] = useState("");
    const [reference, setReference] = useState("");
    const [link, setLink] = useState("");
    const [trainingCategories, setTrainingCategories] = useState([]);
    const [categoryTraining, setCategoryTraining] = useState(1);

    useEffect(() => {
        const getTrainingCategory = async () => {
            const url = `${process.env.REACT_APP_API_URL}/training_category`;
            axios
                .get(url)
                .then((res) => {
                    if (res.status === 200) {
                        setTrainingCategories(res.data)
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getTrainingCategory();
    }, []);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("reference", reference);
        formData.append("link", link);
        formData.append('category_training', categoryTraining);

        await axios.post(`${process.env.REACT_APP_API_URL}/training`, formData)
        // navigator("/readCarrousel");
        .then((response)=>{
            if(response.status===201){
                setCategoryTraining(1);
            }
        })
        .catch((err)=>{
        })

    };

    return (
        <div className="adminCarrouselForm">
            <section className="admin-carrousel">
                <h2 className="admin-h2">Section Fichiers</h2>
                <label className="admin-label" htmlFor="title">
                    Titre
                </label>
                <input
                    className="admin-input"
                    type="text"
                    id="title"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label className="admin-label" htmlFor="reference">
                    Référence de fichier
                </label>
                <input
                    className="admin-input"
                    type="text"
                    id="reference"
                    onChange={(event) => setReference(event.target.value)}
                />
                
                <label htmlFor='TrainingCategory' className='FormSignalLabel'>Catégorie<select id="TrainingCategory" value={categoryTraining} onChange={(e) => setCategoryTraining(e.target.value)}>
                    {trainingCategories.map((trainingCategory) => {
                        return (
                            <option value={trainingCategory.id} key={trainingCategory.id}>{trainingCategory.name}</option>
                        )
                    })}
                </select></label>
                
                <label className="admin-label" htmlFor="link">
                    Fichier
                </label>
                <input
                    className="admin-input"
                    type="file"
                    id="link"
                    onChange={(event) => setLink(event.target.files[0])}
                />

                <button className="admin-button" type="submit" onClick={handleSubmit}>
                    Envoyer
                </button>
            </section>
        </div>
    );
};

export default AddFiles;