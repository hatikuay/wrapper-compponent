import React, { FC } from "react";
import "./AnimalDetails.css";

function convertFood(food: string) {
  switch (food) {
    case "insects":
      return "🐜";
    case "meat":
      return "🍖";
    case "plants":
    default:
      return "🌱";
  }
}

type AnimalDetailsProps = {
  diet: Array<string>;
  scientificName: string;
};

const AnimalDetails: FC<AnimalDetailsProps> = (props: AnimalDetailsProps) => {
  return (
    <div className="details">
      <h4>Details:</h4>
      <div>Scientific Name: {props.scientificName}</div>
      <div>Diet: {props.diet.map((food) => convertFood(food)).join(" ")}</div>
    </div>
  );
};

export default AnimalDetails;
