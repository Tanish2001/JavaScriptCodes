const ContactDetails = require("./contactDetails")

class Contact{
    static ID = 0
    constructor(contactName,country) {
        this.id = Contact.ID++
        this.contactName = contactName
        this.country = country
        this.contactinfo = []
    }

    getAllContactInfo(){
        return this.contactinfo
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
        if(typeof typeOfContact != "string"){return "Enter a valid type of contact name"}
        if(typeof valueOfContact != "number"){return "Enter a valid phone number"}
        let NewContactInfo = new ContactDetails(typeOfContact,valueOfContact)
        // console.log(NewContactInfo);
        this.contactinfo.push(NewContactInfo)
        // console.log("contact info added");
        return NewContactInfo
    }

    findContactInfo(passContactInfoID){
        if(typeof passContactInfoID!= "number"){ return "Invalid ContactInfo ID"}
        for (let index = 0; index < this.contactinfo.length; index++) {
            if(this.contactinfo[index].id==passContactInfoID){
                return [this.contactinfo[index],true]
            }            
        }
        return [-1,false]
    }

    // updateContactInfo(contactID,parameter,newValue,oldvalue){
    //     // console.log(contactinfoID);
    //     // console.log(this.contactinfo[0]);
    //     // let [index,msg]=this.findContactInfo(contactinfoID)
    //     // console.log(index);
    //     // if(!msg){
    //     //     console.log("Contact info does not exsist");
    //     //     return "Contact info does not exsist"
    //     // }
        
    //     for (let index = 0; index < this.contactinfo.length; index++) {
    //         if(this.contactinfo[index].typeOfContact==oldvalue){
    //             this.contactinfo[index].typeOfContact = newValue
    //             return "Done"
    //         }            
    //     }
    //     return "failed"

    //     // return this.contactinfo[contactID].updateContactInfo(parameter,newValue,oldvalue)
    // }

    updateContactInfo(contactID,parameter,newValue,contactinfoID){
        for (let index = 0; index < this.contactinfo.length; index++) {
            // console.log("------------------------------------");
            // console.log(this.contactinfo[index].id);
            // console.log(contactinfoID);
            if(this.contactinfo[index].id==contactinfoID){
                // this.contactinfo[index].typeOfContact = newValue
                // console.log("------------------------------------");
                // console.log(this.updateContactInfo(parameter,newValue,oldvalue));
                return this.contactinfo[index].updateContactInfo(parameter,newValue)
            }
        }
        return "failed"

        // return this.contactinfo[contactID].updateContactInfo(parameter,newValue,oldvalue)
    }

    deleteContactInfo(parameter){
        // console.log("--------------------------------------------");
        // console.log(this.contactinfo);
        for (let index = 0; index < this.contactinfo.length; index++) {
            // console.log("ok"+this.contactinfo[1].typeOfContact);
            if(this.contactinfo[index].typeOfContact==parameter){
                // console.log("entered if");
                this.contactinfo.splice(index,1)
                return "Done"
            }
            
        }
        return "Not found"
        console.log("--------------------------------------------");
        console.log(this.contactinfo);
        // return this.contactinfo.deleteContactInfo(parameter)
    }
}

module.exports = Contact