import * as yup from "yup"

export const aboutUsSchema = yup.object({
    title: yup.string().min(2).max(25).required('Please enter name'),
    picture: yup.string().required('Please upload picture'),
    content: yup.string().required('Please enter content')

})