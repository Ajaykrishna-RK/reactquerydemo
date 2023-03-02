import { useQuery } from 'react-query'
import axios from 'axios'


const fetchUsers = () =>{
    return(
        axios.get("https://jsonplaceholder.typicode.com/users")
    )
}

const fetchAlbums = () =>{
    return(
        axios.get("https://jsonplaceholder.typicode.com/albums")
    )
}

export const useUsersData = () =>{
  return  useQuery("users",fetchUsers)
}

export const useAlbumsData = () =>{
    return  useQuery("albums",fetchAlbums)
}
