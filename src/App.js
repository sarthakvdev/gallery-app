import "./App.css";
import Users from "./components/Users";
import AlbumPage from "./Pages/albumPage";
import GalleryPage from "./Pages/galleryPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

// homepage component '/'
const Homepage = () => {
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
      <Users searchTerm={searchTerm} />
    </div>
  );
};

// root component
const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/:userId/albums" component={AlbumPage} />
        <Route path="/albums/:albumId" component={GalleryPage} />
      </Router>
    </div>
  );
};

export default App;
