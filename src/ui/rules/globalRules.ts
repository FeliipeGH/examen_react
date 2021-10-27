import {FieldValues, RegisterOptions} from "react-hook-form";

export const userNameRule: RegisterOptions<FieldValues, any> = {
    required: {
        value: true,
        message: "Ingresa su nombre"
    }
};

export const emailRule: RegisterOptions<FieldValues, any> = {
    required: {
        value: true,
        message: "Ingresa el correo"
    },
    pattern: {
        value: /\S+@\S+\.\S+/i,
        message: 'Ingresa un correo valido'
    }
};

export const passwordRule: RegisterOptions<FieldValues, any> = {
    required: {
        value: true,
        message: "Ingrese la contraseña"
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
        message: 'Debe tener al menos un número, una letra minúscula, ' +
            'una letra mayúscula y 8 caracteres'
    },
};

export const anyValueRule = (inputName: string = "Ingrese el campo"): RegisterOptions<FieldValues, any> => ({
    required: {
        value: true,
        message: inputName,
    },
    maxLength: {
        value: 30,
        message: "Máximo 30 caracteres"
    }
});
