const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true, useUnifiedTopology: true });
 
//--------Fruits stuff---------//

// fruit schema to describerize these heckin objects
const fruitSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: [true, "Error: no name specified" ]
    },
       rating: {
           type: Number,
           min: 1,
           max: 10 
       }, 
       review: String 
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Sweet and crunchy"
});
//fruit.save();

const banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "The epitome of organic matter"
});
 
const lemon = new Fruit({
    name: "Lemon",
    rating: 4,
    review: "Sour as a very bad word!!"
});

const froot = new Fruit({
    rating: 10,
    review: "Yummy"
});
 
//froot.save();

// add em in bulk babayy
/*Fruit.insertMany([banana, lemon], (error)=> {
    if(error){
        console.log(err);
    } else {
        console.log("Fruit has been successfully assimilated into fruitDB");
    }
});
*/

const orange = new Fruit({
    name: "orange",
    rating: 8
});
 
//orange.save();

Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        //console.log(fruits);
        fruits.forEach(fruit => {
            console.log("[Fruits] " + fruit.name);
        });
    }
});

/*Fruit.update({_id: "5e7e51f21c263436f4600818"}, {review: "Juicy fruit"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
});
*/
Fruit.deleteMany({name: "Banana"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
});

Fruit.deleteMany({name: "orange"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
});


//--------People stuff---------//

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});
const Person = mongoose.model("Person", personSchema);

const johnMyBoi = new Person({
    firstName: "John",
    lastName: "Doe",
    age: 29
});
//johnMyBoi.save();

const jeff = new Person({
    firstName: "Jeff",
    lastName: "Smith",
    age: 12
});

const geoff = new Person({
    firstName: "Geoff",
    lastName: "Carpenter",
    age: 11
});

/*Person.insertMany([jeff,geoff], (error)=> {
    if(error){
        console.log(err);
    } else {
        console.log("Person has been successfully assimilated into fruitDB");
    }
});
*/

Person.find(function(error, people) {
    if(error){
        console.log(error);
    } else {
        //console.log(people);
        people.forEach(person => {
            console.log("[People] Name: " + person.firstName + " " + person.lastName + ". Age: " + person.age);
        });
    }
});

Person.update({_id: "5e7e4c2f8384b60a0412f0d3"}, {age: 30}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
});

app.listen(3000, ()=>{
    console.log("Server is vibing on port 3000");
});
