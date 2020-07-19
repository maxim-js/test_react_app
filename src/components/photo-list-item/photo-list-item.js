import React, { Component } from 'react';
import './photo-list-item.css';


export default class PhotoListItem extends Component {


    render() {
        const { url, author, alt, favorite, onToggleFavorite } = this.props;
        let classCard = 'card';

        if (favorite) {
            classCard += ' favorite'
        }

        return (
            <div className={classCard}>
                <div className="card-img">
                    <img height="400px" width="100%" src={url} alt={alt} />
                </div>
                <div className="card-info">
                    <div className="card-title">
                        {author}
                    </div>
                    <div onClick={onToggleFavorite} className="icon-star" type="button">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

