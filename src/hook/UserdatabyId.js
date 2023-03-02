import { useQuery } from 'react-query'
import axios from 'axios'


const fetchUsers = (userId) =>{
    return(
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    )
}

export const UserdatabyId = (userId) =>{
    return  useQuery(["user",userId],()=>fetchUsers(userId))
  }