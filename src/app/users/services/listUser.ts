import { getRestApi } from "../../../global/utilities/restApi"

export const getUsers = async ()=>{
    const {json, status} = await getRestApi("users");
    console.log(json)
}