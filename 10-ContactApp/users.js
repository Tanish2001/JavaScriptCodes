const Contact = require("./contact")
const NotFound = require("./error/NotFound")
const Unauthorised = require("./error/Unauthorised")
const Validation = require("./error/validation")
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
        try {
            if (typeof fullName != "string") {
                throw new  Validation("Enter a valid name")
            }
            if (typeof gender != "string") {
                throw new Validation("Enter a valid gender")
            }
            if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") {
                throw new Validation("Enter male or female for gender")
            }
            if (typeof age != "number") {
                throw new Validation("Enter a valid age")
            }
    
            return new Users(fullName, true, gender, age)
        } catch (error) {
            console.log(error);
        }
    }

    createStaff(fullName, gender, age) {
        try {
            if (!this.isAdmin) {
                throw new  Unauthorised("Only Admin can create staff")
            }
            if (typeof fullName != "string") {
                throw new  Validation("Enter a valid name")
            }
            if (typeof gender != "string") {
                throw new Validation("Enter a valid gender")
            }
            if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") {
                throw new Validation("Enter male or female for gender")
            }
            if (typeof age != "number") {
                throw new  Validation("Enter a valid age")
            }
            let newStaff = new Users(fullName, false, gender, age)
            Users.allUsers.push(newStaff)
            return newStaff
        } catch (error) {
            console.log(error);
        }
    }

    getAllStaff() {
        if (!this.isAdmin) {
            throw new Unauthorised("only admin can use this function")
        }
        return Users.allUsers
    }

    findStaff(ID) {
        try {
            if (typeof ID != "number") {
                throw new  Validation("Enter a valid ID")
            }
            // console.log(Users.allUsers[0].userID);
            for (let index = 0; index < Users.allUsers.length; index++) {
                if (Users.allUsers[index].userID == ID) {
                    // console.log(Users.allUsers[index]);
                    return index
                }
            }
        throw new NotFound("Staff not found")    
        } catch (error) {
            console.log(error);
        }
    }

    updateStaff(ID, parameter, newValue) {
       try {
        if (!this.isAdmin) {
            throw new Unauthorised("Only Admin can update staff")
        }
        if (typeof ID != "number") {
            throw new  Validation("Enter a valid ID")
        }
        if (typeof parameter != "string") { throw new  Validation("Enter the parameter as string") }
        let index = this.findStaff(ID)
        switch (parameter) {
            case "fullName":
                // console.log("here");
                if (typeof newValue != "string") { throw new  Validation("Enter a valid name") }
                Users.allUsers[index].fullName = newValue
                // console.log(Users.allUsers[index].fullName);
                // console.log(index);
                return Users.allUsers[index]

            case "age":
                if (typeof newValue != "number") { throw new  Validation("Enter a valid age number") }
                Users.allUsers[index].age = newValue
                return Users.allUsers[index]

            case "gender":
                if (typeof newValue != "string") { throw new  Validation("Enter a valid gender") }
                Users.allUsers[index].gender = newValue
                return Users.allUsers[index]

            default:
                throw new Validation("Enter a valid parameter")
        }
       } catch (error) {
        
       }
    }

    deleteStaff(ID) {
        try {
            if (!this.isAdmin) {
                throw new Unauthorised("Only Admin can update staff")
            }
            if (typeof ID != "number") {
                throw Validation("Enter a valid ID")
            }
            let [index, message] = this.findStaff(ID)
            if (!message) {
                throw NotFound("Staff does not exsist")
            }
            // console.log(        Users.allUsers[index]        );
            Users.allUsers.splice(index, 1)
            // console.log(Users.allUsers);
            // return Users.allUsers
        } catch (error) {
            console.log(error);
        }

    }

    getSpecificStaff(ID) {
        try {
            if (!this.isAdmin) {
                throw new Error ("Only Admin can get staff")
            }
            if (typeof ID != "number") {
                throw new Error("Enter a valid ID")
            }
            let [index, message] = this.findStaff(ID)
            return Users.allUsers[index]
        } catch (error) {
         console.log(error);   
        }
    }

    findContact(contactID) {
        // if (this.isAdmin) {
        //     return "Only Admin can update staff"
        // }
        // for (let index = 0; index < this.contact.length; index++) {
        //     // console.log(this.contact.length);
        //     // console.log(this.contact[index]);
        //     if (this.contact[index].id == contactID) {
        //         // console.log("entered");
        //         return [index, true]
        //     }
        // }
        // return [-1, false]

        try {
            for (let index = 0; index < this.contact.length; index++) {
                // console.log(this.contact.length);
                // console.log(this.contact[index]);
                if (this.contact[index].id == contactID) {
                    // console.log("entered");
                    return index
                }
            }
            // return [-1, false]
            throw new NotFound("Contact Not Found")
        } catch (e) {
            // console.log("I am in catch block of find contact");
            throw e
        }

    }

    createNewContact(contactNname, contactCountry) {
        // if(this.isAdmin){
        //     return "Only staff can use this function"
        // }
        try {
            if (this.isAdmin) { throw new Unauthorised("Only staff can use this function") }

            if (typeof contactNname != "string") {
                throw new Validation("Enter a valid contact name")
            }
            if (typeof contactCountry != "string") {
                throw new Validation("Enter a valid country name")
            }
            let newContact = new Contact(contactNname, contactCountry)
            this.contact.push(newContact)
            return newContact
        } catch (error) {
            console.log(error);
        }
    }

    getAllContacts() {
        try {
            if (this.isAdmin) {
                throw new Unauthorised("Only Staffs can use this function")
            }
            return this.contact
        } catch (error) {
            console.log(error);
        }
    }

    updateContact(contactID, parameter, newValue) {
        try {
            if (this.isAdmin) {
                throw new  Unauthorised("Only Staffs can use this function")
            }
            let indexOfContact = this.findContact(contactID)
            // console.log(indexOfContact, msg);
            return this.contact[indexOfContact].updateContact(parameter, newValue)
        } catch (error) {
            console.log(error);
        }
    }

    deleteContact(ID) {
        try {
            if (this.isAdmin) {
                throw new  Unauthorised("Only Staff can use this function")
            }
            if (typeof ID != "number") {
                throw new  Validation("Enter a valid ID")
            }
            let index = this.findContact(ID)
            // console.log(        Users.allUsers[index]        );
            this.contact.splice(index, 1)
        } catch (error) {
            console.log(error);
        }
    }

    createNewContactInfo(contactID, typeOfContact, valueOfContact) {
        try {
            if (this.isAdmin) {
                throw new Unauthorised("Only staff can do this")
            }
            if (typeof contactID != "number") {
                throw new Validation("Enter a valid contact ID")
            }
            if (typeof typeOfContact != "string") {
                throw new Validation("Enter a valid contact type")
            }
            if (typeof valueOfContact != "number") {
                throw new Validation("Enter a valid contact number")
            }

            let indexOfContact = this.findContact(contactID)
            return this.contact[indexOfContact].createNewContactInfo(typeOfContact, valueOfContact)
        } catch (error) {
            console.log(error);
        }
    }

    getAllContactInfo(contactid) {
        try {
            if (this.isAdmin) {
                return "Only staff can do this"
            }
            if (typeof contactid != "number") {
                return "Enter a valid Contact ID"
            }
            // for (let index = 0; index < this.contact.length; index++) {
            //     if(this.contact[index].id == contactid){
            //         // return this.contact[index].contactinfo
            //         return this.contact[index].getAllContactInfo()
            //     }            
            // }
            // return "Not found"
            let indexOfContactInfo = this.findContact(contactid)
            return this.contact[indexOfContactInfo].getAllContactInfo()
        } catch (error) {
            console.log(error);
        }
    }

    // updateContactInfo(contactID,parameter,newValue,oldvalue){
    //     let [indexOfContactInfo,msg] = this.findContact(contactID)
    //     if(!msg){
    //         return "Contact does not exsist"
    //     }
    //     return this.contact[indexOfContactInfo].updateContactInfo(contactID,parameter,newValue,oldvalue)
    // }

    updateContactInfo(contactID, parameter, newValue, contactinfoID) {
        // if(this.isAdmin){ return "Only staff can do this"}
        try {
            if (this.isAdmin) { throw new Error("Only staff can use this function") }
        } catch (error) {
            console.log(error);
        }
        // if(typeof contactID != "number"){
        //     return "Enter a valid Contact ID"
        // }
        try {
            if (typeof contactID != "number") { throw new Error("Enter a valid contact id") }
        } catch (error) {
            console.log(error);
        }
        if (typeof contactinfoID != "number") {
            return "Enter a valid Contact Info ID"
        }
        if (typeof parameter != "string") {
            return "enter a valid parameter name"
        }
        try {
            let indexOfContactInfo = this.findContact(contactID)
            return this.contact[indexOfContactInfo].updateContactInfo(contactID, parameter, newValue, contactinfoID)
        } catch (error) {
            console.log(error);
        }
        // if(!msg){
        //     console.log("Contact does not exsist");
        //     return "Contact does not exsist"
        // }
        // console.log("=========================================");
        // console.log("contact found");
    }

    deleteContactInfo(contactID, parameter) {
        try {
            if (this.isAdmin) {
                throw new  Unauthorised("Only staff can do this")
            }
            if (typeof contactID != "number") {
                throw new  Validation("Enter a valid Contact ID")
            }
            if (typeof parameter != "string") {
                throw new Validation("enter a valid parameter name")
            }
            let indexOfContactInfo = this.findContact(contactID)
            return this.contact[indexOfContactInfo].deleteContactInfo(parameter)
        } catch (error) {
            console.log(error);
        }
    }


}


