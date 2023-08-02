const Contact = require("./contact")
class Users {
    static ID = 0
    static allUsers = []
    constructor(fullName, isAdmin, gender, age) {
        this.userID = Users.ID++
        this.fullName = fullName
        this.isAdmin = isAdmin
        this.gender = gender
        this.age = age
        this.contact = []
    }

    static newAdmin(fullName, gender, age) {
        if (typeof fullName != "string") {
            return "Enter a valid name"
        }
        if (typeof gender != "string") {
            return "Enter a valid gender"
        }
        if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") {
            return "Enter male or female for gender"
        }
        if (typeof age != "number") {
            return "Enter a valid age"
        }

        return new Users(fullName, true, gender, age)
    }

    createStaff(fullName, gender, age) {
        if (!this.isAdmin) {
            return "Only Admin can create staff"
        }
        if (typeof fullName != "string") {
            return "Enter a valid name"
        }
        if (typeof gender != "string") {
            return "Enter a valid gender"
        }
        if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") {
            return "Enter male or female for gender"
        }
        if (typeof age != "number") {
            return "Enter a valid age"
        }
        let newStaff = new Users(fullName, false, gender, age)
        Users.allUsers.push(newStaff)

        return newStaff
    }

    getAllStaff() {
        if (!this.isAdmin) {
            return "Only Admin can update staff"
        }
        return Users.allUsers
    }

    findStaff(ID) {
        // console.log(Users.allUsers[0].userID);
        for (let index = 0; index < Users.allUsers.length; index++) {
            if (Users.allUsers[index].userID == ID) {
                // console.log(Users.allUsers[index]);
                return [index, true]
            }
        }
        return [-1, false]
    }

    updateStaff(ID, parameter, newValue) {
        if (!this.isAdmin) {
            return "Only Admin can update staff"
        }
        if (typeof ID != "number") {
            return "Enter a valid ID"
        }
        let [index, message] = this.findStaff(ID)
        if (!message) {
            return "Staff does not exsist"
        }
        switch (parameter) {
            case "fullName":
                // console.log("here");
                Users.allUsers[index].fullName = newValue
                // console.log(Users.allUsers[index].fullName);
                // console.log(index);
                return Users.allUsers[index]

            case "age":
                Users.allUsers[index].age = newValue
                return Users.allUsers[index]

            case "gender":
                Users.allUsers[index].gender = newValue
                return Users.allUsers[index]

            default:
                return "Enter a valid parameter"
        }
    }

    deleteStaff(ID) {
        if (!this.isAdmin) {
            return "Only Admin can update staff"
        }
        if (typeof ID != "number") {
            return "Enter a valid ID"
        }
        let [index, message] = this.findStaff(ID)
        if (!message) {
            return "Staff does not exsist"
        }
        // console.log(        Users.allUsers[index]        );
        Users.allUsers.splice(index, 1)
        // console.log(Users.allUsers);
        // return Users.allUsers

    }

    getSpecificStaff(ID) {
        if (!this.isAdmin) {
            return "Only Admin can update staff"
        }
        if (typeof ID != "number") {
            return "Enter a valid ID"
        }
        let [index, message] = this.findStaff(ID)
        if (!message) {
            return "Staff does not exsist"
        }
        return Users.allUsers[index]
    }

    findContact(contactID) {
        for (let index = 0; index < this.contact.length; index++) {
            // console.log(this.contact.length);
            // console.log(this.contact[index]);
            if (this.contact[index].id == contactID) {
                // console.log("entered");
                return [index, true]
            }
        }
        return [-1, false]

    }

    createNewContact(contactNname, contactCountry) {
        if(this.isAdmin){
            return "Only staff can use this function"
        }
        let newContact = new Contact(contactNname, contactCountry)
        this.contact.push(newContact)
        return newContact
    }

    getAllContacts() {
        if (this.isAdmin) {
            return "Only Staffs can use this function"
        }
        return this.contact
    }

    updateContact(contactID, parameter, newValue) {
        if (this.isAdmin) {
            return "Only Staffs can use this function"
        }
        let [indexOfContact, msg] = this.findContact(contactID)
        // console.log(indexOfContact, msg);
        if (!msg) {
            return "Contact does not exsist"
        }
        return this.contact[indexOfContact].updateContact(parameter, newValue)
    }

    deleteContact(ID) {
        if (this.isAdmin) {
            return "Only Staff can use this function"
        }
        if (typeof ID != "number") {
            return "Enter a valid ID"
        }
        let [index, message] = this.findContact(ID)
        if (!message) {
            return "Staff does not exsist"
        }
        // console.log(        Users.allUsers[index]        );
        this.contact.splice(index, 1)
    }

    createNewContactInfo(contactID, typeOfContact, valueOfContact){
        if(typeof contactID != "number"){
            return "Enter a valid contact ID"
        }
        if(typeof typeOfContact!= "string"){
            return "Enter a valid contact type"
        }
        if(typeof valueOfContact!="number"){
            return "Enter a valid contact number"
        }

        let [indexOfContact, msg] = this.findContact(contactID)
        // console.log(indexOfContact, msg);
        if (!msg) {
            return "Contact does not exsist"
        }
        return this.contact[indexOfContact].createNewContactInfo(typeOfContact,valueOfContact)
    }

    getAllContactInfo(contactid){
        // for (let index = 0; index < this.contact.length; index++) {
        //     if(this.contact[index].id == contactid){
        //         // return this.contact[index].contactinfo
        //         return this.contact[index].getAllContactInfo()
        //     }            
        // }
        // return "Not found"
        let [indexOfContactInfo,msg] = this.findContact(contactid)
        if(!msg){
            return "Contact does not exsist"
        }
        return this.contact[indexOfContactInfo].getAllContactInfo()
    }

    // updateContactInfo(contactID,parameter,newValue,oldvalue){
    //     let [indexOfContactInfo,msg] = this.findContact(contactID)
    //     if(!msg){
    //         return "Contact does not exsist"
    //     }
    //     return this.contact[indexOfContactInfo].updateContactInfo(contactID,parameter,newValue,oldvalue)
    // }

    updateContactInfo(contactID,parameter,newValue,contactinfoID){
        if(this.isAdmin){ return "Only staff can do this"}
        let [indexOfContactInfo,msg] = this.findContact(contactID)
        if(!msg){
            console.log("Contact does not exsist");
            return "Contact does not exsist"
        }
        // console.log("=========================================");
        // console.log("contact found");
        return this.contact[indexOfContactInfo].updateContactInfo(contactID,parameter,newValue,contactinfoID)
    }

    deleteContactInfo(contactID,parameter){
        let [indexOfContactInfo,msg] = this.findContact(contactID)
        if(!msg){
            return "Contact does not exsist"
        }
        return this.contact[indexOfContactInfo].deleteContactInfo(parameter)
    }


}


