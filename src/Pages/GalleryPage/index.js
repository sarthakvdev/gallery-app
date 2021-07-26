import { useEffect } from 'react';
import GalleryCard from './GalleryCard';
import styled from 'styled-components';
// react-redux hooks
import { useDispatch, useSelector } from 'react-redux';
// action
import { getGallery } from "../../redux/ducks/gallery";

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

    const dispatch = useDispatch();
    
    // dispatching getGallery action (with albumId)
    useEffect(() => {
        dispatch(getGallery(albumId));
    }, [dispatch, albumId]);
    // importing gallery pictures
    const pictures = useSelector((store) => store.gallery.gallery);
    return(
        <StyledGallery>
            { pictures ? pictures.map((picture, index) => <GalleryCard
                    key={index+1}
                    id={picture.id}
                    title={picture.title}
                    url={picture.url}
                    thumbnailUrl={picture.thumbnailUrl} 
                />) : ""
            }
        </StyledGallery>
    )
}

export default GalleryPage;