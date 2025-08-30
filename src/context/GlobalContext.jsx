import React, { createContext, useState } from "react";

const initialState = [

];

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialState);

  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  function removeTransaction(id) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
