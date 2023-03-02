import React from 'react'
import { useUsersData } from '../hook/useUsersData'
import {Link} from "react-router-dom"

function RQFfetching() {

   

    const { isLoading, error, data } =  useUsersData()

console.log(data?.data)

  return (
    <div>
{isLoading && <h1>Loading...</h1>}
{error && <h1>{error.message}...</h1>}

{ data?.data.map((user)=>(
    <div key={user.id}>
 <Link to={`/user/${user.id}`}> 
 
 <p>
    {user?.name}
</p>
 </Link> 
</div>
))}

    </div>
  )
}

export default RQFfetching