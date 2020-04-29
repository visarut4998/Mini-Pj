import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './widgets/header';
import * as actions from './action/index';
import './home.css';
import {Link} from 'react-router-dom';


class Home extends Component {
    state = {
        albums: []
    }
    componentDidMount() {
        let favorites = actions.getFavoritesAlbums();
        this.setState({
            albums: JSON.parse(favorites)
        })
    }

    renderAlbums = () => {
        const { albums } = this.state;
        return albums && albums.length ?
            albums.map((item, index) => (
                <div key={index} className="col-mb-4 mb-2">
                    <div className="card border-danger">
                        <img src={item.album.cover_big} alt="" className="card-img-top" height ="300" />
                        <div className="card-body">
                            <span className="text-primary">{item.artist.name}</span>
                            <div className="card-title">
                                {item.title}
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="links">
                                <Link to={`/details/${item.album.id}`} className='link'><i className="fas fa-info text-danger"></i></Link>
                                <a onClick={() => this.addToFavorites(item)} className='link'><i className="fas fa-star text-danger"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
            ))
            : null
    }
    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div class="row mt-4">
                    <div class="col-md-10 mx-auto">
                        <Header/>
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;