const express = require('express')
const app = express()
const port = 5000


<<<<<<< HEAD
app.get("/notes",(req,res)=>{
     
})

app.get("/note/:id",(req,res)=>{
     const id = req.params.id
     console.log(id)
     res.send(id)
})

app.listen(port, () => {
     console.log(`app listening at http://localhost:${port}`)
=======

app.get ('/notes', (req, res) => {

})

app.get('/note/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(id)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
>>>>>>> e86d558655bae95a52958eaa0dbaa737140721f6
})