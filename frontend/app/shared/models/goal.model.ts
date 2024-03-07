export interface Goal {
    goalID: number;
    UserID: number;
    goalName: string;
    goalStart: Date; // Use Date for nullable DateTime?
    goalComplete: Date; // Use Date for nullable DateTime?
    targetAmount: number;
    currentAmount: number;
   }
   