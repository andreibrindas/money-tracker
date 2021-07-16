import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Totals from "./components/Totals";
import Transactions from "./components/Transactions";

function App() {
  const [currency, setCurrency] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getCurrency = async () => {
      const currencyFromServer = await fetchCurrency();
      setCurrency(currencyFromServer);
    };
    getCurrency();

    const getTransactions = async () => {
      const transactionsFromServer = await fetchTransactions();
      setTransactions(transactionsFromServer);
    };
    getTransactions();
  }, []);

  // Fetch Currency from database
  const fetchCurrency = async () => {
    const res = await fetch("http://localhost:5000/currency");
    const data = await res.json();

    return data;
  };

  const fetchTransactions = async () => {
    const res = await fetch("http://localhost:5000/transactions");
    const data = await res.json();

    console.log(data);
    return data;
  };

  return (
    <div className="App container">
      <Header />
      <Totals currency={currency} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
