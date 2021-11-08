/*JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � */


const mark_mass_1 = 78;
const mark_height_1 = 1.69;
const john_mass_1 = 92;
const john_height_1 = 1.95;

const mark_mass_2 = 95;
const mark_height_2 = 1.88;
const john_mass_2 = 85;
const john_height_2 = 1.76;


// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//     and height in meter

let mark_bmi_1 = mark_mass_1/(mark_height_1 ** 2);
let john_bmi_1 = john_mass_1/(john_height_1 ** 2);


let mark_bmi_2 = mark_mass_2/(mark_height_2 ** 2);
let john_bmi_2 = john_mass_2/(john_height_2 ** 2);

let markHigherBMI = mark_bmi_1 > john_bmi_1;

console.log(mark_bmi_1);
console.log(john_bmi_1);
console.log(markHigherBMI);

let markHigherBMI2 = mark_bmi_2 > john_bmi_2;
console.log(markHigherBMI2);