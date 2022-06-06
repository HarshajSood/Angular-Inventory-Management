import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'device', component: DeviceListComponent},
  { path: 'add-device', component: AddDeviceComponent},
  { path: 'update-device/:employeeid/:type/:description/:upadd', component: AddDeviceComponent},
  { path: 'employee', component: EmployeeListComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'update-employee/:employeeid/:name/:email/:upadd', component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
