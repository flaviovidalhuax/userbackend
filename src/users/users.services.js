// file`s imports
const usersControlers = require('./users.controlers')

const getAllUsers = (req, res)  => {
    const data = usersControlers.findAllUser()
    res.status(200).json(data)
}

const getAllUsersById = (req,res) => {
    const id = req.params.id
    const data = usersControlers.findUsersById(id)
    if (data) {
        //succesfull
        res.status(200).json(data)
    }else{
        //wrong (404 don't found)
        res.status(404).json({mensaje:'Invalid ID'})
    }
}
//deleat one user
const DeleteAllUsersById = (req,res) => {
    const id = req.params.id
    //const data = usersControlers.findUsersById(id)
    const deleted = usersControlers.DeleteOneUser(id) 
    if (deleted) {
        res.status(200).json(data)
    }else{
        res.status(404).json({mensaje:'Invalid ID'})
    }
}

const postNewUsers = (req,res) => {
    const {first_name, last_name, email, password, birthday} =req.body
    if (first_name &&last_name) {
        const data = usersControlers.createNewUsers({   first_name,
                                                        last_name,
                                                        email,
                                                        password,
                                                        birthday})
        res.status(201).json(data) //201 creat somthin new
    }else{
        res.status(400).json({message:'Invlaid Data',
                             fields: {  first_name:'string',
                                        last_name:'string',
                                        email:'string',
                                        password:'string',
                                        birthday:'YEAR/MOTH/DAY'
                                    }})
    }
}

const getRandomUsers = (req, res) => {
    const data = usersControlers.FindRandomUsers()
    if (data) {
        //succesfully
        res.status(200).json(data)
    }else{
        //wrong case
        res.status(400).json({
            message:'DB is empty'
        })
    }
}
module.exports = {
    getAllUsers,
    getAllUsersById,
    postNewUsers,
    getRandomUsers,
    DeleteAllUsersById
}