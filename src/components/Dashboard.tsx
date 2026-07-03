//css ------------------------------------------------------------
import "./Dashboard.css";
//data -----------------------------------------------------------
import { summary, transactions } from "../data/financialData";
//components -----------------------------------------------------
import OverviewChart from "./OverviewChart";


function Dashboard() {
  return (
    <section className="dashboard">
      {/* header --------------------------------------------------*/}
      <header className="dashboard__header mb-lg">
        <h1>Financial Dashboard</h1>
        <p>Monitor your income, expenses and overall financial performance.</p>
      </header>

      {/* section --------------------------------------------------*/}
      <section className="grid-4 gap mb-lg">
        {summary.map((item) => (
          //article
          <article key={item.title} className="card hover-lift hover-border">
            <span className="subtitle">{item.title}</span>
            <p>{item.value}</p>

            <small className={item.trend.startsWith("-") ? "" : "text-accent"}>
              {item.trend.startsWith("-") ? "↓ " : "↑ "} {item.trend}
            </small>

          </article>
        ))}
      </section>

      {/* section --------------------------------------------------*/}
      <section className="card mb-lg">
        <h2>Monthly Financial Overview</h2>
        <OverviewChart />
      </section>

      {/* section --------------------------------------------------*/}
      <section className="card">
        <h2>Latest Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={`${transaction.date}-${transaction.description}`}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default Dashboard;