const express= require("express")
const { Server } = require("http")
const app = express()
const port = 3000

//root route
app.get('/',(req,res) => {
 res.send(<h1>Hellow world</h1>)
}) 
app.listen(port,()=>{
console.log(`server runs on port ${port}`)
})



