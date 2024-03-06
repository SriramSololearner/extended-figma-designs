import { object, string, } from 'yup';

const userSchema = object({
    email: string().email().required('Must enter a valid email address'),
    password: string().min(6).required('password should be greater than 6 characters')
});
export default userSchema