import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoachesComponent } from './signup/coaches/coaches.component';
import { UsersComponent } from './signup/users/users.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'signup/coaches',
    component:CoachesComponent
  },
  {
    path:'signup/users',
    component:UsersComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
