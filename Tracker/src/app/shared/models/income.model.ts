export interface Income{
    incomeID: number;
    userID: number;
    category: string;
    paymentMethod: string;
    amount: number;
    date: Date;
    isRecurring: boolean;
    recurringFrequency: string;
  
  }