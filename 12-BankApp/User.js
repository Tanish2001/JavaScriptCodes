class User{
    static ID = 0
    static CustomerArray= []
    constructor(fullName,contactNumber,gender,age,isAdmin){
        this.fullName = fullName
        this.contactNumber = contactNumber
        this.gender = gender
        this.age = age
        this.customerID = User.ID++
        this.isAdmin = isAdmin
        this.bankAccounts = []
    }

    static createNewAdmin(fullName,contactNumber,gender,age){
        try {
            if(typeof fullName != "string"){ throw new Error("Invalid Full name format")}
            if(typeof contactNumber != "number") { throw new Error("Invalid contact Number format")}
            if(typeof gender != "string"){ throw new Error("Invalid gender format")}
            if(typeof age != "number"){ throw new Error("Age must be a number")}

            let newAdmin = new User(fullName,contactNumber,gender,age,true)
            return newAdmin
        } catch (error) {
            console.log(error);
        }
    }

    createNewCustomer(fullName,contactNumber,gender,age){
        try {
            if(!this.isAdmin){throw new Error("Only admin can create new user")}
            if(typeof fullName != "string"){ throw new Error("Invalid Full name format")}
            if(typeof contactNumber != "number") { throw new Error("Invalid contact Number format")}
            if(typeof gender != "string"){ throw new Error("Invalid gender format")}
            if(typeof age != "number"){ throw new Error("Age must be a number")}

            let newUser = new User(fullName,contactNumber,gender,age,false)
            User.CustomerArray.push(newUser)
            return newUser
        } catch (error) {
            console.log(error);
        }
    }

    getAllCustomers(){
        try {
            if(!this.isAdmin){ throw new Error("Only admin can get all customers info")}
            return User.CustomerArray
        } catch (error) {
            console.log(error);
        }
    }

    findCustomer(customerID){
        try {
            for (let index = 0; index < User.CustomerArray.length; index++) {
                if(User.CustomerArray[index].customerID==customerID){
                    return index
                }            
            } throw new Error("Customer not found")
        } catch (error) {
            throw error
        }
    }

    getSpecificCustomer(customerID){
        try {
            if(!this.isAdmin){ throw new Error("Only admin can get customer info")}
            let indexOfCustomerInCustomerArray = this.findCustomer(customerID)
            return User.CustomerArray[indexOfCustomerInCustomerArray]
        } catch (error) {
            console.log(error);
        }
    }

    updateCustomer(customerID,parameter,newValue){
        try {
            if(!this.isAdmin){throw new Error("Only admin can update customers")}
            let indexOfCustomerInCustomerArray = this.findCustomer(customerID)
            
            switch (parameter) {
                case "fullName":
                    console.log("updating");
                    if(typeof newValue != "string"){ throw new Error("Invalid new Value format")}
                    User.CustomerArray[indexOfCustomerInCustomerArray].fullName = newValue = newValue
                    return User.CustomerArray[indexOfCustomerInCustomerArray]
                    break;
                
                case "contactNumber":
                    if(typeof newValue != "number"){ throw new Error("Enter a valid contact number")}
                    User.CustomerArray[indexOfCustomerInCustomerArray].contactNumber = newValue
                    return User.CustomerArray[indexOfCustomerInCustomerArray]
                
                case "gender":
                    if(typeof newValue != "string"){ throw new Error("Invalid new Value format")}
                    User.CustomerArray[indexOfCustomerInCustomerArray].gender = newValue = newValue
                    return User.CustomerArray[indexOfCustomerInCustomerArray]

                case "age":
                    if(typeof newValue != "number"){throw new Error("Invalid new age value")}
                    User.CustomerArray[indexOfCustomerInCustomerArray].age = newValue
                    return User.CustomerArray[indexOfCustomerInCustomerArray]

                default:
                    throw new Error("Invalid parameter value")
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    deleteCustomer(customerID){
        try {
            if(!this.isAdmin){throw new Error("Only admin can delete customers")}
            let indexOfCustomerInCustomerArray = this.findCustomer(customerID)
            User.CustomerArray.splice(indexOfCustomerInCustomerArray,1)
        } catch (error) {
            console.log(error);
        }

    }


}


let admin = User.createNewAdmin("Tanish",99999999999,"male",21)
console.log(admin);
let customer1 = admin.createNewCustomer("Cyno",8888888888,"male",19)
let customer2 = admin.createNewCustomer("Amber",1111111111,"female",21)
console.log("----------------------------------------------------");
console.log(admin.updateCustomer(1,"fullName","Raiden"));
console.log(admin.getAllCustomers());