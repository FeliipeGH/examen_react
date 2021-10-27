import {Employee} from "../models/Employee";

type EmployeeList = {
    employees: Array<Employee>;
};

export interface EmployeeResponse {
    data: EmployeeList;
    success: boolean,
}