let admin = Users.newAdmin("Ban", "male", 21)
let staff1 = admin.createStaff("Tan", "male", 21)
let staff2 = admin.createStaff("eula", "female", 21)
let staff3 = admin.createStaff("diluc", "male", 21)
let staff4 = admin.createStaff("itto", "male", 21)

// let s2 = s1.createStaff("han", "female", 31)
// console.log(u1.updateStaff(1,"fullName","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"));
admin.updateStaff(1, "fullName", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
admin.updateStaff(4, "age", 999999999)
// console.log(u1.findStaff(1));
staff1.createNewContact("cyno", "IND")
staff1.createNewContact("dehya", "IND")
staff1.createNewContact("candace", "IND")
// staff1.deleteContact(0)
staff1.updateContact(4, "contactName", "Amber")
staff1.createNewContactInfo(0,"home",99999)
staff1.createNewContactInfo(0,"work",99999)
staff1.createNewContactInfo(1,"home",99999)
staff1.createNewContactInfo(1,"work",99999)
// console.log(admin.getSpecificStaff(1));
// console.log(staff1.getAllContactInfo(0));
// staff1.updateContactInfo(0,"typeOfContact","antartica")
// staff1.updateContactInfo(1,"typeOfContact","antartica")
// console.log(staff1.getAllContactInfo(0));
// console.log(staff1.getAllContactInfo(1));

// console.log(staff1);
// console.log(s1);
// console.log(s2);
// console.log(admin.getAllStaff());
// admin.deleteStaff(1)
// console.log(admin.getAllStaff());
// let arrr = [0,1,2,3,4]
// arrr.splice(1,1)
// console.log(arrr);
// console.log(admin.createNewContact("asd","asd"));
// console.log(staff4);
staff4.createNewContact("dehya", "IND")
staff4.createNewContact("cyno", "IND")
staff4.createNewContact("candace", "IND")
// staff1.deleteContact(0)
staff4.updateContact(4, "contactName", "Amber")
staff4.createNewContactInfo(3,"home",1213)
staff4.createNewContactInfo(3,"work",12344)
staff4.createNewContactInfo(3,"gaming",75843)
// staff4.createNewContactInfo(1,"work",99999)
console.log(admin.getSpecificStaff(4));
// console.log(staff4.getAllContactInfo(3));

// console.log(staff4.getAllContactInfo(0));
// staff4.updateContactInfo(0,"typeOfContact","antartica")
// staff4.updateContactInfo(3,"typeOfContact","antartica","gaming")
console.log(staff4.getAllContactInfo(3));
staff4.updateContactInfo(3,"typeOfContact","zzzzzzzzzzzzzzzzz",6)
// console.log(staff4.getAllContactInfo(0));
console.log(staff4.getAllContactInfo(3));
// staff4.deleteContactInfo(3,"gaming")
// console.log(staff4.getAllContactInfo(3));
