import React from "react";
import "./FriendCard.css";
const FriendCard = props => (
  <div className="card" >
    <div className="img-container" onClick={() => props.activation(props.id)}>
      <img alt={props.name} src={process.env.PUBLIC_URL+props.image}  />
    </div>
  </div>
);

export default FriendCard;
