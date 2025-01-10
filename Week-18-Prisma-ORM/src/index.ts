import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function  createUser(){
    await client.user.create({
        data : {
            username : "Mayank Arya" ,
            password : "124563",
            age : 20,
            city : "NCR"
        }
    })
}

createUser();