const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/mydatabase';
const MONGO_URI = 'mongodb+srv://annmariavincent81_db_user:oJMiXxkfM9yfnaSj>@cluster0.ckrexdp.mongodb.net/Employee';
const PersonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:Number,
    gender:String,
    salary:Number
    });

const Person = mongoose.model(
    'modelname',
    PersonSchema,
    'personCollection'
);
//function to insert one document async function insertOne()
const doc1 = new Person({
    name: 'NHQ',
    age: 32,
    gender: 'Male',
    salary: 1234
});

const saveddoc = await doc1.save();

console.log('One document inserted');
console.log(saveddoc);

//oJMiXxkfM9yfnaSj
//annmariavincent81_db_user