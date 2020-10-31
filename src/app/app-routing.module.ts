import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { AddDataComponent } from './add-data/add-data.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'AddStudent', component: AddDataComponent},
  {path: 'DisplayAll', component: DisplayAllComponent},
  {path: 'home', component: HomeComponent},
  // Insert All paths above this comment
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
