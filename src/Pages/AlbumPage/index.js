import { useEffect } from "react";
import AlbumCard from "./AlbumCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum } from "../../redux/ducks/album";

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

  const dispatch = useDispatch();

  // storing user id in store
  useEffect(() => {
    dispatch(getAlbum(userId));
  }, [dispatch, userId]);

  // importing data from the store
  const albums = useSelector((store) => store.album.album);
  const user = useSelector((store) => store.user.user);

  const userName = user[userId - 1].name;

  return (
    <StyledAlbums>
      <h2>Albums of {userName}</h2>
      {albums
        ? albums.map((album, index) => (
            <AlbumCard key={index} id={album.id} title={album.title} />
          ))
        : undefined}
    </StyledAlbums>
  );
};

export default AlbumPage;
