import React from 'react';
import PhotoListItem from '../photo-list-item';
import './photo-list.css';

const PhotoList = ({ cards, onToggleFavorite }) => {

    const elements = cards.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <div key={item.id} className="card">
                <PhotoListItem
                    {...itemProps}
                    onToggleFavorite={() => onToggleFavorite(id)} />
                {/* из item подставляем зн-ия */}
            </div>
        )
    });

    return (
        <div className="photo-list-group">
            {elements}
        </div>

    )
}

export default PhotoList;