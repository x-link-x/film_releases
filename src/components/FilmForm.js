import React, {useState} from "react";

const FilmForm = ({onFilmSubmit}) => {

    
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const nameToSubmit = name.trim();
        const urlToSubmit = url.trim();
        if (!nameToSubmit || !urlToSubmit) {
            return null;
        }

        onFilmSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        });
        setName("");
        setUrl("");
    }
    
    return (
        <form onSubmit= {handleFormSubmit}> 
            <input
            type='text'
            placeholder='title'
            value={name}
            onChange={handleNameChange}
            />
            <input
            type='text'
            placeholder='url'
            value={url}
            onChange={handleUrlChange}
            />
            <input
            type='submit'
            value='add film'
            />
        </form>
    )
}
export default FilmForm;