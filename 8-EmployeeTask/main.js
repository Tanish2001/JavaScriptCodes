class Employee {

    constructor(fname, lname, employeeID, fullName, salaryPerMonth, annualSalary, designation, department, dateOfJoining, dateOfResignation, totalExperienceInCompany, contactNumber, personalEmail, workEmail, dateOfBirth, age, address, city, country, office, reportingOfficer, subordinates) {
        this.fname = fname
        this.lname = lname
        this.employeeID = employeeID
        this.fullName = fullName
        this.salaryPerMonth = salaryPerMonth
        this.annualSalary = annualSalary
        this.designation = designation
        this.department = department
        this.dateOfJoining = dateOfJoining
        this.dateOfResignation = null
        this.totalExperienceInCompany = totalExperienceInCompany
        this.contactNumber = contactNumber
        this.personalEmail = personalEmail
        this.workEmail = workEmail
        this.dateOfBirth = dateOfBirth
        this.age = age
        this.address = address
        this.city = city
        this.country = country
        this.office = office
        this.reportingOfficer = reportingOfficer
        this.subordinates = subordinates
    }
    static settingreportingOfficer = null

    static newEmployee(fname, lname, employeeID, salaryPerMonth, designation, department, contactNumber, personalEmail, workEmail, dateOfBirth, address, city, country, office,dateOfJoining) {
        if (typeof fname != "string") {
            return "Invalid First Name"
        }
        if (typeof lname != "string") {
            return "Invalid last name"
        }
        if (typeof employeeID != "number") {
            return "Invalid Employee ID"
        }
        if (typeof salaryPerMonth != "number") {
            return "Invalid Salary Amount"
        }
        if (typeof designation != "string") {
            return "Invalid Designation Format"
        }
        if (typeof department != "string") {
            return "Invalid Department Format"
        }
        if (typeof contactNumber != "number") {
            return "Invalid Contact Number"
        }
        if (contactNumber.toString().length > 10) {
            return "Contact Number Exceeds length of 10 digits"
        }
        if (contactNumber.toString().length < 10) {
            // console.log(contactNumber.toString().length);
            return "Contact Number length less than 10 digits"
        }

        let fullName = Employee.printfullname(fname, lname)

        let annualSalary = Employee.calculateAnnualSalary(salaryPerMonth)
        
        // console.log(dateOfJoining);

        let setDateOfJoining = new Date(dateOfJoining)
        
        // console.log(setDateOfJoining);
        // let dateOfResignation=Employee.getDate()

        let dob = new Date(dateOfBirth)
        if (dob == "Invalid Date") {
            return "Invalid Date of Birth"
        }

        let tempDate = new Date()

        let age = Employee.calculateAge(dob, tempDate)

        // let totalExperienceInCompany = Employee.calculateTotalExperienceInCompany(dateOfJoining, dateOfResignation)

        let setPersonalEmail = Employee.validateEmail(personalEmail)
        if (typeof setPersonalEmail != "string") {
            // console.log(typeof setPersonalEmail)
            return "Invalid Personal Email"
        }

        let setWorkEmail = Employee.validateEmail(workEmail)
        if (typeof setWorkEmail != "string") {
            // console.log(typeof setPersonalEmail)
            return "Invalid Work Email"
        }

        let FormattedDateOfBirth = Employee.formatdate(dob)

        let FormattedDateOfJoining = Employee.formatdate(setDateOfJoining)

        // let FormattedDateOfJoining = Employee.formatdate(dateOfJoining)

        // let dateOfResignation = null

        // let FormattedDateOfResign = Employee.formatdate(dateOfResignation)

        let subordinates = []

        return new Employee(fname, lname, employeeID, fullName, salaryPerMonth, annualSalary, designation, department, setDateOfJoining, this.dateOfResignation, this.totalExperienceInCompany, contactNumber, setPersonalEmail, workEmail, FormattedDateOfBirth, age, address, city, country, office, Employee.settingreportingOfficer, subordinates)

    }

    static printfullname(fname, lname) {
        return fname + " " + lname
    }

    static calculateAnnualSalary(salaryPerMonth) {
        return salaryPerMonth * 12
    }

    static calculateTotalExperienceInCompany(dateOfJoining, dateOfResignation) {
        // console.log(dateOfResignation.getTime());
        // console.log(dateOfJoining,dateOfResignation);
        return Math.floor((dateOfResignation.getTime() - dateOfJoining.getTime()) / (1000 * 60 * 60 * 24))
    }

    static getDate() {
        return new Date()
    }

    static calculateAge(dob, tempDate) {
        // console.log(dob.getFullYear()-tempDate.getFullYear());
        return tempDate.getFullYear() - dob.getFullYear()
    }

    static validateEmail(email) {
        // console.log(email);
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (validRegex.test(email)) {
            // console.log("inside validregex");
            return email
        }
        return false
    }

    static formatdate(date) {
        // console.log(date);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }

    setDateOfResign(){
        this.dateOfResignation = new Date()
        // console.log(this.dateOfJoining);
        this.totalExperienceInCompany=Employee.calculateTotalExperienceInCompany(this.dateOfJoining,this.dateOfResignation)
        Employee.formatdate(this.dateOfJoining)
        this.setDateOfJoining =Employee.formatdate(this.dateOfJoining)
        this.dateOfResignation = Employee.formatdate(this.dateOfResignation)
        // Employee.formatdate(this.dateOfResignation)
        // console.log(Employee.formatdate(new Date()));
        // console.log(this.dateOfResignation);

    }

    setManager(obj) {
        // console.log("inside setmanager");
        // console.log(obj);
        // console.log(obj.constructor);
        if (obj.constructor == Employee) {
            this.reportingOfficer = obj
        }
        else {
            console.log("Invalid Manager Input");
            return "Invalid Manager Input"
        }
    }

    pushSubordinates(obj) {
        if (obj.constructor == Employee) {
            this.subordinates.push(obj)
        }
        else{
            console.log("Invalid Subordinate");
            return "Invalid Subordinate"
        }

    }
}


let manager = Employee.newEmployee("Manager", "man", 321, 50, "Engg", "Manager", 8989898989, "manager@gmail.com", "manager@aurionpro.com", "01/01/1990", "xdassx", "thane", "india", "aurionpro","7/7/2020")

let e1 = Employee.newEmployee("Ban", "Tan", 123, 20, "Engg", "Support", 9898989898, "bantan@gmail.com", "bantan@aurionpro.com", "9/9/2001", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

let subordinate1 = Employee.newEmployee("subordinate1", "Tan", 123, 20, "Engg", "Support", 9898989898, "subordinate1@gmail.com", "subordinate1@aurionpro.com", "1/1/2000", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

let subordinate2 = Employee.newEmployee("subordinate2", "Tan", 123, 20, "Engg", "Support", 9898989898, "subordinate2@gmail.com", "subordinate2@aurionpro.com", "1/1/2000", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

let subordinate3 = Employee.newEmployee("subordinate3", "Tan", 123, 20, "Engg", "Support", 9898989898, "subordinate3@gmail.com", "subordinate3@aurionpro.com", "1/1/2000", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

let subordinate4 = Employee.newEmployee("subordinate4", "Tan", 123, 20, "Engg", "Support", 9898989898, "subordinate4@gmail.com", "subordinate4@aurionpro.com", "1/1/2000", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica", "aurionpro","7/7/2020")

e1.setManager(manager)
subordinate1.setManager(manager)
subordinate1.setDateOfResign()
console.log("Manager setted");
e1.pushSubordinates(subordinate1)
e1.pushSubordinates(subordinate2)
e1.pushSubordinates(subordinate3)
e1.pushSubordinates(subordinate4)
console.log("Subordinates Setted");
e1.setDateOfResign();

e1.reportingOfficer = manager
// e1.setReportingOfficer() //todo
// e1.subordinates.push("A","B","C")
console.log(e1);
// console.log(manager)