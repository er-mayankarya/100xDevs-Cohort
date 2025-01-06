import express from "express";
import { Client } from "pg";
import "dotenv/config";

const app = express();
app.use(express.json());

const pgClient = new Client(process.env.DB_URI!);
pgClient.connect();

app.post("/signup", async (req, res) => {

  try {
    const { username, email, password } = req.body;

    const { city, country, street, pincode } = req.body;

    const insertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2 , $3) RETURNING id`;
    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);
    const userId = response.rows[0].id;

    const insertAddressQuery = `INSERT INTO addresses (city , country , street , pincode , user_id) VALUES ($1 , $2 , $3 , $4 , $5)`;
    await pgClient.query(insertAddressQuery, [
      city,
      country,
      street,
      pincode,
      userId,
    ]);

    res.json({
      message: "User Signed Up",
    });

  } catch (error) {
    console.log(error);
    res.json({
      message: "Error while signing up",
    });
  }
});

app.listen(3000);
