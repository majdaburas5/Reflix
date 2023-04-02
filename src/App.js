import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Landing from "./components/Landing";
import Movie from "./components/Movie";
import { MOVIES } from "./data/filmsData";
import Accounts from "./components/Accounts";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import { USERS } from "./data/usersData";

function App() {
  const [movies, setMovies] = useState(MOVIES);

  const [users, setUsers] = useState(USERS);

  const setUserLoggedOut = (id) => {
    const newUser = [...users];
    const userId = newUser.findIndex((newUser) => id === newUser.id);
    newUser[userId].isLoggedIn = false;
    setUsers(newUser);
  };

  const [user, setUser] = useState(0);

  return (
    <Router>
      <div className="App">
        <Title />
        {users.map((u) =>
          u.isLoggedIn ? (
            <Navbar
              users={users}
              setUserLoggedOut={setUserLoggedOut}
              user={user}
            />
          ) : null
        )}
        <br />
        <Routes>
          <Route
            path="/"
            element={<Accounts users={users} setUsers={setUsers} />}
          />
          <Route
            path="/home/:userId"
            element={
              <Landing
                movies={movies}
                setMovies={setMovies}
                users={users}
                setUsers={setUsers}
                setUser={setUser}
              />
            }
          />
          <Route path="/movies/:id" element={<Movie getMovieData={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
