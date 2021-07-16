import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          amount={transaction.amount}
          details={transaction.details}
        />
      ))}
    </div>
  );
};

export default Transactions;
