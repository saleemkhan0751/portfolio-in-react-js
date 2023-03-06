import * as yup from "yup"

export const portfolioSchema = yup.object({
    name: yup.string().min(2).max(25).required('Please enter name'),
    picture: yup.string().required('Please upload picture')
})