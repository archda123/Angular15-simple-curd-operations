import { DialogRef } from '@angular/cdk/dialog';
import { EmpAddEditComponent } from './employee/emp-add-edit/emp-add-edit.component';
import { Component, OnInit , ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from './services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreservicesService } from './core/coreservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Simple_curd_operations';

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'dob', 'gender', 'education', 'company', 'experience', 'package' , 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog:MatDialog, private empserv:EmployeeService , private core:CoreservicesService , private router:Router){}
  ngOnInit(): void {
    this.getEmployeedata();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  employeeTable(){
    this.router.navigate(['Employee']);
  }

  openAddEditempForm(){
    const DialogRef=this._dialog.open(EmpAddEditComponent);
    DialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmployeedata();
        }
      }
    })
  }

  getEmployeedata(){
    this.empserv.getemployeeList().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  openEditempForm(data:any){
    const DialogRef=this._dialog.open(EmpAddEditComponent,{data});
    DialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmployeedata();
        }
      }
    })
  }
  deleteEmployee(id:number){
    this.empserv.deleteemployee(id).subscribe({
      next:(res)=>{
        this.core.openSnackBar("Employee deleted successfully" , 'Cancel');
        this.getEmployeedata();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
