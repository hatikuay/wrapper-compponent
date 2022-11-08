import React, {FC} from "react";
import "./Card.css";

type CardProps = {
  children: Array<JSX.Element> | JSX.Element;
  title: string;
  details:string | JSX.Element;
};

const Card:FC<CardProps> = (props:CardProps) => {
  return (
    <div className="card">
      <div className="card-details">
        <h2>{props.title}</h2>
        {props.details}
      </div>
      {props.children}
    </div>
  );
};

export default Card;
