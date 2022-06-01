import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceListComponent } from './device-list/device-list.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './service/employee.service';
import { DeviceService } from './service/device.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { employeeFeatureKey, empreducer } from './store/reducers/employee.reducers';
import { deviceFeatureKey, devreducer } from './store/reducers/device.reducers';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DeviceListComponent,
    AddDeviceComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // BrowserAnimations Modules 
    BrowserAnimationsModule,

    //  PrimeNG  Modules
    ButtonModule,
    TableModule,

    //  Angular Form Modules
    FormsModule,
    ReactiveFormsModule,

    // Search
    Ng2SearchPipeModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(employeeFeatureKey, empreducer),
    StoreModule.forFeature(deviceFeatureKey, devreducer),

    !environment.production ? StoreDevtoolsModule.instrument() : []
    
  ],
  providers: [EmployeeService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
