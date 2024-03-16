/* Write your code below. Good luck! 🙂 */
class Person {
  constructor(fullName, mass, height) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
  }

  calcBMI() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

const mark = new Person("Mark Miller", 78, 1.69);
const john = new Person("John Smith", 92, 1.95);

if (mark.calcBMI(0) > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
