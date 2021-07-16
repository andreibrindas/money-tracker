import React from "react";

const Transaction = ({ amount, details }) => {
  return (
    <div className="transaction">
      <p>{amount}</p>
      <p>{details}</p>
    </div>
  );
};

export default Transaction;
