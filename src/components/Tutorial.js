import React from "react";

const Tutorial = props => {
  const { title, speaker, children } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>
        <em>by {speaker}</em>
      </p>
      <p>{children}</p>
      <hr />
    </div>
  );
};

export default Tutorial;
