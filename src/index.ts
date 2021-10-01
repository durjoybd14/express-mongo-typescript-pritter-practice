// import required packages
import cors from 'cors';
import env from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// imports routesHandler
import adminHandler from './routesHandler/adminHandler';
import rootHandler from './routesHandler/rootHandler';

// server port
const port = process.env.PORT || 5000;

// app initialization
env.config();
const app = express();
app.use(express.json());
app.use(cors());

// database connection with mongoose
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ghclx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // },
    )
    .then(() => console.log('Database successfully connected!'))
    .catch((err: mongoose.CallbackError) => console.log('Database error', err));

// all routes
app.use('/', rootHandler);
app.use('/admin', adminHandler);

// listen app
app.listen(port, () => {
    console.log('I am running Boss!');
});
