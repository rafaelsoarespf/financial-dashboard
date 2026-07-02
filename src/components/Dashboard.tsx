import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <header className="dashboard__header mb-lg">
        <h1>Financial Dashboard</h1>
        <p>Monitor your income, expenses and overall financial performance.</p>
      </header>

      <section className="grid-4 gap mb-lg">
        <article className="card hover-lift hover-border">
          <span className="subtitle">Total Balance</span>
          <p>$12,450.00</p>
          <small className="text-accent">↑ +12.4% from last month</small>
        </article>

        <article className="card hover-lift hover-border">
          <span className="subtitle">Monthly Income</span>
          <p>$5,300.00</p>
          <small className="text-accent">↑ +8.1% this month</small>
        </article>

        <article className="card hover-lift hover-border">
          <span className="subtitle">Monthly Expenses</span>
          <p>$2,100.00</p>
          <small>↓ -4.8% this month</small>
        </article>

        <article className="card hover-lift hover-border">
          <span className="subtitle">Net Cash Flow</span>
          <p>$3,200.00</p>
          <small className="text-accent">Positive balance</small>
        </article>
      </section>

      <section className="card mb-lg">
        <h2>Monthly Financial Overview</h2>
        <p>Financial charts will be displayed here.</p>
      </section>

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
            <tr>
              <td>Jul 02</td>
              <td>Salary</td>
              <td>Income</td>
              <td>$5,300.00</td>
            </tr>

            <tr>
              <td>Jul 01</td>
              <td>Groceries</td>
              <td>Food</td>
              <td>-$120.00</td>
            </tr>

            <tr>
              <td>Jun 30</td>
              <td>Internet</td>
              <td>Utilities</td>
              <td>-$80.00</td>
            </tr>

            <tr>
              <td>Jun 29</td>
              <td>Freelance Project</td>
              <td>Income</td>
              <td>$850.00</td>
            </tr>

            <tr>
              <td>Jun 28</td>
              <td>Electric Bill</td>
              <td>Utilities</td>
              <td>-$140.00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default Dashboard;