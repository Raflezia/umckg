import axios from "axios";
export const API =  "https://umckg.herokuapp.com/"

export const publicApi =  axios.create({
    baseURL:API
})
