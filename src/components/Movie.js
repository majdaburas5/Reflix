import React from "react";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";

export default function Movie({ getMovieData }) {
  const { id } = useParams();
  const movie = getMovieData.find((m) => m.id == id);
  const { title, year, img, descrShort } = movie;
  return (
    <div className="movies-description">
      <h1>
        {title}({year})
      </h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} width="250px" height="250px" />
      </Card>
      <p>{descrShort}</p>
    </div>
  );
}
