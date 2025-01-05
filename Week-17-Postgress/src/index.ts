import { Client } from 'pg';
import "dotenv/config";

const pgClient = new Client(process.env.DB_URI!);

async function main(){
    await pgClient.connect();
    const res = await pgClient.query("SELECT * FROM users");
    console.log(res.rows);
}

main();