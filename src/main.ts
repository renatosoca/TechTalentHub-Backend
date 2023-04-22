import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { router } from './routers';
import { connectDB } from './database';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/', router);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server is running on port ' + port));