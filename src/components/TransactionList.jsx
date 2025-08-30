import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import TransactionItem from "./TransactionItem";
import GlobalContext from "../context/GlobalContext";

function TransactionList() {

    const {transactions} = useContext(GlobalContext);

    return (
                <div className="mb-8">
                  <SectionHeading text="History" />
        
                  <div className="space-y-2">
                    {
                        transactions.map((item)=>(<TransactionItem transaction = {item} key={item.id} />))
                    }
                    
                  </div>
                </div>
    );
}

export default TransactionList;