const Totals = ({ currency }) => {
  return (
    <div className="totals">
      <h2>
        Totals: <span className="totals--content">2000 {currency}</span>
      </h2>
    </div>
  );
};

export default Totals;
