import React from 'react'
import { useAlbumsData, useUsersData } from '../hook/useUsersData'

function Rqprallel() {


    const {  data:users } =  useUsersData()

    const {  data:albums } =  useAlbumsData()
  return (
    <div>
{users?.data.map((user,key)=>(
    <p>{user.name}</p>
))}

{albums?.data.map((user,key)=>(
    <h1>{user.title}</h1>
))}


    </div>
  )
}

export default Rqprallel