import React from 'react';
import './photo-list-item.css';
import { Button } from 'reactstrap';

const PhotoListItem = () => {
    return (
        <li className="d-flex">
            <span>Name of photo</span>
            <div><img src='https://picsum.photos/id/237/200/300' alt='cat' /></div>
            <Button color="info">Звездочка</Button>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </li>
    )
}

export default PhotoListItem;