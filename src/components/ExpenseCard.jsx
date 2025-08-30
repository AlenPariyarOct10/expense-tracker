import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { getExpense } from "../utils/getExpense";

const ExpenseCard = () => {
  const {transactions} = useContext(GlobalContext);
  const expense = getExpense(transactions);
  return (
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-gray-600 mb-1">EXPENSE</p>
                <p className="text-xl font-bold text-red-500">Rs. {(expense>0)? expense : expense*-1}</p>
            </div>
  )
}

export default ExpenseCard;