import * as yup from "yup"

export const testimonialSchema = yup.object({
    name: yup.string().min(2).max(25).required('Please enter name'),
    role: yup.string().min(2).max(25).required('Please enter role'),
    content: yup.string().min(2).max(50).required('Please enter content'),
    picture: yup.string().required('Please upload picture')
})
