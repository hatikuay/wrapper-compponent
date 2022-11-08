import React from "react";
import AnimalDetails from "../AnimalDetails/AnimalDetails"
import Card from "../Card/Card"

type AnimalCardProps  = {
    diet: Array<string>;
    name: string;
    size: number;
    scientificName:string;
  };

const AnimalCard = (props:AnimalCardProps) => {
  return (
    <Card title="Animal" details={<AnimalDetails {...props}></AnimalDetails>}>
      <h3>{props.name}</h3>
      <div>{props.size}kg</div>
      <AnimalDetails diet={props.diet} scientificName={props.scientificName}></AnimalDetails>
    </Card>
  );
}

export default AnimalCard


