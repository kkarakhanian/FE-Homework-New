'use strict';

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = true;
      this.attendanceIndex++;
    } else {
      console.warn("The attendance array is already full (25 records).");
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = false;
      this.attendanceIndex++;
    } else {
      console.warn("The attendance array is already full (25 records).");
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();

    const attendedClasses = this.attendance.filter(item => item !== null);
    const presentCount = attendedClasses.filter(item => item === true).length;

    const averageAttendance = attendedClasses.length > 0 ? presentCount / attendedClasses.length : 0;

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Good@";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return "Good, but it can be better";
    } else {
      return "Always could be better";
    }
  }
}

// Створення екземплярів студентів
const student1 = new Student("Іван", "Петров", 2003);
const student2 = new Student("Марія", "Сидорова", 2002);
const student3 = new Student("Олег", "Коваленко", 2004);

console.log("--- Student 1: Ivan Petrov ---");
// Додаємо оцінки
student1.grades.push(95, 88, 92, 90, 98);
console.log(`Age: ${student1.getAge()} year(s)`); // Очікуваний вік
console.log(`Average score: ${student1.getAverageGrade().toFixed(2)}`);

for (let i = 0; i < 20; i++) {
  student1.present();
}
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.absent();
console.log(`Result: ${student1.summary()}`);


console.log("\n--- Student 2: Mariia Sidorova ---");
student2.grades.push(70, 75, 80, 65, 72);
console.log(`Age: ${student2.getAge()} year(s)`);
console.log(`Average score: ${student2.getAverageGrade().toFixed(2)}`);

for (let i = 0; i < 15; i++) {
  student2.present();
}
for (let i = 0; i < 10; i++) {
  student2.absent();
}
console.log(`Result: ${student2.summary()}`);


console.log("\n--- Student 3: Oleh Kovalenko ---");
student3.grades.push(60, 55, 62, 58, 65);
console.log(`Age: ${student3.getAge()} year(s)`);
console.log(`Average score: ${student3.getAverageGrade().toFixed(2)}`);

for (let i = 0; i < 5; i++) {
  student3.present();
}
for (let i = 0; i < 20; i++) {
  student3.absent();
}
console.log(`Result: ${student3.summary()}`);