import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { EmployeeState } from '../store/reducers/employee.reducers';
import { select, Store } from '@ngrx/store';
import { addEmployee, updateEmployee } from '../store/actions/employee.actions';
import { selectbyid } from '../store/selectors/employee.selectors';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeid:number=0;
  name:string='';
  email:string='';
  employeeform:FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private employeeService:EmployeeService,
    private store: Store <EmployeeState>
  ) {
    this.employeeform = this.fb.group({
      eid: [0, [Validators.required]],
      name: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      employeeid: ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeid = params['employeeid'];
      this.name = params['name'];
      this.email =params['email'];
      if (params['employeeid'] != null) {
        this.employeeform.get('employeeid')?.setValue(params['employeeid']);
        this.employeeform.get('name')?.setValue(params['name']);
        this.employeeform.get('email')?.setValue(params['email'])
        const data = this.store.pipe(select(selectbyid(this.employeeid)))
        if (data) {
          this.employeeform.setValue(data);
        }
      }
    });
  }

  reset() {
    this.employeeform.reset();
  }

  save() {
    if (this.employeeform.invalid)
      return

    if (this.employeeform.get('employeeid')?.value === 0) {
      //New
      this.store.dispatch(addEmployee(this.employeeform.value));
      //this.employeeService.addEmployee(this.employeeform.value);
    } else {
      //Update
      //this.store.dispatch(addEmployee(this.employeeform.value));
      this.store.dispatch(updateEmployee(this.employeeid, this.employeeform.value));
    }

    //Redirecting 
    this.router.navigate(['/employee']);
  }

}
