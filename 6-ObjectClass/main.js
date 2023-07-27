class Student {
    constructor(rollNumber , marks,fname,lname,date){
    this.roll = rollNumber;
    this.marks = marks;
    this.fname = fname;
    this.lname = lname;
    this.age
    this.date = date
    // console.log(year);
    this.avgMarks = function(){
        let sum=0
        // console.log("Inside avgmarks");
        // console.log(this.marks);
        for (let index = 0; index < this.marks.length; index++) {
            sum+=this.marks[index]
        }
        return sum/this.marks.length
    }

    this.avgMarks = this.avgMarks()

    

    this.grade = function(){
        let gradeArray = []
        for (let index = 0; index < this.marks.length; index++) {
            if(this.marks[index]>=8){
                gradeArray.push("A")
            }
            else if(this.marks[index]>=5){
                gradeArray.push("B")
            }
            else{
                gradeArray.push("C")
            }
            
        }
        return gradeArray
    }
    this.grade = this.grade()

    this.finalGrade = function(){
        if(this.avgMarks>=8){
            return "A"
        }
        else if(this.avgMarks>=5){
            return "B"
        }
        else{
            return "C"
        }
    }
    this.finalGrade = this.finalGrade()

    this.age = function(){
        console.log(""+this.date);
        var birth = new Date(this.date)
        // year = this.date.getFullYear();
        // console.log(birth.getFullYear , typeof birth.getFullYear);
        return 2023-birth.getFullYear();
    }
    this.age = this.age()

    this.dob = function(){
        var birth = new Date(this.date)
        // console.log(birth);
        return birth.getDate()+'/'+birth.getMonth()+'/'+birth.getFullYear()
    }
    this.dob = this.dob()
}
getFullName(){
    return this.fname +" "+ this.lname
}




}

let s1 = new Student(30,[9,9,9,3,6],"Ban","Tan",new Date("9/2/2001"))

// let s2 = new Student(40,[20,30,10,2,1,0],"Tan","Tony")
console.log(s1);
// console.log("Full name of student is",s1.getFullName());

// console.log("Before Swap");
// console.log(s1);
// console.log(s2);

// let tempVar = s1
// s1 =s2
// s2 = tempVar
// console.log("After Swap");
// console.log(s1);
// console.log(s2);
// console.log("Average marks is",s1.avgMarks());

// console.log("Marks of student is",s1.marks);
// console.log("Grades",s1.grade());
// console.log("Final Grade",s1.finalGrade());
// // var date =new Date("12/12/2001")
// // console.log(input);
// // console.log(date.getDate());
// console.log("DOB is",s1.dob());
// console.log("Age is",s1.age());