export type SummaryId = | "balance" | "income" | "expenses" | "cashflow";

export interface SummaryItem {
  id: SummaryId;
  title: string;
  value: string;
  trend: string;
}