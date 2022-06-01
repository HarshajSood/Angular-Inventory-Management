import { Injectable } from '@angular/core';
import { Device } from '../device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceList: Device[] = [
    { deviceid: 1, type: 'Smartphone', description:'Mobile Device', employeeid:1 },
    { deviceid: 2, type: 'Laptop', description:'ASUS intel 7th gen', employeeid:3 }
  ];

  constructor() { }

  getDevices() {
    return this.deviceList
  }

  getDeviceByID(id: number) {
    return this.deviceList.find(x => x.deviceid == id)
  }

  addDevice(device: Device) {
    device.deviceid = new Date().getTime();
    this.deviceList.push(device);
  }

  updateUser(device: Device) {
    const deviceIndex = this.deviceList.findIndex(x => x.deviceid == device.deviceid);
    if (deviceIndex != null && deviceIndex != undefined) {
      this.deviceList[deviceIndex] = device;
    }
  }

  removeUser(id: number) {
    this.deviceList = this.deviceList.filter(x => x.deviceid != id);
  }

}
