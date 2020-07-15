import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { NotFoundComponent } from './not-found/not-found.component'


let routes : Routes = [
  { path: "Dashboard", component: DashboardComponent},
  { path: "Add", component: AddComponent},
  { path: "Delete/:id", component: DeleteComponent},
  { path: "Update/:id", component: UpdateComponent},
  { path: "", redirectTo: '/Dashboard', pathMatch:'full'},
  { path: "**", component: NotFoundComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
