import React from "react"

function User({ user }){

return (

<div>

<h2>{user.name}</h2>

<p>Email: {user.email}</p>

<p>Username: {user.username}</p>

<p>Phone: {user.phone}</p>

</div>

)

}

export default User