import { Client } from "pg";
import express from 'express';

const app = express()

app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:VsWe54ARyuIm@ep-ancient-sunset-a5mu91l6.us-east-2.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();

app.post('/signup' , async (req , res) => {

    try{
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;

        const insertQuery = `INSERT INTO users (username , email , password ) VALUES ($1 , $2 , $3)`

        const response = await pgClient.query(insertQuery , [username , email , password]);

        res.json({
            message : "You have Signed Up"
        })
    }catch(e){
        console.log(e);
        res.json({
            message : "Error while signing up !!"
        })
    }
})

app.listen(3000);