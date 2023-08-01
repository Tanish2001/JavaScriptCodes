const ContactDetails = require("./contactDetails")

class Contact{
    static ID = 0
    constructor(contactName,country) {
        this.id = Contact.ID++
        this.contactName = contactName
        this.country = country
        this.contactinfo = []
    }

    updateContact(parameter,newValue){
        switch (parameter) {
            case "contactName":
                if(typeof this.contactName!= "string"){
                    return "Enter a valid name"
                }
                this.contactName = newValue
                return this
            
            case "country":
                if(typeof this.contactName!= "string"){
                    return "Enter a valid country name"
                }
                this.country = newValue
                return this
        
            default:
                return "Enter a valid parameter"
        }
    }

    createNewContactInfo(typeOfContact,valueOfContact){
        let NewContactInfo = new ContactDetails(typeOfContact,valueOfContact)
        // console.log(NewContactInfo);
        this.contactinfo.push(NewContactInfo)
        // console.log("contact info added");
        return NewContactInfo
    }
}

module.exports = Contact