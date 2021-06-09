import { useState, useEffect } from 'react';
import Axios from 'axios';
import AlbumCard from '../components/AlbumCard';
import styled from 'styled-components';

const StyledAlbums = styled.div`
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5px;

    @media (max-width: 525px) {
        grid-template-columns: auto;
    }
`;

const AlbumPage = ({ match }) => {
    const {
        params: { userId },
    } = match;

    const [user, setUser] = useState({});
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = AbortController.signal;

        // gettig the users data for using his name
        Axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal: signal })
        .then(response => {
            setUser(response.data);
        });

        // cleanup after this effect:
        return function cleanup() {
            abortController.abort();
        };
    });

    useEffect(() => {
        const abortController = new AbortController();
        const signal = AbortController.signal;

        // Fetching albums of our selected User
        Axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`, { signal: signal})
        .then(response => {
            setAlbums(response.data);
        });

        // cleanup after this effect:
        return function cleanup() {
            abortController.abort();
        };
    })
    
    return(
        <StyledAlbums>
            <h1>Album's of {user.name}</h1>
            { albums.map((album, index) => <AlbumCard
                key={index}
                id={album.id}
                title={album.title} />
            )}
        </StyledAlbums>
    );
};

export default AlbumPage;