import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../service/device.service';
import { Device } from '../device';
import { Observable } from 'rxjs';
import { DeviceState } from '../store/reducers/device.reducers';
import { select, Store } from '@ngrx/store';
import { selectDevices } from '../store/selectors/device.selectors';
import { deleteDevice } from '../store/actions/device.actions';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})



export class DeviceListComponent implements OnInit {
  deviceList: Device[] = [];
  first = 0;
  rows = 10;

  devices$: Observable<Device[]>;

  searchText:any;

  constructor(private deviceService: DeviceService,
    private store: Store<DeviceState>) {
      this.devices$ = this.store.pipe(select(selectDevices));
     }

  ngOnInit(): void {
    this.deviceList=this.deviceService.getDevices();
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
    return this.deviceList ? this.first === (this.deviceList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.deviceList ? this.first === 0 : true;
  }

  remove(device: Device) {
    //this.deviceService.removeUser(id);
    //this.deviceList = this.deviceService.getDevices();

    this.store.dispatch(deleteDevice(device));
  }

}
