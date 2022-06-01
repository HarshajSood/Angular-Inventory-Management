import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee';
import { select, Store } from '@ngrx/store';
import { selectEmployees } from '../store/selectors/employee.selectors';
import { EmployeeState } from '../store/reducers/employee.reducers';
import { Observable } from 'rxjs';
import { deleteEmployee } from '../store/actions/employee.actions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList:Employee[]=[];
  first=0;
  rows=10;

  employees$: Observable<Employee[]>;

  searchText:any;

  constructor(private employeeService:EmployeeService, 
    private store: Store<EmployeeState>) {
      this.employees$ = this.store.pipe(select(selectEmployees));
     }

  ngOnInit(): void {
    this.employeeList=this.employeeService.getEmployee();
  }

  next(){
    this.first=this.first+this.rows;
  }

  

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.employeeList ? this.first === (this.employeeList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.employeeList ? this.first === 0 : true;
  }

  remove(employee:Employee) {
    //this.employeeService.removeEmployee(id);
    //this.employeeList = this.employeeService.getEmployee();
    this.store.dispatch(deleteEmployee(employee));
  }

}
