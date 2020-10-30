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
@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    UpdateComponent,
    DisplayAllComponent,
    DeleteDataComponent
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
    InsertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
