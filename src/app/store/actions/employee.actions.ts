import { createAction, props } from "@ngrx/store";
import { Employee } from "src/app/employee";

export const addEmployee = createAction(
    '[Employee] add employee',
    (employee:Employee) => ({employee})
)

export const deleteEmployee = createAction(
    '[Employee] remove employee',
    (employee:Employee) => ({employee})
)

export const updateEmployee = createAction(
    '[Employee] update employee',
    (id:number, empl:Employee) => ({id, empl}),
)
