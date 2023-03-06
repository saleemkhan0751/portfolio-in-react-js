import * as yup from "yup"

export const FaqSchema = yup.object({
    heading: yup.string().min(2).required('Please enter heading'),
    description: yup.string().required('Please enter description'),
})