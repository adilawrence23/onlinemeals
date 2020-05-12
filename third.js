// console.log("This is A JavaScript Tutorial");

// let name="Adi";
// console.log(name +" is a good boy");

// function checker(sum,meet){
//     console.log(meet +" " +sum);
//     console.log(sum +" is a good boy");


// function mum(a,b){
//     let c=a * b;
//     return c;
// }

// function minmax(a,b){
    
//     if (a>b){
//       console.log(a+" Is the Larger than "+b);
//     }
//     else{
//         console.log(b+" Is larger than "+a);
//     }
//     return minmax ;
    
// }




// let sum="Aditya";
// let sum1="Abhisek";
// let sum2="Kaku";
// let meet="Good Morning";
// checker(sum,meet);
// checker(sum1,meet);
// checker(sum2,meet);

// let returnVal=mum(2,3);
// console.log(returnVal);



// let returnVal=minmax(100,250);
// console.log(returnVal);


// function greaternum(b,a) {
//     if (a>b) {
//         console.log(a+ "is greater than" +b);
//     }
//     else if (a==b) {
//         console.log(a+ "is equal to" +b);
//     } else {
//         console.log(a+ "is less than" +b);
//     }
//     return greaternum;
    
// }

// let returnVal = greaternum(50,100);
// console.log(returnVal);


// // // alert
// alert("This is a Food Ordering & Delivering Platform");



// // prompt
// let name=prompt("What is your name?","Guest");
// console.log(name);



// // // confirm
// let deletePost=confirm("Do you really want to delete the post?");
// if(deletePost){
//     console.log("Your Post have been deleted successfully!");
// }
// else{
//     console.log("Your post is not deleted.");
// }


let age=prompt("Enter Your age:");
if(age>18){
    console.log("Welcome to the Club!");
}

else{
    console.log("Sorry! Come When you are 18+");
}


// loops

// console.log("This is a loop tutorial in JavaScript");
// let i=0;
// for(i=0;i<3;i++){
//     console.log(i);
// }



// array loop
// let friends=["Rohan","Sayan","Abhisek","Moumita","Asmita"];

// // friends.forEach(function f(element) {
// //     console.log("Hello Friend,"+ element +" to mordern JavaScript");
// // })

// //array loop another example
// for (element of friends){
//     console.log("Hello Friend,"+ element +" to mordern JavaScript again");
// }


// //array for in
// let employee ={
//     Name:"Aditya Mukherjee",
//     Salary:1000000,
//     Organisation:"Bell Laboratories"
// }

// for(key in employee){
//     console.log(`The ${key} of employee is ${employee[key]}`);
// }


// // while loop 
// let i=0;
// while(i<4){
//     console.log(`${i}is less than 4`);
//     i++;
// }

// // do while loop in JS

// let j=40;
// do{
//     console.log(`${j} is less than 4 but in do while loop in JS`);
//     j++;
// }
// while(j<4);


// DOM- DOCUMENT OBJECT MODEL


function toggleHide(){
    let para1 =document.getElementById(`para1`);
    if(para1.style.display !=`none`){
        para1.style.display=`none`;
    }
    else{
        para1.style.display=`block`;
        }
}
function toggleHide2(){
    let para2 =document.getElementById(`para2`);
    if(para2.style.display !=`none`){
        para2.style.display=`none`;
    }
    else{
        para2.style.display=`block`;
        }
}
function toggleHide1(){
    let para3 =document.getElementById(`para3`);
    if(para3.style.display !=`none`){
        para3.style.display=`none`;
    }
    else{
        para3.style.display=`block`;
        }
}

// function myFunction() {
//     var x=document.getElementById("myDIV");
//     if(x.innerHTML === "Welcome to OnlineMeals");
//     {
//         x.innerHTML = "Hello Foodies!";
//     }
//   else {
//     x.innerHTML = "Welcome to OnlineMeals";  
//     }
// }


// document.querySelector(`#botam`)
// .textContent
// document.querySelector(`#botam`)
// .innerText


// function change() 
// {
//     var elem = document.getElementById("botam");
//     if (elem.value=="Close Curtain") elem.value = "Open Curtain";
//     else elem.value = "Close Curtain";
// }


// function myFunction() {

//     var btn = document.getElementById("botam");

//     if (btn.value == "Open Curtain") {
//         btn.value = "Close Curtain";
//         btn.innerHTML = "Close Curtain";
//     }
//     else {
//         btn.value = "Open Curtain";
//         btn.innerHTML = "Open Curtain";
//     }

// }


// function displayText(){
//     text = new Text("Food Paradise!!");
//     console.log(text);
//     document.getElementById('text').innerHTML = text;
// }
// setInterval(displayText,  2000);


//date time using JS


console.log("This is date and time tutorial");
        // let now = new Date();
        // console.log(now);

        // let dt = new Date(1000);
        // console.log(dt);

        // let newDate = new Date("2029-09-30");
        // console.log(newDate);

        // let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
        let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
        // console.log(newDate);

        let yr = newDate.getFullYear();
        console.log("The year is ", yr);

        let dat = newDate.getDate();
        console.log("The date is ", dat);

        let month = newDate.getMonth();
        console.log("The month is ", month);

        let hours = newDate.getHours();
        console.log("The hours is ", hours);
        

        let minutes = newDate.getMinutes();
        console.log("The minute is ", minutes);
        // let hours = newDate.getHours();
        // console.log("The hours is ", hours);
        

        // newDate.setDate(8);
        // newDate.setMinutes(29);
        // console.log(newDate)
        // setInterval(updateTime, 1000);

        // function updateTime() {
        //     time.innerHTML = new Date();
        // }


        setInterval(updateTime, 1000);

        function updateTime() {
            time.innerHTML = new Date();
        }