import React from "react";
import Film from "./Film";


const FilmList = ({films}) => {
    const filmNodes = films.map((film) => {

        return (
            <Film 
                id={film.id} 
                url={film.url} 
                key={film.id}>
                    {film.name}
            </Film>
        )
    })

    return (
        <ul>
            {filmNodes}
        </ul>
    )
};

export default FilmList;