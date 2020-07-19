import React, { Component } from 'react';
import Header from '../header';
import PhotoList from '../photo-list'
import './app.css';
import PictureService from '../../service/service';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { url: 'https://picsum.photos/id/0/5616/3744', author: 'Alejandro Escamilla', alt: 'picture from site', favorite: false, id: 1 },
                { url: 'https://picsum.photos/id/1002/4312/2868', author: 'NASA', alt: 'picture from site', favorite: false, id: 2 },
                { url: 'https://picsum.photos/id/10/2500/1667', author: 'Paul Jarvis', alt: 'picture from site', favorite: true, id: 3 },
                { url: 'https://picsum.photos/id/100/2500/1656', author: 'Tina Rataj', alt: 'picture from site', favorite: false, id: 4 },
                { url: 'https://picsum.photos/id/1000/5626/3635', author: 'Lukas Budimaier', alt: 'picture from site', favorite: false, id: 5 },
                { url: 'https://picsum.photos/id/1001/5616/3744', author: 'Danielle MacInnes', alt: 'picture from site', favorite: false, id: 6 }
            ],
            filter: 'all'
        };
        this.onToggleFavorite = this.onToggleFavorite.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    onToggleFavorite(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = { ...old, favorite: !old.favorite };

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    filterCard(items, filter) {
        if (filter === 'favorite') {
            return items.filter(item => item.favorite)
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({ filter })
    }

    getPicture = async () => {
        const api_url = await fetch('https://picsum.photos/v2/list?page=1');
        const getdata = await api_url.json();
        console.log(getdata);
    }


    render() {

        const { filter, data } = this.state;

        const visibleCard = this.filterCard(data, filter);

        return (
            <div>
                <Header
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    onToggleFavorite={this.onToggleFavorite} />
                <PhotoList
                    cards={visibleCard}
                    onToggleFavorite={this.onToggleFavorite} />
            </div >
        )
    }

}