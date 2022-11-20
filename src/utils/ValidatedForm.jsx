import * as yup from 'yup';
export const schemaFormRegister = yup.object().shape({
    firstName: yup.string().required('Campo obligatorio'),
    lastName: yup.string(),
    dni: yup.number().max(99999999).required('Campo obligatorio'),
    fechaNac: yup.date().required('Campo Obligatorio'),
    email: yup.string().email('El mail es inválido').required('Campo obligatorio'),
    password: yup
        .string()
        .required('Campo obligatorio')
        .min(8, 'Debe tener mínimo 8 caracteres')
        .matches(/[a-zA-Z]/, 'Debe tener minúsculas y mayúsculas'),
    terms: yup.bool().required().oneOf([true], 'Debés aceptar los terminos y condiciones'),
});