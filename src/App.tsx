import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import HomeRoute from "./component/HomeRoute";
import ListStoriesRoute from "./component/ListStoriesRoute";
import ViewStoryRoute from "./component/ViewStoryRoute";
import CreateStoryRoute from "./component/CreateStoryRoute";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          {" "}
          <a href="/"> GC Mad Libs</a>{" "}
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/stories">See Saved Stories</a>
            </li>
            <li>
              <a href="/create-story">Create a New Story</a>
            </li>
          </ul>
        </nav>
        
      </header>
      <Router>
        <Link to="/"></Link>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/stories" element={<ListStoriesRoute />} />
          <Route path="/stories/:id" element={<ViewStoryRoute />} />
          <Route path="/create-story" element={<CreateStoryRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
