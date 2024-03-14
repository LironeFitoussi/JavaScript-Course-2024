const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }. His friends are ${this.friends.join(", ")} and ${
      this.hasDriverLicense
        ? "has a driver license"
        : "doesnt have a driver license"
    }.`;
  },
};

console.log(jonas.getSummary());
