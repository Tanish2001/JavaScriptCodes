// let e = new Error("ic")
// console.log(e);
// e.name = "bantan"
// e.stack = "hi"
// console.log(e.name);
// console.log(e.message);
// console.log(e.stack);
// console.log(e.stack);

function setNname(name) {
    try {
        if (typeof name != "string"){
            throw new Error("Enter a string")
        }
        console.log("Your name is"+ name);
    } catch (error) {
        console.log(error);
    }
}
setNname(1)
