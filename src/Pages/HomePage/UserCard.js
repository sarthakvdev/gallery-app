import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: -2px 5px 16px -2px rgba(0, 0, 0, 0.2);
  width: 200px;
  padding: 5px;
`;

const Card = (user) => {
  return (
    <StyledCard className="cards">
      <p>
        <Link to={`/${user.id}/albums`}>{user.name}</Link>
      </p>
      <p>@{user.username}</p>
      <p>{user.email}</p>
      <p>Albums: {user.albumCount}</p>
    </StyledCard>
  );
};

export default Card;
