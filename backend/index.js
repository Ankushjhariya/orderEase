import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './config/Database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import dishRoute from './routes/dishRoute.js';
import orderRoute from './routes/orderRoute.js';
import cartRoute from './routes/cartRoutes.js';

dotenv.config({
    path:".env"
})
databaseConnection();

const app = express();
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser());
const corsOptions ={
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));
app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/dish", dishRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/cart", cartRoute);



app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at port ${process.env.PORT}`);
})