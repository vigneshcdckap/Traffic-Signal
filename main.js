let container = document.createElement("div");
container.setAttribute("class", "container");

let innercontainer = document.createElement("div");
innercontainer.setAttribute("class", "innercontainer");

let Btn1 = document.createElement("button");
Btn1.setAttribute("id", "Btn_1");

let Btn2 = document.createElement("button");
Btn2.setAttribute("id", "Btn_2");

let Btn3 = document.createElement("button");
Btn3.setAttribute("id", "Btn_3");

let box=document.createElement("button")
box.setAttribute("id","box1")

container.append(innercontainer);
innercontainer.append(Btn1, Btn2, Btn3);
document.body.append(container,box);


// Btn1.style.backgroundColor="#df4545f5"

// let a=12;
// // let b=5;
// function Signal() {
//     if(a>0 || a==0){
//   setTimeout(function () {
//       Btn1.style.backgroundColor="#df4545f5"
//       Btn2.style.backgroundColor=""
//       Btn3.style.backgroundColor=""
//     box.innerText=a;

//   },1000)
// }

// else if(b!=0 || b==0){
//   setTimeout(function () {
//       Btn1.style.backgroundColor=""
//       Btn2.style.backgroundColor="#c2c251"
//       Btn3.style.backgroundColor=""
//       box.innerText=b;
    
//   },1000)
// }

// //   setTimeout(function () {
// //       Btn1.style.backgroundColor=""
// //       Btn2.style.backgroundColor=""
// //       Btn3.style.backgroundColor="#65c165"
// //   },18000)
// }
// if(a==0){
//    var b=5;
//    a=-1;
// }
// a--;
// b--;


// // setInterval(function () {
// // Signal()
// // },1000)
// setInterval(Signal,1000)

let b=0;
let count=10;

function Signal(){

if(b<11){

    Btn1.classList.add("red")
    Btn3.classList.remove("green")
    box.innerText=count;
    count--;
    if(count<0){
      count =5
    }
}
 else if(b>=11 && b<17){

  
         Btn1.classList.remove("red")
         Btn2.classList.add("yellow")
          box.innerText=count;
          count--;
          if(count<0){
            count =10
          }

}
else if(b>=17 && b<=27){
  
  Btn2.classList.remove("yellow")
  Btn3.classList.add("green")
  box.innerText=count;
          count--;
}


if(b==28){

     b=0;
      count =5
}

b++;


}
setInterval (Signal,700)
