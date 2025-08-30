import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { getIncome } from "../utils/getIncome";
import { getExpense } from "../utils/getExpense";


const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const income = getIncome(transactions);
  const expense = getExpense(transactions)>0 ? getExpense(transactions) : getExpense(transactions)*-1;

  console.log(income, expense);

  return (
        <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-600 mb-2">YOUR BALANCE</p>
            <p className="text-4xl font-bold text-gray-800">Rs. {income-expense}</p>
        </div>
  )
}

export default Balance;