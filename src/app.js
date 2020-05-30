import express from 'express';
import bodyParser from "body-parser";
import morgan from 'morgan';
import cors from 'cors';

// importing routes
import sessionRoutes from './routes/session';
import memberRoutes from './routes/member';
import pollRoutes from './routes/poll';
import voteRoutes from './routes/vote';
import cardSetRoutes from './routes/cardset';

// initializations
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
//app.options('*', cors());

// routes
app.use('/api/cardset', cardSetRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/member', memberRoutes);
app.use('/api/poll', pollRoutes);
app.use('/api/vote', voteRoutes);

export default app;