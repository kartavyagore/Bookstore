import express, { request } from "express";
import {PORT, mongodbURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js"
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();

app.use(express.json()); //middleware for parsing the body

//middleware for handling Cross-Origin-Resource-Sharing policy
//opt 1 : Allow all origins with default of cors(*)
app.use(cors());

//opt 2 : Allow custom origins
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }))

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send("Welcome to Book Store")
}); // getting http responce from server

/*REMEMBER IT -> In app.get() -> 
1st parameter is url path, 
2nd parameter is (request, responce) in arrow function, 
It reutrns a response*/

// app.get("/admin" , (request, response)=>{
//     console.log(request)
//     return response.status(300).send("Welcome to admin panel")
// })


app.use('/books', booksRoute);

//database conn
mongoose.connect(mongodbURL).then(() => {
console.log("App connected to database");
app.listen(PORT, () => {
    console.log(`App is listening to port : ${PORT}`); // basic app listening to port 5555
});
}).catch((error)=>{
    console.log(error);
});