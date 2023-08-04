class ContactDetails{
    static ID = 0
    constructor(typeOfContact, valueOfContact){
        this.typeOfContact = typeOfContact
        this.valueOfContact = valueOfContact
        this.id = ContactDetails.ID++
    }

    updateContactInfo(parameter,newValue){
        // console.log(parameter,newValue);
        try {
            switch (parameter) {
                case "typeOfContact":
                    if(typeof newValue != "string"){ throw new Error ("Invalid new value")}
                    // console.log("entered typeOfContact");
                    this.typeOfContact = newValue
                    return this
                    // break;
    
                case "valueOfContact":
                    if(typeof newValue != "string"){ throw new Error ("Invalid new value")}
                    this.valueOfContact = newValue
                    return this
            
                default:
                    throw new Error ("Invalid Parameter")
    
                }
        } catch (error) {
            throw error
        }
    }

    // deleteContactInfo(parameter){
    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
            
    //     }
    // }
}

module.exports = ContactDetails