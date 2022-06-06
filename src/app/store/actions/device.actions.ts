import { createAction, props } from "@ngrx/store";
import { Device } from "src/app/device";

export const addDevice = createAction(
    '[Device] add device',
    (device:Device) => ({device})
);

export const deleteDevice = createAction(
    '[Device] remove device',
    (device:Device) => ({device})
)

export const updateDevice = createAction(
    '[Device] update device',
    (id:number, typ:string, des:string, dev:Device) => ({id, typ, des, dev})
)