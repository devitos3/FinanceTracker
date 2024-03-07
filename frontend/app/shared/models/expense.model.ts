export interface Expense{
  expenseID: number;
  userID: number;
  category: string;
  paymentMethod: string;
  amount: number;
  date: Date;
  isRecurring: boolean;
  recurringFrequency: string;

}