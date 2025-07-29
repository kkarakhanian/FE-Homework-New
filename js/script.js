"use strict";

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = []; // Масив для оцінок
        this.attendance = new Array(25).fill(null);
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
        const firstEmptyIndex = this.attendance.findIndex(item => item === null);
        if (firstEmptyIndex !== -1) {
            this.attendance[firstEmptyIndex] = true;
        } else {
            console.warn("The attendance array is full. It is not possible to add a new entry.");
        }
    }

    absent() {
        const firstEmptyIndex = this.attendance.findIndex(item => item === null);
        if (firstEmptyIndex !== -1) {
            this.attendance[firstEmptyIndex] = false;
        } else {
            console.warn("The attendance array is full. It is not possible to add a new entry.");
        }
    }

    _getAverageAttendance() {
        const attendedClasses = this.attendance.filter(item => item === true).length;
        const totalClassesRecorded = this.attendance.filter(item => item !== null).length;

        if (totalClassesRecorded === 0) {
            return 0;
        }
        return attendedClasses / totalClassesRecorded;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this._getAverageAttendance();

        if (averageGrade > 90 && averageAttendance > 0.9) {
            return "Good!";
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return "So so";
        } else {
            return "Bad!";
        }
    }
}

// Student 1
const student1 = new Student("Joe", "Doe", 2003);
student1.grades.push(95, 92, 98, 90, 100);
for (let i = 0; i < 23; i++) {
    student1.present();
}
student1.absent();
student1.present();

console.log(` ${student1.firstName} ${student1.lastName}`);
console.log(`Age: ${student1.getAge()} year(s)`);
console.log(`Average score: ${student1.getAverageGrade().toFixed(2)}`);
console.log(`Attendance (number): ${student1.attendance.filter(item => item !== null).length} / ${student1.attendance.length}`);
console.log(`Conclusion: ${student1.summary()}`);
student1.present();
console.log('');


// Student 2
const student2 = new Student("Mary", "Johnson", 2002);
student2.grades.push(80, 85, 75, 90, 88);
for (let i = 0; i < 20; i++) {
    student2.present();
}
for (let i = 0; i < 5; i++) {
    student2.absent();
}


console.log(`${student2.firstName} ${student2.lastName}`);
console.log(`Age: ${student2.getAge()} year(s)`);
console.log(`Average score: ${student2.getAverageGrade().toFixed(2)}`);
console.log(`Attendance (number): ${student2.attendance.filter(item => item !== null).length} / ${student2.attendance.length}`);
console.log(`Conclusion: ${student2.summary()}`);
console.log('');


// Student 3
const student3 = new Student("Eduard", "Martinez", 2004);
student3.grades.push(60, 50, 70, 65);
for (let i = 0; i < 10; i++) {
    student3.present();
}
for (let i = 0; i < 15; i++) {
    student3.absent();
}

console.log(`--- ${student3.firstName} ${student3.lastName} ---`);
console.log(`Age: ${student3.getAge()} year(s)`);
console.log(`Average score: ${student3.getAverageGrade().toFixed(2)}`);
console.log(`Attendance (number): ${student3.attendance.filter(item => item !== null).length} / ${student3.attendance.length}`);
console.log(`Conclusion: ${student3.summary()}`);
console.log('');

// if .present() and .absent() when the array is full
const student4 = new Student("Dino", "Fully", 2000);
for (let i = 0; i < 25; i++) {
    student4.present();
}
console.log(`--- ${student4.firstName} ${student4.lastName} ---`);
console.log(`Відвідуваність (кількість): ${student4.attendance.filter(item => item !== null).length} / ${student4.attendance.length}`);
student4.present();
student4.absent();
console.log('');