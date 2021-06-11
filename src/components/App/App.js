import React from 'react';
import Header from '../Header';
import './app.scss';
import Movies from '../Movies';
import MovieCreator from '../MovieCreator';

const App = () => (
    <>
        <Header/>
        <div className="section">
            <Movies/>
            <MovieCreator/>
        </div>
    </>
)

export default App