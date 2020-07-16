import React, { Component } from 'react';
import './photo-list-item.css';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';

class PhotoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        }
        this.nextState = () => {
            this.setState(state => ({
                a: ++state.a
            }))
        }
    }

    render() {
        const { url, author } = this.props;
        const { a } = this.state;

        return (
            <div className="card">
                <div className="card-img">
                    <img height="400px" width="100%" src={url} />
                </div>
                <div className="card-info">
                    <div className="card-title">
                        {author}
                    </div>
                    <div onClick={this.nextState} className="icon-star" type="button">
                        <i class="fa fa-star-o" aria-hidden="true">{a}</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoListItem;