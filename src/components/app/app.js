import React from 'react';
import Header from '../header';
import PhotoList from '../photo-list'
import './app.css';

const App = () => {
    return (<div>
        <Header />
        <PhotoList />
        <div><p>Тут будут фотки</p></div>
    </div>)
}

export default App;