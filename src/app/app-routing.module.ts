import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddDataComponent } from './add-data/add-data.component';
import { AddProgramComponent } from './add-program/add-program.component';
import { CoCurricularComponent } from './co-curricular/co-curricular.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { DisciplinaryActionsComponent } from './disciplinary-actions/disciplinary-actions.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { ExtraCurricularComponent } from './extra-curricular/extra-curricular.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'AddStudent', component: AddDataComponent},
  {path: 'DisplayAll', component: DisplayAllComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Cocurricular', component: CoCurricularComponent},
  {path: 'DisciplinaryActions', component: DisciplinaryActionsComponent},
  {path: 'ExtraCurricular', component: ExtraCurricularComponent},
  {path: 'AddProgram', component: AddProgramComponent},
  {path: 'AddCourse', component: AddCourseComponent},
  {path: 'Update', component: UpdateComponent},
  {path: 'Delete', component: DeleteDataComponent},
  // Insert All paths above this comment
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
