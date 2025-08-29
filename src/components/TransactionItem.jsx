import React from "react";

const TransactionItem = () => {
  return (
                <div className="flex justify-between items-center py-3 px-4 bg-white border border-gray-200 rounded-lg border-r-4 border-r-green-500">
                    <span className="text-gray-700">Cash</span>
                    <span className="font-semibold text-gray-800">+500</span>
                </div>
  )
}

export default TransactionItem;