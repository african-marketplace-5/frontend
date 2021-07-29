import * as yup from 'yup'

const userformSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required'),
    password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(16, 'Password cannot be longer than 16 characters'),
    location_id: yup
    .number()
    .nullable(true),
    tos: yup.boolean()
    .required('The Terms of Service must be accepted')
    .oneOf([true], 'The Terms of Service must be accepted')
});

export default userformSchema;