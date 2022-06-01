import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeList: Employee[] = [
    { eid: 1, name: 'John', email:'john@gmail.com', employeeid:12321 },
    { eid: 2, name: 'Doe', email:'doe123@gmail.com', employeeid:12232 }
  ];

  constructor() { }

  getEmployee() {
    return this.employeeList
  }

  getEmployeeByID(id: number) {
    return this.employeeList.find(x => x.eid == id)
  }

  addEmployee(employee: Employee) {
    employee.eid = new Date().getTime();
    this.employeeList.push(employee);
  }

  updateEmployee(employee: Employee) {
    const employeeIndex = this.employeeList.findIndex(x => x.eid == employee.eid);
    if (employeeIndex != null && employeeIndex != undefined) {
      this.employeeList[employeeIndex] = employee;
    }
  }

  removeEmployee(id: number) {
    this.employeeList = this.employeeList.filter(x => x.eid != id);
  }

}
