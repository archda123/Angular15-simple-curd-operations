import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{
  
  empForm:FormGroup;

  education:string[]=['Matric','Diploma','Intermediate','Graduation','Post Graduation'];

  constructor(private _form:FormBuilder , private empService:EmployeeService , private dialogRef:MatDialogRef<EmpAddEditComponent> , @Inject(MAT_DIALOG_DATA) public data:any){
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
    if(this.empForm.valid){
      if(this.data){
        console.log(this.empForm.value);
        this.empService.updateemployeeById( this.data.id,this.empForm.value).subscribe({
          next:(res)=>{
            alert("Updated Employee Data");
            this.dialogRef.close(true);
                    },
          error:(err)=>{
            alert("Error while adding employee")
          }
        })
      }else{
      console.log(this.empForm.value);
      this.empService.addEmployee(this.empForm.value).subscribe({
        next:(res)=>{
          alert("Employee added successfully");
          this.dialogRef.close(true);
                  },
        error:(err)=>{
          alert("Error while adding employee")
        }
      })}
    }
  }
  onCancel(){}
}
