import { useState } from "react";
import "./Dashboard.css";
import { summary, transactions } from "../data/financialData";
import OverviewChart from "./OverviewChart";
import type {Period} from "../types/period"


function Dashboard() {
  const [period, setPeriod] = useState<Period>("7d");


  {/* return --------------------------------------------------*/}
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
        <h2 className="mb-sm">Monthly Financial Overview</h2>
        <div className="row mb-md">
          <button className={period === "7d" ? "btn" : "btn-outline"} onClick={() => setPeriod("7d")}>Last 7 days</button>
          <button className={period === "30d" ? "btn" : "btn-outline"} onClick={() => setPeriod("30d")}>Last 30 days</button>
          <button className={period === "12m" ? "btn" : "btn-outline"} onClick={() => setPeriod("12m")}>Last 12 months</button>
        </div>
        <OverviewChart period={period}/>
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