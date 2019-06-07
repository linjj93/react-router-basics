import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function Home(props) {
  console.log(props);
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Faq() {
  return <h1>FAQ</h1>;
}

function Content({ text }) {
  return <h1>{text}</h1>;
}

function Movie({ match }) {
  const movieId = match.params.movieId;
  const movies = [{ id: 1, title: "Endgame" }, { id: 2, title: "Avengers" }];
  const movie = movies.find(m => m.id === Number(movieId));

  return <h1>{movie && movie.title}</h1>; //render only if there is title
}

function App() {
  const movieId = 2;
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}`}>Movie</Link>
          </li>
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route
            path="/content"
            render={() => <Content text="This is some text" />}
          />
          <Route path="/movies/:movieId" component={Movie} />
        </main>
      </div>
    </Router>
  );
}

export default App;
