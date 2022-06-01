

import { NgModule } from "@angular/core";
import { StoreModule} from "@ngrx/store";
import { EmployeeListComponent } from "../employee-list/employee-list.component";
import { AddEmployeeComponent } from "../add-employee/add-employee.component";
import { CommonModule } from "@angular/common";
import { employeeFeatureKey, empreducer } from "./reducers/employee.reducers";
import { deviceFeatureKey, devreducer } from "./reducers/device.reducers";



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(employeeFeatureKey, empreducer),
        StoreModule.forFeature(deviceFeatureKey, devreducer)
    ],
    exports: [
        StoreModule
    ]
  })
  export class StorageModule { }
