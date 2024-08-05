export const ControlUser = (user,users) => {
    let auth = false;
    let role = false
    users.map((e)=>{
        if(e.username === user[0].username && e.password === user[0].password){
            auth = true
            role = e.role
        }
    })
    return({
    type: "auth/setAuth",
    auth: auth,
    role:role
})}