// let  num1 = 20;
// let  num2 = 30;
// let sum = num1 + num2
// console.log(sum);  // answer is 50

// let num1 = "22"
// let num2 = 20
// // console.log( typeof(num1 num2)); // output in String
// console.log(num1 - num2);   // output is 2020

// let value1 = 30
// let value2 = 60
// console.log(`the value of is total number: ${value1 + value2}  `);
// the value of is total number is : 90  :

// let value1 = 30
// let value2 = 60
// console.log("the value of is total number:" + value1 + value2 );  // output is 3060
// string me number ko add keren per string hi milta hai not to additions

// console.log( value1 + value2 + "the value of is total number:"  );  // output is 90
// number me string ko addition kerne per number output milta hai

// let age = Number(prompt ("Enter your age "))
// console.log(typeof age);

// let num1 = 22
// let num2 = 23
// let num3 ;
// num3=num1;
// num1 = num2;
// num2=num3
// console.log(num1,num2,num3);

// let a =7;
// let b = 2;

// console.log(Math.floor(a/b)); //output is 2
// console.log(b/a);  // do 7 se devide nhi hoga

// let a = 12;
// let b = 5;
// // console.log(Math.floor(a/b));
// console.log(b%a);

// console.log(++10);
// console.log(Math.ceil(10.1));
// console.log(Math.floor(9.9));
// console.log(Math.round(11.4));
// console.log(Math.trunc(97.89)); // remove to decimal value for number // output is 97
// console.log(Math.pow(2,8));

// console.log();
// let CreateOtp =prompt(Math.trunc(Math.random()*9000+1000))

// let  CreateOtp =prompt(Math.floor(Math.random()*9000 + 1000))
// console.log("this is your otp :",CreateOtp);

// let num = [2,3,4,5,6,7,8,4,83,45,]
// let num1 = [...new Set(num)]
// console.log(num1);

// new [...new Set(arr)] spread operator and Set method ka use kerke dupligate value ko remove kerte hai arr me se

// function fiboSeries(num) {
//      let fibo = [0, 1]
//      for (let i = 2; i <= num; i++) {
//           fibo[i] = fibo[i - 1] + fibo[i - 2]
//      }
//      return fibo
// }
// console.log(fiboSeries(4));

// fectorial N number inj javascript
// function Fectorial(n) {
//      let fect = 1;
//      for(let i = 2 ; i <= n; i++){
//           fect *= i
//      }
//      return fect ;
// }

//    console.log(Fectorial (3));

// function reverseStr(str){
//      const Name =str.split('').reverse().join('')
//      return Name;
// }
//    console.log(reverseStr("sonu"));

// let Amount = Number(prompt("Enter the Amount value"));
// let discount = 0;
// if (Amount > 0 && Amount < 5000) {
//   discount = 0;
// } else if (Amount > 5001 && Amount < 7000) {
//   discount = 5;
// } else if (Amount > 7001 && Amount < 9000) {
//   discount = 10;
// } else if (Amount > 9001) {
//   discount = 20;
// } else {
//   console.log("wrong input");
// }

// console.log(Amount - Math.floor(Amount * discount) / 100);

// let Box = document.getElementById('box')
// Box.addEventListener('mouseenter', function(){
//      console.dir(this);

// },)

// let NameField = document.getElementById('NameField')
// NameField.addEventListener('keydown',function(){
//      console.log("key press ki hai");

// })

// let NameField = document.getElementById('NameField')
// NameField.addEventListener('keyup',function(event){
//      console.log(event );

//      console.log("key press ki hai");

// })

// let Amount = Number(prompt("Enter Amount"));
// let discount = 0;
// if (Amount > 0 && Amount < 5100) {
//   discount = 0;
// } else if (Amount > 5100 && Amount < 7000) {
//   discount = 5;
// } else if (Amount > 7000 && Amount < 9000) {
//   discount = 10;
// } else if (Amount > 9000 && Amount < 12000) {
//   discount = 15;
// } else if (Amount > 12000) {
//   discount = 20;
// } else {
//   console.log("Wrong input");
// }

// console.log(Amount - Math.floor(Amount * discount) / 100);


let n = Number(prompt("Enter the  number"))
if (isNaN(n)) {
     console.log("plese Enter the right  number ");

}
else {
     if (n > 0) {
          let sum = 0;
          for (let i = 1; i <= n; i++) {
               sum += i;
          }
          console.log(sum);
     }
     else {
          console.log("plese enter more the 0 number")
     }
}