let admin = Users.newAdmin("Ban", "male", 21)
let staff1 = admin.createStaff("Tan", "male", 21)
let staff2 = admin.createStaff("eula", "female", 21)
let staff3 = admin.createStaff("diluc", "male", 21)
let staff4 = admin.createStaff("itto", "male", 21)

// admin.createNewContact("ban","ind")
// let s2 = s1.createStaff("han", "female", 31)
// console.log(u1.updateStaff(1,"fullName","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"));
// admin.updateStaff(1, "fullName", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
// admin.updateStaff(4, "age", 999999999)
// // console.log(u1.findStaff(1));
console.log(staff1.createNewContact("cyno", "IND"));
staff1.createNewContact("dehya", "IND")
staff1.createNewContact("candace", "IND")
console.log(staff1);
// // staff1.deleteContact(0)
// staff1.updateContact(4, "contactName", "Amber")
// staff1.createNewContactInfo(0,"home",99999)
// staff1.createNewContactInfo(0,"work",99999)
staff1.createNewContactInfo(1, "home", 99999)
staff1.createNewContactInfo(1, "work", 99999)
// // console.log(admin.createNewContact("hehe","ant"));
// // console.log(admin.getSpecificStaff(1));
// // console.log(staff1.getAllContactInfo(0));
staff1.updateContactInfo(0, "typeOfContact", "antartica")
// staff1.updateContactInfo(1,"typeOfContact","antartica")
console.log(staff1.getAllContactInfo(0));
console.log(staff1.getAllContactInfo(1));

