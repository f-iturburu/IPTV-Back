import express from 'express'
import cors from 'cors';
import ChannelRoutes from './routes/list.Routes.js';
import UserRoutes from './routes/user.Routes.js';

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(ChannelRoutes);
app.use(UserRoutes);

export default app;
