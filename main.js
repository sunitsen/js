

// //finding div
// var myDiv = document.getElementById("my-div");
// //create ul element and insert it on finding div
// var ul = document.createElement("ul");
// myDiv.appendChild(ul);


// var a,text,li,ul,div;
// li = document.createElement("li");
// ul.appendChild(li);

// a = document.createElement("a");
// li.appendChild(a);

// text = document.createTextNode("HELLO");
// a.appendChild(text);



// var num1 , num2 , resule, sum, sub, add, 

// num1 = prompt(parseFloat("Enter First Number.."));
// num2 = prompt(parseFloat("Enter First Number.."));

// num1 = parseFloat(num1, 10);
// num2 = parseFloat(num2, 10);


// resule = num1 + num2;

// document.write("sum is" + "=" + resule);

// function higestScores(scores){

//     var max = scores[0];
//     for(var x = 1; x < scores.length; x++){
//         if(max < scores[x]){
//             max = scores[x];
//         } 
//     }

//     return max;
// }
// var scores = [10,20,30,40,50];

// var maxScores = higestScores(scores);
// console.log(maxScores);







// function bigNumber (numbers){
//    var max = numbers[0];
//    for(var x= 1; x < numbers.length; x++){
//     if(max < numbers[x]){
//         max = numbers[x];
//     }
//    }
//    return max;

// }

// var  numbers = [10,20,30,40,50];
// var maxNumber = bigNumber(numbers);
// console.log(maxNumber);




// function heightstRunScore(playersInfo){

//     var heightstScorer = playersInfo[0][0];
//     var heightstScore = playersInfo[0][1];

//     for(var x = 1; x<playersInfo.length; x++){
//       if(heightstScore < playersInfo[x][1]){

//         heightstScore = playersInfo[x][1];
//         heightstScorer = playersInfo[x][0];

//       }
//     }

//  return heightstScorer;

// }

// var playersInfo = [
//     ["seth", 10],
//     ["sammy", 20],
//     ["sunit", 30],
//     ["sen", 40],
// ];

// var name = heightstRunScore(playersInfo);
// console.log(name); 












// function Student(name,age,cgpa,lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;

//      this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);

//      }
// }

// var student1 = new Student("sammy", 22,3.92,["bangla", "english"]);
// var student1 = new Student("seth", 24,2.92,["bangla", "china"]);
// var student1 = new Student("sunit", 26,4.92,["eng", "english"]);
// student1.display();








// for(var i = 0; i < 3 ; i++){
//    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//      var text = this.innerHTML;
//      audioPlay(text);
//    });
// }


// function audioPlay(text){
//    switch (text){
//          case  "a" :
//          var audio = new Audio('sounds/a.mp3');
//          audio.play();
//          break;

//          case  "b" :
//          var audio = new Audio('sounds/b.mp3');
//          audio.play();
//          break;

//          case  "c" :
//          var audio = new Audio('sounds/c.mp3');
//          audio.play();
//          break;
//     }

// }


// for( var i=0; i<3; i++){

//     document.querySelectorAll(".myButton")[i].addEventListener("click", function (){
//        var text = this.innerHTML;
//        audioPlay(text);
//        playAnimation(text);

//     });
// }


// function audioPlay(text){
//     switch(text){
//         case 'a':
//         var audio = new Audio('sounds/a.mp3');
//         audio.play();
//         break;

//         case 'b':
//         var audio = new Audio('sounds/b.mp3');
//         audio.play();
//         break;
//         case 'c':
//         var audio = new Audio('sounds/c.mp3');
//         audio.play();
//         break;
//     }
// }


// function playAnimation(text){
//     var btn = document.querySelector("." + text);
//      btn.classList.add("anim");

//      setTimeout(function(){
//      btn.classList.remove("anim");
//      }, 1000);

// }




// var photos = ['images/img1.jpg','images/img2.jpg','images/img3.jpg',];
// var imgTag = document.querySelector("img");



// var count = 0



// function next(){
// count++;
//     if(count >= photos.length){
//         count = 0;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }


// function prev(){
//     count--;
//         if(count <= 0){
//             count = photos.length - 1;
//             imgTag.src = photos[count];
//         }else{
//             imgTag.src = photos[count];
//         }
//     }




// console.clear();
// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeHandeler)

// function changeHandeler(e){
//     // console.log(e.type);
//     console.log(e.target.value);
// }


// const programs = document.querySelectorAll("input[name=program]");
// console.log(programs);

// Array.from(programs).map((program) =>{
//     program.addEventListener("change", programHandeler)
// })

// function programHandeler (e){
//    if(e.target.checked){
//     console.log(e.target.value);
//    }
// }



// const department = document.querySelector("#department");
// // console.log(department);

// department.addEventListener('change', handelDepartment);

// function handelDepartment(e){
//     console.log(e.target.value);
// }



// const form = document.querySelector("form");
// const name = form.querySelector("div #name");
// const email = form.querySelector("div #email");
// const password = form.querySelector("div #password");

// form.addEventListener("submit", formHendeler);
// function formHendeler(e){
//     e.preventDefault();
//     console.log(name.value);
//     console.log(email.value);
//     console.log(password.value);

//     const userInfo = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     }
//     console.log(userInfo);
//     name.value =  "";
//     email.value =  "";
//     password.value =  "";

// }




// const buttons = document.querySelectorAll(".btn");

// Array.from(buttons).map((button) => {
// button.addEventListener("click", function(e){
// console.log(e.target.innerHTML);
// })
// })






// window.addEventListener('load', function(){
// console.log("load");
// });

// window.addEventListener('unload', function(){
// console.log("unload");
// });


// window.addEventListener('scroll', function(){
//     console.log("scroll");
// });


// window.addEventListener('resize', function(){
//     const width =this.window.outerWidth;
//     const height =this.window.outerHeight;
//     console.log(`height: ${height}, width ${width}`);

// });

// const details = document.querySelector("details");
// details.addEventListener("toggle", function(e){
//     console.log(e.target.open);
// })

// const div = document.querySelector("div");

// div.addEventListener("mousemove", function(e){
  
//     console.log("clientX = " + e.clientX + " " + "clientY = " + e.clientY);
// })



// var div = document.querySelector("div");

// div.addEventListener("click", function(e) {
//     console.log(e.target.textContent);
// })

// var buttons = document.querySelectorAll(".btn");

// Array.from(buttons).map((button) => {
//     button.addEventListener("click", function(e){
//         console.log(e.target.innerHTML);
//     })
// })






// api calling





