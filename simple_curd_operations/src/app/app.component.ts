import { DialogRef } from '@angular/cdk/dialog';
import { EmpAddEditComponent } from './employee/emp-add-edit/emp-add-edit.component';
import { Component, OnInit , ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from './services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple_curd_operations';
 
}
