import app from "./app.js";
import { PORT, USER_EMAIL_TEST, USER_USERNAME_TEST, USER_PASSWORD_TEST } from "./config.js";
import './db.js'
import express from 'express';
import bcrypt from 'bcrypt'
import path from 'path';
import { fileURLToPath } from 'url';
import User from './models/user.Model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(PORT, async () => {
    console.log(`La app esta escuchando en el puerto: ${PORT}`);
    try
    {
        if((await User.find()).length === 0)
        {
            const salt = await bcrypt.genSalt(10);
            const passwordHashed = await bcrypt.hash(USER_PASSWORD_TEST, salt);
            User.create(
                {
                 username:USER_USERNAME_TEST,
                 email: USER_EMAIL_TEST,
                 password: passwordHashed,
                 role:1
            })
        }
    }
    catch (error) {
        console.log(error);
    }
});


app.use(express.static(path.join(__dirname, '../public')));