import { useState } from "react";
import UserList from "./UsersList";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="App">
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <UserList searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;