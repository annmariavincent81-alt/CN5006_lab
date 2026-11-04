//Ann Vincent 
//289156
//week4 - portfolio task
const mongoose = require('mongoose');
//connecting mongoDB Atlas
const MONGO_URI = 'mongodb+srv://annmariavincent81_db_user:P0UJOgYu8uPgELmk@cluster0.ckrexdp.mongodb.net/Employee';
//added city field to the schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  gender: String,
  salary: Number,
  city: String // Extended field 
});

const Person = mongoose.model('ExtendedPerson', PersonSchema, 'personCollection');
//inserting records with city field
async function insertCityRecords() {
  const cityPersons = [
    { name: 'Alice Smith', age: 28, gender: 'Female', salary: 4800, city: 'London' },
    { name: 'Bob Jones', age: 35, gender: 'Male', salary: 5200, city: 'London' },
    { name: 'Charlie Brown', age: 31, gender: 'Male', salary: 6100, city: 'Manchester' },
    { name: 'Diana Prince', age: 29, gender: 'Female', salary: 5900, city: 'London' },
    { name: 'Edward Elric', age: 24, gender: 'Male', salary: 4100, city: 'Birmingham' }
  ];

  const result = await Person.insertMany(cityPersons);
  console.log('Inserted Records with City Field:');
  console.log(result);
}
//creating a query to find people living in a specific city
async function findPeopleByCity(targetCity) {
  console.log(`\n--- Query Results: People living in "${targetCity}" ---`);
  const docs = await Person.find({ city: targetCity })
    .select('name age gender salary city');

  docs.forEach((doc) => {
    console.log(`Name: ${doc.name} | Age: ${doc.age} | Salary: £${doc.salary} | City: ${doc.city}`);
  });
}
//main function  
async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to Database for Week 4 Portfolio Activity');

    await insertCityRecords();
    await findPeopleByCity('London');
  } catch (err) {
    console.error('Portfolio Execution Error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Database Connection Closed');
  }
}

main();