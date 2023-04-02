import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import Rent from "./Rent";
import { useState } from "react";

export default function Landing({
  movies,
  setMovies,
  users,
  setUsers,
  setUser,
}) {
  const { userId } = useParams();
  setUser(userId);
  const RENT_COST = 3;

  const handleMovieToggle = function (movieId) {
    let newMovies = [...movies];
    const movieIndex = newMovies.findIndex(
      (newMovie) => movieId === newMovie.id
    );

    let newUsers = [...users];

    newUsers.forEach((u) => {
      if (u.id == userId) {
        if (newMovies[movieIndex].isRented == true) {
          newMovies[movieIndex].isRented = false;
          setMovies(newMovies);
          u.budget += RENT_COST;
          return;
        } else {
          if (u.budget >= RENT_COST) {
            newMovies[movieIndex].isRented = true;
            setMovies(newMovies);
            u.budget -= RENT_COST;
            return;
          } else {
            alert(
              "there are insufficient funds, and not allow the rental to happen"
            );
            return;
          }
        }
      }
    });

    setUsers(newUsers);
  };

  const user = users.find((u) => u.id == userId);

  const checkIsRented = function () {
    let flag = 0;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].isRented === true) flag++;
    }
    if (flag === 0) return false;
    return true;
  };
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const search = function () {
    return movies.filter((m) =>
      m.title.toLowerCase().includes(searchField.toLowerCase())
    );
  };
  const displaySearchResult = function () {
    let searchedResult = search();
    let result = [];
    console.log(searchedResult);
    searchedResult.forEach((r) => {
      result.push(
        <div>
          <Link to={`/movies/${r.id}`}>
            <img src={r.img} variant="top" width="250px" height="250px" />
          </Link>
          {r.isRented ? (
            <i
              class="fa-sharp fa-solid fa-minus minus"
              onClick={() => handleMovieToggle(r.id)}
            ></i>
          ) : (
            <i
              class="fa-solid fa-plus plus"
              onClick={() => handleMovieToggle(r.id)}
            ></i>
          )}
        </div>
      );
    });
    console.log(result);
    return result;
  };
  return (
    <div>
      <img src={user.img} width="80px" height="80px" />
      <h2 className="f2">Search your movie</h2>
      <input
        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
        type="search"
        value={searchField}
        placeholder="Search Movie"
        onChange={handleChange}
      />
      <div className="budget">Budget : {user.budget} $</div>
      {checkIsRented() ? <Rent /> : null}
      <br />
      <br />
      <br />
      <div>Catalog: </div>
      <br />
      <div className="movies-cards" style={{ width: "18rem" }}>
        {displaySearchResult()}
      </div>
    </div>
  );
}
