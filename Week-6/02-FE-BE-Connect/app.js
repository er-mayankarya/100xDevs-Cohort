const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_SECRET = "USER_APP";

app.use(express.json());
 
const users = [];

// Logger-Middleware
function logger(req , res , next){
    console.log("Request came " + req.method);
    next();
}
app.use(logger);

app.get('/' , (req , res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/signup' , (req , res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username ,
        password : password
    })

    res.json({
        msg : "You are Signed Up."
    })

});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        res.header("token" , token);

        user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

//Auth-Middleware
function auth(req, res, next) {
    const token = req.headers.token;

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                })
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

app.get("/me", auth, (req, res) => {
    const user = req.user;

    res.send({
        username: user.username
    })
})


app.listen(3000);