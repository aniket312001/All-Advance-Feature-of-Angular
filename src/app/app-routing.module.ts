import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from './active.guard';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { CompanyComponent } from './company/company.component';
import { DeactiveGuard } from './deactive.guard';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:"company",component:CompanyComponent},
  {path:"person",component:PersonComponent,canDeactivate:[DeactiveGuard]},
  {path:"book",component:BookComponent},
  {path:"admin",component:AdminComponent,canActivate:[ActiveGuard]},
  {path:"bookdetail",component:BookdetailComponent,outlet:"bookList"},
  {path:"",redirectTo:"book",pathMatch:"full"}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
