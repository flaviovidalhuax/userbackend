// 1-dependencias
const express= require('express')

//Router
const Router = require('./users/users.routes')

// 2.-initial config
const port =9000;
const app =express()
// 3.-json request config
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({mesage:'ok'})
} )

//API V1 ROUTER
app.use('/users/v1', Router)

// 4.-start server
app.listen(port, () =>{
    console.log(`Server started at port ${port}`);
})