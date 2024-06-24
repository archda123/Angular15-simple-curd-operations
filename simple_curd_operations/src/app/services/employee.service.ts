import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return(this.http.post<any>("http://localhost:3000/employees",data))
}
getemployeeList():Observable<any>{
  return(this.http.get<any>("http://localhost:3000/employees"));
}

deleteemployee(id:number):Observable<any>{
  return(this.http.delete<any>("http://localhost:3000/employees/"+id));
}

updateemployeeById(id:number , data:any):Observable<any>{
  return(this.http.put("http://localhost:3000/employees/"+id ,data));
}

}
