import { useState } from "react";
import "./Dashboard.css";
//components
import OverviewChart from "./OverviewChart";
//data
import { summary, transactions } from "../data/financialData";
//types
import type { Period } from "../types/period";
import type { SummaryItem } from "../types/summary";
//icons
import { Wallet, TrendingUp, TrendingDown, DollarSign, Briefcase, Utensils, Zap, Car, Film, Coffee, Home, HeartPulse, Plane } from "lucide-react";



function Dashboard() {
  const [period, setPeriod] = useState<Period>("7d");
  const cards = summary[period];
  const currentTransactions = transactions[period];

  const summaryIcons = {
    balance: Wallet,
    income: TrendingUp,
    expenses: TrendingDown,
    cashflow: DollarSign,
  } as const;

  const categoryIcons = {
    Income: Briefcase,
    Food: Utensils,
    Utilities: Zap,
    Transport: Car,
    Entertainment: Film,
    Coffee: Coffee,
    Housing: Home,
    Health: HeartPulse,
    Leisure: Plane,
  } as const;

  {/* return --------------------------------------------------*/ }
  return (
    <section className="dashboard">
      {/* header --------------------------------------------------*/}
      <header className="dashboard__header mb-lg">
        <h1>Financial Dashboard</h1>
        <p>Monitor your income, expenses and overall financial performance.</p>
      </header>

      {/* section --------------------------------------------------*/}
      <section className="grid-4 gap mb-lg">
        {cards.map((item) => {
          const Icon = summaryIcons[item.id];
          const isExpense = item.trend.startsWith("-");

          return (
            <article key={item.id} className="card hover-lift hover-border">
              <div className="row justify-between align-center mb-sm">
                <span className="subtitle">{item.title}</span>
                <Icon size={20} />
              </div>

              <p>{item.value}</p>

              <small className={isExpense ? "amount-expense" : "amount-income"}>
                {isExpense ? "↓ " : "↑ "}
                {item.trend}
              </small>
            </article>
          );
        })}
      </section>

      {/* section --------------------------------------------------*/}
      <section className="card mb-lg">
        <h2 className="mb-sm">Monthly Financial Overview</h2>
        <div className="row mb-md">
          <button className={period === "7d" ? "btn" : "btn-outline"} onClick={() => setPeriod("7d")}>Last 7 days</button>
          <button className={period === "30d" ? "btn" : "btn-outline"} onClick={() => setPeriod("30d")}>Last 30 days</button>
          <button className={period === "12m" ? "btn" : "btn-outline"} onClick={() => setPeriod("12m")}>Last 12 months</button>
        </div>
        <OverviewChart period={period} />
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
            {currentTransactions.map((transaction) => (
              <tr key={`${transaction.date}-${transaction.description}`}>
                <td>{transaction.date}</td>
                <td><div className="row gap-sm">{(() => {
                    const Icon = categoryIcons[transaction.category as keyof typeof categoryIcons];

                    return Icon ? <Icon size={16} /> : null;
                  })()}
                  <span>{transaction.description}</span>
                </div></td>
                <td><span className="badge bg-accent center">{transaction.category}</span></td>
                <td className={transaction.amount.startsWith("-") ? "amount-expense" : "amount-income"}>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default Dashboard;