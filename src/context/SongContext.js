import React, { useState, createContext } from 'react';
import { v1 as uuidv1 } from 'uuid'
export const SongContext = createContext();

const SongContextProvider = (props) => {

    const [songs, setSongs] = useState([
        { title: 'Radio', id: 1 },
        { title: 'Idę prosto', id: 2 },
        { title: 'Biała flaga', id: 3 },
        { title: 'Ja bez kolacji nie chcę spać', id: 4 }
    ]);

    const addSong = (title) => {
        setSongs(
            [...songs, { title: title, id: uuidv1() }] //zamiast title: title bo wartość jest taka sama jak nazwa
        )
    }

    return (
        <SongContext.Provider value={{ songs, addSong }}>
            {props.children}
        </SongContext.Provider>
    );
}

export default SongContextProvider;