import React, {createContext, useMemo, useState} from 'react';
import {EmployeeService} from "../services/EmployeeService";
import {EmployeeRepository} from "../../../../core/repositories/EmployeeRepository";
import {Employee} from "../../../../core/models/Employee";
import {useIsMounted} from "../../../hooks/useIsMounted";

type EmployeeProviderProps = {
    children: React.ReactNode
};

export type EmployeeContextProps = {
    employeeService?: EmployeeService,
    employeeList?: Array<Employee>,
    addEmployee?: (employee: Employee) => void,
    addAll?: (employees: Array<Employee>) => void,
};

export const EmployeeContext = createContext<EmployeeContextProps>({});

export const EmployeeProvider = ({children}: EmployeeProviderProps) => {
    const [employeeList, setEmployeeList] = useState<Array<Employee>>([]);
    const employeeService = new EmployeeService(new EmployeeRepository());
    const isMounted = useIsMounted();

    const addEmployee = (employee: Employee) => {
        if (isMounted.current) setEmployeeList([{...employee}, ...employeeList]);
    };

    const addAll = (employees: Array<Employee>) => {
        if (isMounted.current) setEmployeeList([...employees]);
    };

    const value = useMemo(() => ({
        employeeService,
        employeeList,
        addEmployee,
        addAll
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [employeeList]);

    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
};