// 1)
let user= {
    firstname: "giorgi",
    lastname:"smith",
    age: 25,
    studentstatus: "active"
};
console.log(user.studentstatus);

// 2)
let president = ["Obama", "Trump", "Putin", "Saakashvili", "Zelenski", "Lukashenko"];
for(let x=0; x=president.length-1; x++){
    console.log(president[x]);
}

let people = ["Obama", "Trump", "Putin", "Saakashvili", "Zelenski", "Lukashenko"];
let i=0;
while(i=people.length-1){
    console.log(people[i]);
    i++;
}
// 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let a=0; a<numbers.length; a++);
if (numbers[a]>5) {
    console.log(numbers[a]);
};
// 4
let user2={
    name:"giorgi",
    age:20,
    studentstatus:"active"
}
if (user2.age>18 && user2.studentstatus==active) {
    console.log("Hello");
}else if (user2.name="levan") {
    console.log("hello levan");
}else if (user2.studentstatus="active" && user2.age<25) {
    console.log("hello world");
}else{
    console.log("error");
}
// 5
let array = ["watermelon", "pear",10,45,50, "apple", "ananas"];
    for (let item of array) {
        if (typeof item== "string") {
            console.log(item);
        } 
    }

// 6
let array2=[[2,-3,5,10],[25,-24,-11,100],[-6,-7,10]]
    for (let item of array2){
        if(typeof item  > 0){
            console.log(item);
        }
    }

// 7
let array3 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
    for (let item of array3) {
        if (item % 2 ==0) {
            console.log(item);
        } 
    }
    for (let item of array3) {
        if (item % 2 ==1) {
            console.log(item);
        }
    }

// 8
let user3=[
    {username:"giorgi", status:false},
    {username:"levani, status: false"},
    {username: "anna ", status:true}
]
    for(let user of user3){
        if (user.status==true) {
            console.log(user);
        }
    }
