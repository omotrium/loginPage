import {Routes} from '@angular/router'
import {RegisterComponent} from './register/register.component';
import {QuizComponent} from './quiz/quiz.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ResultComponent} from './result/result.component';
import { DashboardComponent } from './dashboard/dashboard.component';



export const appRoutes : Routes = [
    {path:'register',component:RegisterComponent},
    {path: 'quiz', component:QuizComponent},
    {path: 'result', component:ResultComponent},
    {path: 'navbar', component:NavbarComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: '', redirectTo:'/register', pathMatch:'full'}


];