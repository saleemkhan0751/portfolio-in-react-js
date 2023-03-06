import * as Yup from "yup"

export const teamSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    role: Yup.string().min(2).max(20).required("Please enter role"),
    picture: Yup.string().required("Please upload picture"),
    facebook_url: Yup.string().required("Please enter facebook url"),
    twitter_url: Yup.string().required("Please enter twitter url"),
    linkedin_url: Yup.string().required("Please enter linkedin url"),
    instagram_url: Yup.string().required("Please enter instagram url"),
})