import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { getIncome } from "../utils/getIncome";

const IncomeCard = () => {

  const {transactions} = useContext(GlobalContext);
  
  const income = getIncome(transactions);

  return (
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-gray-600 mb-1">INCOME</p>
                <p className="text-xl font-bold text-green-500">Rs. {income}</p>
            </div>
  )
}

export default IncomeCard;