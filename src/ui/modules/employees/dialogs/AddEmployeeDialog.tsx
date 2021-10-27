import React, {useContext} from 'react';
import {GeneralDialog} from "../../../components/dialogs/GeneralDialog";
import {MaterialDialogProps} from "../../../interfaces/MaterialDialogProps";
import {EmployeeContext, EmployeeContextProps} from "../context/EmployeeContext";
import {useIsMounted} from "../../../hooks/useIsMounted";
import {useForm} from "react-hook-form";
import {Employee} from "../../../../core/models/Employee";
import {MaterialInput} from "../../../components/materialInput/MaterialInput";
import {anyValueRule} from "../../../rules/globalRules";
import {MaterialButton} from "../../../components/buttons/MaterialButton";
import {Box} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";


export const AddEmployeeDialog = ({openDialog, setOpenDialog}: MaterialDialogProps) => {
    const isMounted = useIsMounted();
    const {control, handleSubmit, setValue} = useForm();
    const [birthDate, setBirthDate] = React.useState<Date | null>(new Date());
    const {employeeService, addEmployee} = useContext<EmployeeContextProps>(EmployeeContext);
    const {format} = require("date-fns");


    const onClose = () => {
        setValue("name", "");
        setValue("last_name", "");
        if (isMounted.current) setOpenDialog(false);
    };

    const onSubmit = async (data: Employee) => {
        if (employeeService) {
            data.birthday = format(birthDate, "yyyy-MM-dd");
            const result = await employeeService.save(data);
            if (result && addEmployee) {
                addEmployee(data);
                onClose();
            }
        }
    };

    // @ts-ignore
    return (
        <GeneralDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            title="Agregar empleado"
            isLargest={false}
            onClose={onClose}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <MaterialInput
                    title="Ingresa el nombre del empleado"
                    inputId="name"
                    control={control}
                    rules={{...anyValueRule("Ingresa el nombre")}}
                />
                <MaterialInput
                    title="Ingresa el apellido del empleado"
                    inputId="last_name"
                    control={control}
                    rules={{...anyValueRule("Ingresa el apellido")}}
                />
                <Box marginY="0.5rem">
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                        <DatePicker
                            label="Fecha de cumpleaños"
                            value={birthDate}
                            format="yyyy/MM/dd"
                            fullWidth={true}
                            onChange={(newValue) => setBirthDate(newValue)}
                        />
                    </MuiPickersUtilsProvider>
                </Box>
                <Box display="flex" justifyContent="center">
                    <MaterialButton/>
                </Box>
            </form>
        </GeneralDialog>
    );
};