import React from "react";
import { MOVIES } from "../data/filmsData";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Rent() {
  return (
    <div>
      Rented:
      <br />
      <br />
      <div className="movies-cards">
        {MOVIES.map((m) => (
          <>
            {m.isRented ? (
              <>
                <Link to={`/movies/${m.id}`}>
                  <img src={m.img} variant="top" width="250px" height="250px" />
                </Link>
              </>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}
