import styled from 'styled-components';

const StyledGalleryCard = styled.div`
    align-items: center;
    justify-items: center;
`;

const Image = styled.img`
    margin: 0 auto;
`;

const GalleryCard = (pic) => {
    return(
        <StyledGalleryCard>
            <a href={pic.url}><Image src={pic.thumbnailUrl} alt={`${pic.id}`} /></a>
            <p>{pic.title}</p>
        </StyledGalleryCard>
    )
}

export default GalleryCard;