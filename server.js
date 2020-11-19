import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {getUsers, createUsers, updateUser, getIndividualUser, deleteUser} from './Controllers/users.js';

const app = express();
const port = 5000 || process.env.PORT;


//middleware
app.use(express.json())

//routes
//get users
app.get('/users', getUsers)

//create users
app.post('/users', createUsers)

//update users
app.patch('/users/:id', updateUser)

//get the individaul user
app.get('/users/:id', getIndividualUser)

//delete user
app.delete('/users/:id', deleteUser)

//porfi
app.listen(port, ()=> console.log("listening to port 5000"))