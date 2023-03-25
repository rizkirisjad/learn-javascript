// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

//* Data 1:

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMImark > BMIjohn;

console.log(BMImark, BMIjohn, markHigherBMI);

//* Data 2:

const MassMark = 95;
const HeightMark = 1.88;
const MassJohn = 85;
const HeightJohn = 1.76;

const BMI_mark = MassMark / HeightMark ** 2;
const BMI_john = MassJohn / (HeightJohn * HeightJohn);
const MarkHigherBMI = BMI_mark > BMI_john;

console.log(BMI_mark, BMI_john, MarkHigherBMI);
