import React, {useContext, useState} from 'react';
import {CardContainer} from "../../components/cardContainer/CardContainer";
import {useIsMounted} from "../../hooks/useIsMounted";
import PeopleIcon from "@material-ui/icons/People";
import {EmployeeContext, EmployeeContextProps, EmployeeProvider} from "./context/EmployeeContext";
import {useRequestListData} from "../../hooks/useRequestListData";
import {EmployeeService} from "./services/EmployeeService";
import {useCreateObjectRow} from "../../hooks/useCreateObjectRow";
import {Employee} from "../../../core/models/Employee";
import {MaterialTable} from "../../components/table/MaterialTable";
import {AddEmployeeDialog} from "./dialogs/AddEmployeeDialog";

export const EmployeesPage = () => {
    return (
        <EmployeeProvider>
            <EmployeeContainer/>
        </EmployeeProvider>
    );
};

const EmployeeContainer = () => {
    const {employeeList, addAll, employeeService} = useContext<EmployeeContextProps>(EmployeeContext);

    const [openDialog, setOpenDialog] = useState(false);
    const isMounted = useIsMounted();

    const handleList = (list: Array<Employee>) => {
        if (addAll) {
            addAll(list);
        }
    };

    const {loading, onDeleteElement} = useRequestListData(employeeService as EmployeeService, handleList);
    const createObjectRow = useCreateObjectRow("id", onDeleteElement, employeeService as EmployeeService,
        [{type: "number", prop: "id"}, {type: "string", prop: "name"}, {
            type: "string",
            prop: "last_name"
        }, {type: "date", prop: "birthday"}
        ], "", false, false);

    const handleOnClick = () => {
        if (isMounted.current) setOpenDialog(true);
    };

    return (
        <CardContainer icon={PeopleIcon} onClickIsLink={false} onClickFunc={handleOnClick} title="Lista de empleados">
            <MaterialTable
                removeLastColumn={true}
                columns={[
                    {
                        Header: "Nombre",
                        accessor: "name"
                    },
                    {
                        Header: "Apellido",
                        accessor: "last_name"
                    },
                    {
                        Header: "Cumpleaños",
                        accessor: "birthday"
                    },
                    {
                        Header: "",
                        accessor: "hidden"
                    }
                ]}
                data={employeeList ?? []}
                createObjectRow={createObjectRow}
                loading={loading}
            />
            <AddEmployeeDialog setOpenDialog={setOpenDialog} openDialog={openDialog}/>
        </CardContainer>
    );
};