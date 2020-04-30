import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './widgets/header';
import * as actions from './action/index';
import './home.css';
import Search from './searchBar/searchbar';
import {Link} from 'react-router-dom';
import swal from 'sweetalert'

class Home extends Component {
    state = {
        albums: []
    }
    componentDidMount() {
        actions.getAlbums().then(item => this.setState({
            albums: item
        }))
    }
    searchAlbums = (term) => {
        actions.getAlbums(term).then(item=>this.setState({
            albums : item
        }))
    }

    addToFavorites = (album) => {
        let oldFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if(this.checkAlbum(oldFavorites,album)){
            swal({
                title : 'Album Existe',
                text : 'Album already added to your favorites',
                icon : 'warning'
            })
            return false;
        }
        oldFavorites.push(album);
        let favorites = oldFavorites;
        localStorage.setItem('favorites',JSON.stringify(favorites));
        swal({
            title : 'Album Add',
            text : 'Album added to your favorites',
            icon : 'success'
        });
    }
    checkAlbum = (albums,album) => {
        let found = albums.some(function(item){
            console.log(item.album.id + " " +album.album.id);
            return item.album.id === album.album.id;
        });
        return found;
    }
    renderAlbum = () => {
        const { albums } = this.state;
        return albums && albums.length ?
            albums.map((item, index) => (
                <div key={index} className="col-md-4 mb-3">
                    <div className="card border-info">
                        <img src={item.album.cover_big} alt="" className="card-img-top"   />
                        <div className="card-body">
                            <span className="text-primary">Artist : {item.artist.name}</span>
                            <div className="card-title">
                                Album : {item.title}
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="links">
                                <Link to={`/details/${item.album.id}`} className='link'><i className="fas fa-play text-info"></i></Link>
                                <a onClick = {() => this.addToFavorites(item)} className='link'><i className="fas fa-star text-info"></i></a>

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
                        <Search searchAlbums={this.searchAlbums}/>
                        <div className="row">
                            {this.renderAlbum()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;