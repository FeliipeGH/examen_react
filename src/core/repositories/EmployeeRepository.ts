import {CRUDRepository} from "../interfaces/CRUDRepository";
import {Employee} from "../models/Employee";
import {GeneralConstants} from "../constants/GeneralConstants";
import {handleCommonCRUDError} from "../helpers/handleCommonCRUDError";
import {EmployeeResponse} from "../dto/EmployeeResponse";

export class EmployeeRepository implements CRUDRepository {
    deleteById(token: string, id: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    getById(token: string, id: number | undefined): Promise<any> {
        return Promise.resolve(undefined);
    }

    async requestList(token?: string, id?: number): Promise<Array<Employee>> {
        const response = await fetch(GeneralConstants.BASE_URL + "/felipe_guadarrama", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token ?? "",
            },
        });
        if (response.status === 200) {
            const {success, data} = await response.json() as EmployeeResponse;
            if (success) {
                return data.employees;
            }
            return [];
        } else {
            handleCommonCRUDError(response.status);
            return [];
        }
    }

    async save(employee: Employee, token?: string): Promise<any> {
        const response = await fetch(GeneralConstants.BASE_URL + "/felipe_guadarrama", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token ?? "",
            },
            body: JSON.stringify(employee)
        });
        handleCommonCRUDError(response.status);
    }
}