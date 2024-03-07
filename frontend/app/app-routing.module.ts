import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [{ path: 'expense', loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule),canActivate:[AuthGuard] }, 
{ path: 'income', loadChildren: () => import('./income/income.module').then(m => m.IncomeModule),canActivate:[AuthGuard] },
 { path: 'budget', loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule),canActivate:[AuthGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
   { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) }, 
    { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
     { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard] }, 
     { path: 'Goal', loadChildren: () => import('./goal/goal.module').then(m => m.GoalModule),canActivate:[AuthGuard] }, 
     { path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule),canActivate:[AuthGuard] },
{ path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
