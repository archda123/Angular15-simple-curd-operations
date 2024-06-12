import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';
import { CoreservicesService } from '../../core/coreservices.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  
  empForm:FormGroup;

  education:string[]=['Matric','Diploma','Intermediate','Graduation','Post Graduation'];

  constructor(private _form:FormBuilder , private empService:EmployeeService , private dialogRef:MatDialogRef<EmpAddEditComponent>,@Inject(MAT_DIALOG_DATA) public data:any
,private core:CoreservicesService){
    this.empForm=this._form.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:''
    })
  }
  ngOnInit() {
    this.empForm.patchValue(this.data);
  }
  onsubmit(){
    console.log(this.empForm.value);
    if(this.empForm.valid){
      if(this.data){
        this.empService.updateemployeeById(this.data.id,this.empForm.value).subscribe({
          next:(res)=>{
            this.core.openSnackBar('Updated Succesfully', 'Cancel');
            this.dialogRef.close(true);
          },
          error:(err)=>{
            this.core.openSnackBar("Error while Updating employee",'Cancel')
          }
        })
      }else{
        this.empService.addEmployee(this.empForm.value).subscribe({
          next:(res)=>{
            this.core.openSnackBar("Employee added successfully", 'Cancel');
            this.dialogRef.close(true);
                    },
          error:(err)=>{
            this.core.openSnackBar("Error while adding employee",'Cancel')
          }
        })
      }    
    }
  }
}
