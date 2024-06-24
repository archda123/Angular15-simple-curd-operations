import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  
  empForm:FormGroup;

  education:string[]=['Matric','Diploma','Intermediate','Graduation','Post Graduation'];

  constructor(private _form:FormBuilder , private empService:EmployeeService , private dialogRef:MatDialogRef<EmpAddEditComponent>){
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
  onsubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
      this.empService.addEmployee(this.empForm.value).subscribe({
        next:(res)=>{
          alert("Employee added successfully");
          this.dialogRef.close(true);
                  },
        error:(err)=>{
          alert("Error while adding employee")
        }
      })
    }
  }
  onCancel(){}
}
