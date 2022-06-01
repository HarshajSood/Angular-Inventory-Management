import { Action, createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/employee";
import * as EmployeeActions from "../actions/employee.actions"

export const employeeFeatureKey = 'employee';

export interface EmployeeState {
    employees: Employee[];
}

export const  initialState: EmployeeState = {
    employees:[
    { eid: 1, name: 'John', email:'john@gmail.com', employeeid:12321 },
    { eid: 2, name: 'Doe', email:'doe123@gmail.com', employeeid:12232 },
    { eid: 3, name: 'Rob', email:'rob654@robin.com', employeeid:43560 },
    { eid: 4, name: 'Michael', email:'mich4321@gmail.com', employeeid:45324 },
    { eid: 5, name: 'Lewis', email:'lewis@hotmail.com', employeeid:32678 },
    { eid: 6, name: 'Victor', email:'Vik.453@gmail.com', employeeid:22212 },
    { eid: 7, name: 'Charlie', email:'Charles@gmail.com', employeeid:24321 },
    { eid: 8, name: 'Joe', email:'joe.smith@hotmail.com', employeeid:19657 },
    { eid: 9, name: 'Jack', email:'jack323@gmail.com', employeeid:40032 },
    { eid: 10, name: 'Henry', email:'henryk212@hotmail.com', employeeid:46701 },
    { eid: 11, name: 'Kevin', email:'kevin@gmail.com', employeeid:12345 },
    { eid: 12, name: 'John', email:'john@hotmail.com', employeeid:32145 },
]
};

export const employeeReducer = createReducer(
    initialState,
    on(EmployeeActions.addEmployee,
        (state: EmployeeState, {employee}) =>
        ({...state,
        employees:[...state.employees, employee]
    })),
    on(EmployeeActions.deleteEmployee,
        (state:EmployeeState, {employee})=>
        ({...state,
        employees:[...state.employees].filter(x=>x!=employee)
    }))
);

export function empreducer(state: EmployeeState | undefined, action:Action): any{
    return employeeReducer(state, action);
}