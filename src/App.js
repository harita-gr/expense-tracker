import { useState } from "react";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";
import NewTransaction from "./components/NewTransaction";
import ExpenseSheet from "./components/ExpenseSheet";
import { Typography, Box } from "@mui/material";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Books", amount: -20 },
    { id: 2, text: "Flowers", amount: -10 },
    { id: 3, text: "Salary", amount: 2000 },
    { id: 4, text: "Groceries", amount: -40 },
  ]);

  const addTransactions = (transaction) => {
    setTransactions((transactions) => [transactions, ...transaction]);
  };

  const deleteTransactions = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="App">
      <Typography mb="20px">Expense Tracker</Typography>
      <Box>
        <Balance transactions={transactions} />
        <ExpenseSheet transactions={transactions} />
        <Transactions
          transactions={transactions}
          deleteTransactions={deleteTransactions}
        />
        <NewTransaction addTransactions={addTransactions} />
      </Box>
    </div>
  );
}

export default App;
