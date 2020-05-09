import React, { useState, useContext } from 'react';
import NewSongForm from './NewSongform';
import { ThemeContext } from '../context/ThemeContext'
import { SongContext } from '../context/SongContext'
import ThemeToggle from './ThemeToggle';

const SongList = () => {

    const { isLightTheme, dark, light } = useContext(ThemeContext);
    const { songs, addSong } = useContext(SongContext)
    const theme = isLightTheme ? light : dark;

    return (
        <div className="song-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {songs.map(song => (
                    <li style={{ background: theme.ui }} key={song.id}>{song.title}</li>
                ))}
            </ul>
            <NewSongForm />
            <ThemeToggle />
        </div >
    );
}

export default SongList;