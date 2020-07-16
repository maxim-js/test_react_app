import React from 'react';
import PhotoListItem from '../photo-list-item';
import './photo-list.css';
import { CardDeck } from 'reactstrap';

const PhotoList = () => {
    return (
        <div className="photo-list-group">
            <PhotoListItem url='https://i.picsum.photos/id/152/200/300.jpg?hmac=eCdUqkEQWPiigXtrPPzcwO9QeKYgOrV_YWW0LoFkuyk' author='adf' />
            <PhotoListItem url='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' author='fd' />
            <PhotoListItem url='https://i.picsum.photos/id/152/200/300.jpg?hmac=eCdUqkEQWPiigXtrPPzcwO9QeKYgOrV_YWW0LoFkuyk' author='adf' />
            <PhotoListItem url='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' author='fd' />
            <PhotoListItem url='https://i.picsum.photos/id/152/200/300.jpg?hmac=eCdUqkEQWPiigXtrPPzcwO9QeKYgOrV_YWW0LoFkuyk' author='adf' />
            <PhotoListItem url='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' author='fd' />
            <PhotoListItem url='https://i.picsum.photos/id/152/200/300.jpg?hmac=eCdUqkEQWPiigXtrPPzcwO9QeKYgOrV_YWW0LoFkuyk' author='adf' />
            <PhotoListItem url='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' author='fd' />
        </div>

    )
}

export default PhotoList;