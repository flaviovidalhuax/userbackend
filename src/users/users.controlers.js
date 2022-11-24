const usersDB = []
let id =1;

const findAllUser = () => {
    return usersDB
}
const findUsersById = (id) => {
const filteredUser = usersDB.find( (user) => user.id == id)
    return filteredUser
}
const createNewUsers = (obj) => {
    const newUser = {
        id: id++,
        first_name:obj.first_name , 
        last_name: obj.last_name ,
        email:obj.email || 'Email Unknow' , 
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
}
const FindRandomUsers = () => {
    const randomIndex = Math.floor(Math.random() * usersDB.length)
    return usersDB[randomIndex]
}
//deleated
const DeleteOneUser = (id) =>{
    const userindex = usersDB.findIndex( (user)=>user.id ==id )
   if (userindex !== -1) {
    usersDB.slice(userindex,1)
    return true
   }
   return false
}


// exportar las funcioness
module.exports={
    findAllUser,
    findUsersById,
    createNewUsers,
    FindRandomUsers,
    DeleteOneUser
}


