/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK */

// Pre Challenge 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Sc',
    age: 99,
    job: 'student',
    friends: ['Michael','Peter','Steven'],
    hasDriver: false,

    getSummary: function (){
        return ` ${this.firstName} is a ${this.age} year old ${this.job} and ${this.hasDriver ? 'has a driver license' : 'doesnt have a license'} `;
    }
};
console.log(jonas);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
console.log(jonas.getSummary());

// Challenge 
const mark = {
name: 'Mark Miller',
height: 1.69,
weight: 78,

calcBMI: function(){
 this.bmi = this.weight/(this.height ** 2);
 return this.bmi;
}
};

const john = {
name: 'John Smith',
height: 1.95,
weight: 92,

calcBMI: function(){
   this.bmi = this.weight/(this.height ** 2);
   return this.bmi;
    }
};

console.log(mark.calcBMI());
console.log(`${john.calcBMI() > mark.calcBMI ? `${john.name} (${john.bmi}) BMI is higher than ${mark.name} (${mark.bmi})` : `${mark.name} (${mark.bmi}) BMI is higher than ${john.name} (${john.bmi})`}`);
