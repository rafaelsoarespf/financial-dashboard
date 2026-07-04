import type { Period } from "../types/period";
import type { SummaryItem } from "../types/summary";

export const summary: Record<Period, SummaryItem[]> = {
  "7d": [
    {
      id: "balance",
      title: "Total Balance",
      value: "$2,450.00",
      trend: "+4.2% this week",
    },
    {
      id: "income",
      title: "Weekly Income",
      value: "$1,200.00",
      trend: "+6.1% this week",
    },
    {
      id: "expenses",
      title: "Weekly Expenses",
      value: "$850.00",
      trend: "-2.8% this week",
    },
    {
      id: "cashflow",
      title: "Net Cash Flow",
      value: "$350.00",
      trend: "Positive balance",
    },
  ],

  "30d": [
    {
      id: "balance",
      title: "Total Balance",
      value: "$8,900.00",
      trend: "+8.7% this month",
    },
    {
      id: "income",
      title: "Monthly Income",
      value: "$5,300.00",
      trend: "+8.1% this month",
    },
    {
      id: "expenses",
      title: "Monthly Expenses",
      value: "$2,100.00",
      trend: "-4.8% this month",
    },
    {
      id: "cashflow",
      title: "Net Cash Flow",
      value: "$3,200.00",
      trend: "Positive balance",
    },
  ],

  "12m": [
    {
      id: "balance",
      title: "Total Balance",
      value: "$12,450.00",
      trend: "+12.4% from last year",
    },
    {
      id: "income",
      title: "Annual Income",
      value: "$62,400.00",
      trend: "+10.5% this year",
    },
    {
      id: "expenses",
      title: "Annual Expenses",
      value: "$34,800.00",
      trend: "-3.1% this year",
    },
    {
      id: "cashflow",
      title: "Net Cash Flow",
      value: "$27,600.00",
      trend: "Positive balance",
    },
  ],
};

export const chartData = {
  "7d": [
    { label: "Mon", income: 900, expenses: 350 },
    { label: "Tue", income: 750, expenses: 420 },
    { label: "Wed", income: 1100, expenses: 600 },
    { label: "Thu", income: 800, expenses: 300 },
    { label: "Fri", income: 1300, expenses: 700 },
    { label: "Sat", income: 600, expenses: 450 },
    { label: "Sun", income: 950, expenses: 500 },
  ],

  "30d": [
    { label: "Week 1", income: 4200, expenses: 2200 },
    { label: "Week 2", income: 3900, expenses: 1800 },
    { label: "Week 3", income: 4600, expenses: 2500 },
    { label: "Week 4", income: 5100, expenses: 2900 },
  ],

  "12m": [
    { label: "Jan", income: 4000, expenses: 2400 },
    { label: "Feb", income: 3000, expenses: 1398 },
    { label: "Mar", income: 5200, expenses: 2800 },
    { label: "Apr", income: 4700, expenses: 3100 },
    { label: "May", income: 6100, expenses: 3500 },
    { label: "Jun", income: 5300, expenses: 2100 },
  ],
};

export const transactions = {
  "7d": [
    {
      date: "Jul 06",
      description: "Coffee Shop",
      category: "Food",
      amount: "-$8.50",
    },
    {
      date: "Jul 05",
      description: "Salary",
      category: "Income",
      amount: "$1,200.00",
    },
    {
      date: "Jul 04",
      description: "Netflix",
      category: "Entertainment",
      amount: "-$15.99",
    },
    {
      date: "Jul 03",
      description: "Gas Station",
      category: "Transport",
      amount: "-$52.00",
    },
    {
      date: "Jul 02",
      description: "Freelance",
      category: "Income",
      amount: "$450.00",
    },
  ],

  "30d": [
    {
      date: "Jul 02",
      description: "Salary",
      category: "Income",
      amount: "$5,300.00",
    },
    {
      date: "Jul 01",
      description: "Groceries",
      category: "Food",
      amount: "-$120.00",
    },
    {
      date: "Jun 30",
      description: "Internet",
      category: "Utilities",
      amount: "-$80.00",
    },
    {
      date: "Jun 29",
      description: "Freelance Project",
      category: "Income",
      amount: "$850.00",
    },
    {
      date: "Jun 28",
      description: "Electric Bill",
      category: "Utilities",
      amount: "-$140.00",
    },
  ],

  "12m": [
    {
      date: "Dec",
      description: "Annual Salary",
      category: "Income",
      amount: "$62,400.00",
    },
    {
      date: "Nov",
      description: "Rent",
      category: "Housing",
      amount: "-$14,400.00",
    },
    {
      date: "Oct",
      description: "Travel",
      category: "Leisure",
      amount: "-$2,500.00",
    },
    {
      date: "Sep",
      description: "Freelance Projects",
      category: "Income",
      amount: "$9,800.00",
    },
    {
      date: "Aug",
      description: "Insurance",
      category: "Health",
      amount: "-$1,200.00",
    },
  ],
};