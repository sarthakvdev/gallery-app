import { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from './Card';
import styled from 'styled-components';

// using styled-components to keep files minimum
const StyledUsers = styled.div`
    display: grid;
    width: 65%;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
    background: rgb(184, 222, 255);
    padding: 30px;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    border-radius: 10px;

    @media (max-width: 1030px) {
        width: 60%;
        grid-template-columns: auto auto;
    }

    @media (max-width: 720px) {
        width: 200px;
        grid-template-columns: auto;
    }
`;

const Users = (props) => {
    // init usersList with an empty array
    const [usersList, setUsersList] = useState([]);
    // fetching albums api for album number
    const [totalAlbums, setTotalAlbums] = useState([]);
    // user's albums count array
    let userAlbumsCount = [];

    useEffect(() => {
        const abortController = new AbortController();
        const signal = AbortController.signal;

        // gettig the users data
        Axios.get('https://jsonplaceholder.typicode.com/users', { signal: signal }).then(response => {
            setUsersList(response.data);
        });

        Axios.get('https://jsonplaceholder.typicode.com/albums', { signal: signal }).then(response => {
            setTotalAlbums(response.data);
        });

        // cleanup after this effect:
        return function cleanup() {
            abortController.abort();
        }
    }, [])

    // function to count number of albums of each user
    // could've hardcoded albums numbers (10) but NO!
    const numberOfAlbums = () => {
        totalAlbums.forEach(album => {
            if(userAlbumsCount.length === album.userId) {
                userAlbumsCount[album.userId-1]++;;
            } else {
                userAlbumsCount[album.userId-1] = 1;
            }
        });
    };
    numberOfAlbums();

    return(
        <div className="users">
            <StyledUsers className="user-list">
                {usersList.filter((val) => {
                    if(props.searchTerm === "") {
                        return val;
                    } else if(val.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                        return val;
                    }else {
                        return "";
                    }}).map((user, index) => <Card
                            key={index}
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            albumCount={userAlbumsCount[index]} 
                            />)
                }
            </StyledUsers>
        </div>
    );
}

export default Users;