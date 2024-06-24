import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './employee/emplist/emplist.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'employeelist', component: EmplistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
