console.log("Hello");

const myFunct = (callback)=>{
    console.log("Hello World");
    let num = 10
    callback(num);
}
// myFunct()
myFunct(function(value){console.log(value)})

let players = ["Vedang","Asis","Sid"] 
// let index =0
players.forEach((player,index)=>{
    console.log(player,index);
})

const ul = document.querySelector("ul")
// console.log(ul);
let html = ``

players.forEach((player,index)=>{
    html+=`<li>${player}${" - "} ${index}</li>`
})

// ul.innerHTML = html;

// console.log(html);

class Student{
    constructor(id,name,percentage,hobbies) {
        this.id = id
        this.name = name
        this.percentage = percentage
        this.hobbies = hobbies
    }
}

let s1= new Student(1,"Asis",80,["singing","walking","sleeping"],
)
console.log(s1);
console.log(s1["hobbies"]);
// html+=s1["hobbies"]+
ul.innerHTML = html
console.log(html);

let Student1 = {
    id:101,
    name:"Asis",
    hobbies: ["sleeping"],
    login: function(){
        console.log("Student logged in");
    },
    logout: function(){
        console.log("Student logged out");
    },
    printhobbies:function(){
        console.log(this.hobbies);
    }
}

Student1.login
(Student1.printhobbies());
// console.log(this);

let h1 = document.querySelector("h1")
h1.innerText+=" Hehe boi"

let h2 = document.querySelector("#asd")
h2.innerHTML+=" IC"

let p1 = document.querySelectorAll("p")
p1.forEach(element => {
    element.innerText+=" new Test"
});

let pClass = document.querySelectorAll(".d")
pClass.forEach(element => {
    element.innerText+=" sdfdasda"
});

class StudentInfo{
    constructor(name,id,email){
        this.name = name,
        this.id = id,
        this.email = email
    }
}

let info1 = new StudentInfo("Tanish",12,"tan@gmail.com")

let info2 = new StudentInfo("Asis",20,"asis@gmail.com")

let table = document.querySelector("Table")

// table.innerHTML+=`<tr>
// <td>${info1["name"]}</td>
// <td>${info1["id"]}</td>
// <td>${info1["email"]}</td>
// </tr>`

const addToTable= (student)=>{
    table.innerHTML+=`<tr>
    <td>${student["name"]}</td>
    <td>${student["id"]}</td>
    <td>${student["email"]}</td>
    </tr>`
}
addToTable(info1)
addToTable(info2)
// table.innerHTML = as