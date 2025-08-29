import "./App.css";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import IncomeCard from "./components/IncomeCard"; // fixed
import Header from "./components/Header";
import TransactionItem from "./components/TransactionItem";
import History from "./components/History"; // added
import Button from "./components/Button";


function App() {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">

        <Header />
        <Balance />

        <div className="grid grid-cols-2 gap-4 mb-8">
          <IncomeCard></IncomeCard>
          <ExpenseCard></ExpenseCard>
        </div>

        <div className="mb-8">
          <History />

          <div className="space-y-2">
            <TransactionItem />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Add new transaction
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text
              </label>
              <input
                type="text"
                placeholder="Enter text..."
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
                placeholder="Enter amount..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
            <Button text="Add Transaction" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
