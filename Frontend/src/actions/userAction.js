export const addUser = (user,users) => {
    let isuser = true;
    users.map((e)=>{
        if(e.username === user[0].username){
            isuser = false
        }
    })
    if(user[0].username === "" ||user[0].password === "" ||user[0].eposta === "" ){
        isuser = false
    }
    if(isuser){
        return({
            type: "user/addUser",
            payload: user,
        })
    }
    return({
        type: "user/addUser",
        payload: false,
    })
}