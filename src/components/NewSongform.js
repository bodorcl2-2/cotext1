import React, { useState, useContext } from 'react';
import { SongContext } from '../context/SongContext';
import { ThemeContext } from '../context/ThemeContext';


const NewSongForm = () => {
    const { isLightTheme, dark, light } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const { songs, addSong } = useContext(SongContext)
    const [title, setTitle] = useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label
                htmlFor="newSong"
                style={{
                    // background: theme.ui,
                    color: theme.syntax,
                    padding: '.5em',
                    // borderRadius: '.5em',
                    marginRight: '.3em',
                    fontSize: '.8em'
                }}>
                Tytuł utworu:
                </label>
            <input
                style={{
                    borderRadius: '.5em',
                    padding: '.3em'
                }}
                type="text"
                id="newSong"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="submit"
                value="Dodaj utwór"
                style={{
                    background: theme.ui,
                    color: theme.syntax,
                    marginLeft: ".3em",
                    padding: '.5em',
                    border: 'none',
                    borderRadius: '.5em'
                }}
            />
        </form>
    );
}

export default NewSongForm;

