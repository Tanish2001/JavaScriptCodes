class Student {
    constructor(fname, lname, rollNumber, marks, dob, avgMarks, grades, finalGrade, age) {
        this.firstName = fname
        this.lastName = lname
        this.rollNumber = rollNumber
        this.marks = marks
        this.dob = dob
        this.avgMarks = avgMarks
        this.grades = grades
        this.finalGrade = finalGrade
        this.age = age
    }

    static newStudent(fname, lname, rollNumber, marks, dob) {
        console.log("Inside");
        if (typeof fname != "string") {
            return "Invalid First Name"
        }
        if (typeof lname != 'string') {
            return "Invalid Last Name"
        }
        if (typeof rollNumber != "number") {
            return "Invalid roll number"
        }
        if (!Array.isArray(marks)) {
            return "Marks is not an array"
        }
        for (let index = 0; index < marks.length; index++) {
            if (typeof marks[index] != 'number') {
                return "Marks are not in number format"
            }

        }
        var dob = new Date(dob)
        if (dob == "Invalid Date") {
            return 'Invalid Date'
        }

        let CalculateAverageMarks = Student.avgerageMarks(marks)

        let grades = Student.CalculateGrades(marks)

        let finalGrade = Student.CalculateFinalGrade(CalculateAverageMarks)

        let age = Student.CalculateAge(dob)

        let FormattedDateOfBirth = Student.formatDate(dob)

        return new Student(fname, lname, rollNumber, marks, FormattedDateOfBirth, CalculateAverageMarks, grades, finalGrade, age)
    }

    static formatDate(date) {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    }

    static CalculateGrades(marks) {
        let gradeArray = []
        for (let index = 0; index < marks.length; index++) {
            if (marks[index] >= 8) {
                gradeArray.push("A")
            }
            else if (marks[index] >= 5) {
                gradeArray.push("B")
            }
            else {
                gradeArray.push("C")
            }

        }
        return gradeArray
    }

    static avgerageMarks(marks) {
        let sum = 0
        for (let index = 0; index < marks.length; index++) {
            sum += marks[index]
        }
        console.log("inside avg");
        console.log(sum / marks.length);
        return sum / marks.length
    }

    static CalculateFinalGrade(CalculateAverageMmarks) {
        if (CalculateAverageMmarks >= 8) {
            return "A"
        }
        else if (CalculateAverageMmarks >= 5) {
            return "B"
        }
        else {
            return "C"
        }
    }

    static CalculateAge = function (dateOfBirth) {
        return 2023 - dateOfBirth.getFullYear();
    }
}

let s1 = Student.newStudent("t", "b", 2, [9, 2, 5], "09/21/2001")
console.log(s1);
