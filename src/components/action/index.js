import axios from 'axios';

const API_KEY = '5e84c0f066msh0c9e33c9fd9cf07p1233a2jsnee4f36aa47a2';
const request = axios.create({
    baseURL : 'https://deezerdevs-deezer.p.rapidapi.com',
    timeout : 30000,
    headers : {'x-rapidapi-key': API_KEY}
});

export function getAlbums(search='eminem'){
    const albums = request.get(`search?q=${search}`)
        .then(Response => Response.data.data)
        .catch(error => console.log(error));
    return albums
}

export function getAlbum(id){
    const album = request.get(`album/${id}`)
        .then(Response => Response.data)
        .catch(error => console.log(error));
    return album;
}
export function getFavoritesAlbums(){
    const albums = localStorage.getItem('favorites');
    return albums;
}