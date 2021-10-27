import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "./styles/loginStyles";
import {LoginModel} from "../../../core/models/LoginModel";
import {LoginService} from "./services/LoginService";
import {FakeLoginRepository} from "../../../core/repositories/FakeLoginRepository";
import {MaterialInput} from "../../components/materialInput/MaterialInput";
import {anyValueRule, passwordRule} from "../../rules/globalRules";
import {Box} from "@material-ui/core";
import {MaterialButton} from "../../components/buttons/MaterialButton";

// @ts-ignore
const useStyles = makeStyles(loginStyles);

const loginService = new LoginService(new FakeLoginRepository());

export const LoginPage = () => {
    const classes = useStyles();
    const {handleSubmit, control} = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data: LoginModel) => {
        await loginService.startLogin(data, dispatch);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <MaterialInput
                title="Usuario"
                inputId="userName"
                control={control}
                rules={{...anyValueRule("Ingresa el usuario")}}
            />
            <MaterialInput
                title="Contraseña" inputId="password"
                control={control} type="password"
                rules={{...passwordRule}}
            />
            <Box display="flex" justifyContent="center">
                <MaterialButton title="Ingresar"/>
            </Box>
        </form>
    );
};