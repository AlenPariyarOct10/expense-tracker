import React from "react";

const ExpenseCard = () => {
  return (
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-gray-600 mb-1">EXPENSE</p>
                <p className="text-xl font-bold text-red-500">$240.00</p>
            </div>
  )
}

export default ExpenseCard;