import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAlbum = styled.div`
    background: #f5f5f5;
    border-radius: 10px;
    border: 1px solid black;
    width: 90%;
    padding: 5px;
    margin: 20px;
    text-align: left;

    @media (max-width: 900px) {
        width: 90%;
        margin: 10px;
    }
`;

const AlbumCard = (album) => {
    return(
        <StyledAlbum>
            <h3><Link to={`/albums/${album.id}`}>{album.title}</Link></h3>
            <p>Albums: 50</p>
        </StyledAlbum>
    )
}

export default AlbumCard;