// // console.log(staff1);
// // console.log(s1);
// // console.log(s2);
// // console.log(admin.getAllStaff());
// // admin.deleteStaff(1)
// // console.log(admin.getAllStaff());
// // let arrr = [0,1,2,3,4]
// // arrr.splice(1,1)
// // console.log(arrr);
// // console.log(admin.createNewContact("asd","asd"));
// // console.log(staff4);
// staff4.createNewContact("dehya", "IND")
// staff4.createNewContact("cyno", "IND")
// staff4.createNewContact("candace", "IND")
// // staff1.deleteContact(0)
// staff4.updateContact(4, "contactName", "Amber")
// // admin.updateStaff(4,"gender","female")
// staff4.createNewContactInfo(3,"home",1213)
// staff4.createNewContactInfo(3,"work",12344)
// staff4.createNewContactInfo(3,"gaming",75843)
// // staff4.createNewContactInfo(1,"work",99999)
// console.log(admin.getSpecificStaff(4));
// // console.log(staff4.getAllContactInfo(3));

// // console.log(staff4.getAllContactInfo(0));
// // staff4.updateContactInfo(0,"typeOfContact","antartica")
// // staff4.updateContactInfo(3,"typeOfContact","antartica","gaming")
// console.log(staff4.getAllContactInfo(3));
// staff4.updateContactInfo(3,"typeOfContact","zzzzzzzzzzzzzzzzz",6)
// // console.log(staff4.getAllContactInfo(0));
// console.log(staff4.getAllContactInfo(3));
// // staff4.deleteContactInfo(3,"gaming")
// // console.log(staff4.getAllContactInfo(3));
