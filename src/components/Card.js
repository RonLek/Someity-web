import React from "react";

const Card = ({ className, children }) => (
  <div
    className={`py-12 px-7 rounded-lg border border-solid border-gray-200 h-30 ${className}`}
    style={{
      boxShadow: "0 10px 28px rgba(0,0,0,.08)",
      height: "90%",
    }}
  >
    {children}
  </div>
);

export default Card;
