import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage/index";
import AlbumPage from "./Pages/AlbumPage/index";
import GalleryPage from "./Pages/GalleryPage/index";

// root component
const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/:userId/albums" component={AlbumPage} />
        <Route path="/albums/:albumId" component={GalleryPage} />
      </Router>
    </div>
  );
};

export default App;
