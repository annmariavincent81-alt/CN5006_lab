const mongoose = require('mongoose');
// connecting mongoDB Atlas
const MONGO_URI = 'mongodb+srv://annmariavincent81_db_user:P0UJOgYu8uPgELmk@cluster0.ckrexdp.mongodb.net/Employee';
//define schema 
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  gender: String,
  salary: Number
});
// create model
const Person = mongoose.model('Person', PersonSchema, 'personCollection');
//inserting one document
async function insertOne() {
  const doc1 = new Person({
    name: 'NHQ',
    age: 32,
    gender: 'Male',
    salary: 1234
  });
  const savedDoc = await doc1.save();
  console.log('One document inserted:');
  console.log(savedDoc);
}
//inserting many doc 
async function insertMany() {
  const manypersons = [
    { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456 },
    { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000 },
    { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402 },
    { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519 }
  ];
  const result = await Person.insertMany(manypersons);
  console.log('Many documents inserted:');
  console.log(result);
}
//displaying all documents in the collection
async function findAll() {
  const docs = await Person.find({})
    .sort({ salary: 1 })
    .select('name salary age')
    .limit(100);

  console.log('\n--- Showing All Documents ---');
  docs.forEach((doc) => {
    console.log(`Age: ${doc.age} | Name: ${doc.name} | Salary: ${doc.salary}`);
  });
}
//finding female aged 30 or above
async function findFemalesOver30() {
  const givenAge = 30;
  const docs = await Person.find({
    gender: 'Female',
    age: { $gte: givenAge }
  })
    .sort({ salary: 1 })
    .select('name salary age')
    .limit(10);

  console.log(`\n--- Females Aged ${givenAge} or Above ---`);
  docs.forEach((doc) => {
    console.log(`Age: ${doc.age} | Name: ${doc.name} | Salary: ${doc.salary}`);
  });
}
//counting total documents in the collection
async function countDocuments() {
  const count = await Person.countDocuments();
  console.log('\nTotal Documents Count:', count);
}
//deleting doc where age >= 45
async function deleteManyPersons() {
  const result = await Person.deleteMany({
    age: { $gte: 45 }
  });
  console.log('\nDeleted documents:', result);
}
// updating female salary
async function updateManyPersons() {
  const result = await Person.updateMany(
    { gender: 'Female' },
    { salary: 5555 }
  );
  console.log('\nUpdate successful:', result);
}
//main function to run all the above functions
async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected successfully to MongoDB Atlas');

    await insertOne();
    await insertMany();
    await findAll();
    await findFemalesOver30();
    await countDocuments();
    await deleteManyPersons();
    await updateManyPersons();
  } catch (err) {
    console.error('Error during execution:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Connection closed');
  }
}

main();