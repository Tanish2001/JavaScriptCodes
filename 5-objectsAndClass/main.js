const myobj = {
    fname: 'tanish',
    lname: 'ban',
    xyz: function (a, b) {
        return a + b
    }(2, 3),

    mno: function (a, b) {
        return (function (c, d) {
            return c * d
        }(a, b)
        )
    }(2, 3)
}
// console.log(myobj.xyz);
// console.log(myobj.xyz);
// console.log(myobj.mno);

let myobj1 = {
    fname: 'I am obj1'
}

let myobj2 = {
    fname: 'I am  obj2'
}

let tempObj = myobj1

myobj1 = myobj2

myobj2 = tempObj

console.log(myobj1);
console.log(myobj2);