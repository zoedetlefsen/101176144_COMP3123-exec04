var express = require('express')
const SERVER_PORT = 3000;
var app = express()

//http://localhost:3000/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")

})

//Query
//http://localhost:3000/user?firstname=zoe&lastname=detlefsen
app.get("/user", (req, res) => {
    const { firstname, lastname } = req.query;
    res.json({ firstname, lastname });
})

//Path Parameter
//http://localhost:3000/user/zoe/detlefsen
app.post("/user/:firstname/:lastname", (req, res) => {
    const {firstname, lastname} = req.params
    res.json({firstname, lastname})
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})