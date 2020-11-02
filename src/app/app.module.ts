import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { UpdateComponent } from './update/update.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { DeleteDataComponent } from './delete-data/delete-data.component'
import { AddDataComponent } from './add-data/add-data.component';
import { InsertService } from './_services/insert.service';
import { GetAllDataService } from './_services';
import { NotFoundComponent } from './404/404.component';
import { HomeComponent } from './home/home.component';
import { DisciplinaryActionsComponent } from './disciplinary-actions/disciplinary-actions.component';
import { CoCurricularComponent } from './co-curricular/co-curricular.component';
import { ExtraCurricularComponent } from './extra-curricular/extra-curricular.component';
import { AddProgramComponent } from './add-program/add-program.component';
import { AddCourseComponent } from './add-course/add-course.component';
@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    UpdateComponent,
    DisplayAllComponent,
    DeleteDataComponent,
    NotFoundComponent,
    HomeComponent,
    DisciplinaryActionsComponent,
    CoCurricularComponent,
    ExtraCurricularComponent,
    AddProgramComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [
    InsertService,
    GetAllDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
