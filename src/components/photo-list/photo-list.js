import React from 'react';
import PhotoListItem from '../photo-list-item';
import './photo-list.css';

const PhotoList = () => {
    return (
        <ul className="list group">
            <PhotoListItem />
            <PhotoListItem />
            <PhotoListItem />
            <PhotoListItem />
        </ul>

    )
}

export default PhotoList;