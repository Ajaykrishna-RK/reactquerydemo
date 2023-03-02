import React from 'react'
import { useParams } from 'react-router-dom'
import { UserdatabyId } from '../hook/UserdatabyId'

function UserbyId() {


const {userId} = useParams()

const {  data } =  UserdatabyId(userId)

  return (
    <div>
<p>{data?.data.name}</p>

    </div>
  )
}

export default UserbyId