import "./App.css";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import IncomeCard from "./components/IncomeCard"; // fixed
import Header from "./components/Header";
import TransactionItem from "./components/TransactionItem";
import History from "./components/History"; // added
import Button from "./components/Button";
import SectionHeading from "./components/SectionHeading";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";


function App() {
  document.title = "Expense Tracker";
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">

        <Header />
        <Balance />

        <div className="grid grid-cols-2 gap-4 mb-8">
          <IncomeCard></IncomeCard>
          <ExpenseCard></ExpenseCard>
        </div>

        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
