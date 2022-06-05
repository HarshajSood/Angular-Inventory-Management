import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { DeviceService } from '../service/device.service';
import { EmployeeService } from '../service/employee.service';
import { addDevice, updateDevice } from '../store/actions/device.actions';
import { selectEmployees } from '../store/selectors/employee.selectors';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  employeeid:number = 0;
  type:string = '';
  description:string = '';
  deviceform: FormGroup;

  employeeList:Employee[]=[];

  emplist$:Observable<Employee[]>;

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private employeeService: EmployeeService,
    private store: Store<DeviceService>,
    private estore: Store<EmployeeService>
  ) { 
    this.emplist$ = this.store.pipe(select(selectEmployees));
    this.deviceform = this.fb.group({
      deviceid: [0, [Validators.required]],
      type: ['',[Validators.required]],
      description: ['', [Validators.required]],
      employeeid: [0,[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.employeeList=this.employeeService.getEmployee();
    this.route.params.subscribe(params => {
      this.employeeid = params['employeeid'];
      if (params['employeeid'] != null) {
        this.deviceform.get('employeeid')?.setValue(params['employeeid']);
        this.deviceform.get('type')?.setValue(params['type']);
        this.deviceform.get('description')?.setValue(params['description'])
        const data = this.deviceService.getDeviceByID(this.employeeid);
        if (data) {
          this.deviceform.setValue(data);
        }
      }
    });
  }

  reset() {
    this.deviceform.reset();
  }
  save() {
    if (this.deviceform.invalid)
      return

    if (this.deviceform.get('employeeid')?.value === 0) {
      //New 
      this.store.dispatch(addDevice(this.deviceform.value));
    } else {
      //Update 
      this.store.dispatch(updateDevice(this.employeeid, this.deviceform.value))
    }

    //Redirecting
    this.router.navigate(['/device']);
  }

}
