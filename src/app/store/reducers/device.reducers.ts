import { Action, createReducer, on } from "@ngrx/store";
import { Device } from "src/app/device";
import * as DeviceActions from "../actions/device.actions"

export const deviceFeatureKey = 'device';

export interface DeviceState {
    devices :Device[];
}

export const  initialState: DeviceState = {
    devices:[
    { deviceid: 1, type: 'Smartphone', description:'Samsung Galaxy S21', employeeid:12321 },
    { deviceid: 2, type: 'Laptop', description:'Asus intel 7th gen', employeeid:43560 },
    { deviceid: 3, type: 'Ipad', description:'Apple Ipad Tablet', employeeid:12321 },
    { deviceid: 4, type: 'Laptop', description:'Dell inspiron', employeeid:19657 },
    { deviceid: 5, type: 'Laptop', description:'Apple macbook', employeeid:40032 },
    { deviceid: 6, type: 'Smartwatch', description:'Fitbit', employeeid:19657 },
    { deviceid: 7, type: 'Smartphone', description:'Xiaomi 11t Pro', employeeid:22212 },
]
};

export const deviceReducer = createReducer(
    initialState,
    on(DeviceActions.addDevice,
        (state: DeviceState, {device}) =>
        ({...state,
        devices:[...state.devices, device]
    })),
    on(DeviceActions.deleteDevice,
        (state:DeviceState, {device})=>
        ({...state,
        devices:[...state.devices].filter(x=>x!=device)
    })),
    on(DeviceActions.updateDevice,
        (state:DeviceState, {id, dev})=>
        ({...state,
        devices: state.devices.map(device => device.employeeid != id? device:dev) 
    }))
);

export function devreducer(state: DeviceState | undefined, action:Action): any{
    return deviceReducer(state, action);
}