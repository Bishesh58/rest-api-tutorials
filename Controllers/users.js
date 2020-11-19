import express from 'express';
import { v4 as uuidv4 } from 'uuid';


let users =[]

export const getUsers =(req, res)=>{res.send(users)}

export const createUsers = (req, res)=>{
    const user = req.body;
    const { id } = req.params;
 
    const generatedID =uuidv4();
    const userGeneratedId = {...user, id: generatedID}
    users.push(userGeneratedId);
 
    res.send('user added to the database');
}

export const updateUser = (req, res)=>{
    const { id } = req.params;
    const {firstName, lastName, age } = req.body;
    const userToBeUpdated = users.find(user => user.id === id);

    if(firstName){
        userToBeUpdated.firstName = firstName;
    }
    if(lastName){
        userToBeUpdated.lastName = lastName;
    }
    if(age){
        userToBeUpdated.age = age;
    }
    res.send(`user with id ${id} has been updated`)
}

export const getIndividualUser = (req, res)=>{
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id)
    res.send(foundUser);
}

export const deleteUser = (req, res)=>{
    const { id } = req.params;
    users = users.filter(user => user.id !== id)
    res.send("user is deleted from database");
}