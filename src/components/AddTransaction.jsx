import React, { useContext, useState } from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import GlobalContext from "../context/GlobalContext";


function AddTransaction() {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(text === "" || amount === 0){return;}
        const newTransaction = {id: Date.now(), text, amount};
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }
    return (
        <div>
        <SectionHeading text="Enter Transaction" />
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <p className="text-xs text-gray-500 mb-2">
                (negative - expense, positive - income)
              </p>
              <input
                type="number"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                placeholder="Enter amount..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
            <Button text="Add Transaction" />
          </form>
          </div>
    );
}

export default AddTransaction;