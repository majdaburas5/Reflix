import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router";

export default function Navbar({ users, setUserLoggedOut, user }) {
  return (
    <div className="nav">
      <Link to={`/home/${user}`} className="nav">
        <h2>Catalog</h2>
      </Link>
      {users.map((u) =>
        u.isLoggedIn ? (
          <Link to="/" className="nav" onClick={() => setUserLoggedOut(u.id)}>
            <h2>Logout</h2>
          </Link>
        ) : null
      )}
    </div>
  );
}
