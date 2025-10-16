import React from "react";

const Card = ({ title, children, footer, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {title ? (
        <div className="card-header">
          <h3>{title}</h3>
        </div>
      ) : null}
      <div className="card-body">{children}</div>
      {footer ? <div className="card-footer">{footer}</div> : null}
    </div>
  );
};

export default Card;
