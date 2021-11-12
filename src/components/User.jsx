import React from "react";

function User({ name, avatar }) {
  return (
    <div className="user">
      <img src={avatar} alt={name} className="user-avatar" />
      <span className="user-name">{name}</span>
    </div>
  );
}

export default React.memo(User);
