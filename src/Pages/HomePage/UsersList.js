import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import styled from 'styled-components';
import { getUser } from '../../redux/ducks/user';

// using styled-components to keep files minimum
const StyledUsers = styled.div`
    display: grid;
    width: 65%;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
    background: rgb(184, 222, 255);
    padding: 30px;
    align-items: center;
    margin: 20px auto 20px auto;
    justify-content: center;
    border-radius: 15px;

    @media (max-width: 1030px) {
        width: 60%;
        grid-template-columns: auto auto;
    }

    @media (max-width: 720px) {
        width: 200px;
        grid-template-columns: auto;
    }
`;

const UserList = (props) => {
    const dispatch = useDispatch();

    // dispatching getUser() action, it will be heard by watcher
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const userList = useSelector(store => store.user.user);

    return(
        <div className="users">
            <StyledUsers className="user-list">
                {userList ? (userList.filter((val) => {
                    if(props.searchTerm === "") {
                        return val;
                    } else if(val.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                        return val;
                    }else {
                        return "";
                    }}).map((user, index) => <UserCard
                            key={index}
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            />)) : ''
                }
            </StyledUsers>
        </div>
    );
}

export default UserList;