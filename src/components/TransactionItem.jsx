import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const TransactionItem = ({ transaction }) => {
  const isPositive = transaction.amount >= 1;
  const {removeTransaction} = useContext(GlobalContext);


  return (
    <div
      className={`flex justify-between items-center py-3 px-4 bg-white border border-gray-200 rounded-lg border-r-4 ${
        isPositive ? "border-r-green-500" : "border-r-red-500"
      }`}
    >
      <span className={isPositive ? "text-green-700" : "text-red-700"}>
        {transaction.text}
      </span>
      <span className="font-semibold text-gray-800">{transaction.amount}
          <button
            onClick={() => removeTransaction(transaction.id)} 
            className="ml-2 px-2 py-0.5 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
            >x</button>
        </span>
      
    </div>
  );
};

export default TransactionItem;
