import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmpAddEditComponent } from './employee/emp-add-edit/emp-add-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpAddEditComponent,
    EmpListComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MaterialModule,
   ReactiveFormsModule,
   HttpClientModule,
   ToastrModule,
   MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatDialogModule,
   MatFormFieldModule,
   MatInputModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatRadioModule,
   MatSelectModule,
   HttpClientModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
