"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client(process.env.DB_URI);
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const { city, country, street, pincode } = req.body;
        const insertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2 , $3) RETURNING id`;
        const response = yield pgClient.query(insertQuery, [
            username,
            email,
            password,
        ]);
        const userId = response.rows[0].id;
        const insertAddressQuery = `INSERT INTO addresses (city , country , street , pincode , user_id) VALUES ($1 , $2 , $3 , $4 , $5)`;
        yield pgClient.query(insertAddressQuery, [
            city,
            country,
            street,
            pincode,
            userId,
        ]);
        res.json({
            message: "User Signed Up",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error while signing up",
        });
    }
}));
app.listen(3000);
