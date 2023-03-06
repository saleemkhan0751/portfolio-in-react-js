import * as yup from "yup"

export const settingSchema = yup.object({
        service: yup.string().required('Please enter service'),
        testimonial: yup.string().required('Please enter testimonial'),
        team: yup.string().required('Please enter team'),
        portfolio: yup.string().required('Please enter portfolio'),
        contact_us: yup.string().required('Please enter contact us'),
        pricing: yup.string().required('Please enter pricing'),
        about_us: yup.string().required('Please enter about us'),
    }
)
