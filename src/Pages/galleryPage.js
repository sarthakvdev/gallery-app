import { useEffect, useState } from 'react';
import Axios from 'axios';
import GalleryCard from '../components/GalleryCard';
import styled from 'styled-components';

const StyledGallery = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px;
    background: rgb(184, 222, 255);
    padding: 30px;
    align-items: center;
    margin: 20px auto;
    justify-content: center;
    border-radius: 10px;
    text-align: center;

    @media (max-width: 840px) {
        grid-template-columns: auto auto auto;
        grid-gap: 30px;
    }

    @media (max-width: 590px) {
        width: 60%;
        grid-template-columns: auto;
        grid-gap: 20px;
    }
`;

const GalleryPage = ({ match }) => {
    const {
        params: { albumId },
    } = match;

    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = AbortController.signal;

        // gettig the users data for using his name
        Axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`, { signal: signal })
        .then(response => {
            setPictures(response.data);
        });

        // cleanup after this effect:
        return function cleanup() {
            abortController.abort();
        };
    });

    return(
        <StyledGallery>
            { pictures.map((picture, index) => <GalleryCard
                    key={index+1}
                    id={picture.id}
                    title={picture.title}
                    url={picture.url}
                    thumbnailUrl={picture.thumbnailUrl} 
                />)
            }
        </StyledGallery>
    )
}

export default GalleryPage;