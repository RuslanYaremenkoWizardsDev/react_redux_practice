import React from 'react';
import Input from './Input';

const MovieCreator = ({ createMovie }) =>{
    const handleCreate = () =>{
        createMovie()
    }
    return (
        <div className="creator">
            <Input id="title" label="Title"/>
            <Input id="likes" label="likes"/>
            <Input id="stars" label="stars"/>
            <Input id="director" label="director"/>
            <Input id="description" label="description"/>
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}

export default MovieCreator