import dotenv from 'dotenv'

dotenv.config();

export const CONNECTION_STRING = process.env.CONNECTION_STRING 
export const PORT = process.env.PORT || 4000;
export const USER_USERNAME_TEST = process.env.USER_USERNAME_TEST
export const USER_EMAIL_TEST = process.env.USER_EMAIL_TEST
export const USER_PASSWORD_TEST = process.env.USER_PASSWORD_TEST
export const SECRET = process.env.SECRET
