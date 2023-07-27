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
        this.dateOfResignation = dateOfResignation
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

    static newEmployee(fname, lname, employeeID, salaryPerMonth, designation, department, contactNumber, personalEmail, workEmail, dateOfBirth, address, city, country, office) {
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

        let dateOfJoining = Employee.getDate()

        let dateOfResignation = new Date("7/27/2024")

        // let dateOfResignation=Employee.getDate()

        let dob = new Date(dateOfBirth)
        if (dob == "Invalid Date") {
            return "Invalid Date of Birth"
        }

        let tempDate = new Date()

        let age = Employee.calculateAge(dob, tempDate)

        let totalExperienceInCompany = Employee.calculateTotalExperienceInCompany(dateOfJoining, dateOfResignation)

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

        let FormattedDateOfJoining = Employee.formatdate(dateOfJoining)

        let FormattedDateOfResign = Employee.formatdate(dateOfResignation)


        return new Employee(fname, lname, employeeID, fullName, salaryPerMonth, annualSalary, designation, department, FormattedDateOfJoining, FormattedDateOfResign, totalExperienceInCompany, contactNumber, setPersonalEmail, workEmail, FormattedDateOfBirth, age, address, city, country, office)

    }

    static printfullname(fname, lname) {
        return fname + " " + lname
    }

    static calculateAnnualSalary(salaryPerMonth) {
        return salaryPerMonth * 12
    }

    static calculateTotalExperienceInCompany(dateOfJoining, dateOfResignation) {
        // console.log(dateOfResignation.getTime());
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
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
}

let e1 = Employee.newEmployee("Ban", "Tan", 123, 20, "Engg", "Support", 9898989898, "bantan@gmail.com", "bantan@aurionpro.com", "9/9/2001", "Near South pole,Antartica-609609", "Polar Bear District", "Antartica")

console.log(e1);