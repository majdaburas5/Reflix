import React from "react";
import { Link } from "react-router-dom";

export default function Accounts({ users, setUsers }) {
  const setUserLoggedIn = (id) => {
    const newUser = [...users];
    const userId = newUser.findIndex((newUser) => id === newUser.id);
    newUser[userId].isLoggedIn = true;
    setUsers(newUser);
  };
  return (
    <div className="landing-page">
      <br />
      <h1>WHO'S WATCHING ?</h1>
      <br />
      <div className="user-cards">
        {users.map((i) => (
          <div>
            <div onClick={() => setUserLoggedIn(i.id)}>
              <Link to={`/home/${i.id}`}>
                <img src={i.img} width="150px" height="150px" />
              </Link>
              <h3>{i.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
