import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromDevice from './../reducers/device.reducers'

export const selectDeviceState = createFeatureSelector<fromDevice.DeviceState>(
    fromDevice.deviceFeatureKey,
);

export const selectDevices = createSelector(
    selectDeviceState,
    (state: fromDevice.DeviceState)=>state.devices
);