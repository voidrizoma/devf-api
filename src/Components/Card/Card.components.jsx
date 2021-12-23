import React from "react";
import { CardContainer, Message } from "./Card.styled";

export default function Card({
  title,
  warningMessage,
  imagen,
  description,
  alias,
}) {
  return (
    <CardContainer>
      <img src={imagen} alt={alias} />
      <Message> {warningMessage} </Message>
      <p>
        {" "}
        <span>Alias:</span> {alias}{" "}
      </p>
      <p>
        {" "}
        <span>Name:</span> {title}{" "}
      </p>
      <p>
        {" "}
        <span>Description:</span> {description}{" "}
      </p>
    </CardContainer>
  );
}
