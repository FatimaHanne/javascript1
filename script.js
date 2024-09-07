//  selecteurs
//  document.querySelector("h4") . style.background = "yellow";
// const baliseHTML = document.querySelector("h4"); console.log(baliseHTML);
// baliseHTML.style.background="yellow"

// click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1")
const btn2 = document.getElementById("btn-2")
console.log(btn1, btn2)
const reponse =  document.querySelector("p");
console.log(reponse);

questionContainer.addEventListener("click" , () => {
    questionContainer.classList.toggle("question-clicked")
    

})

btn1.addEventListener("click", ()=>{
    reponse.classList.add('shou-response')
    reponse.style.background ="green"
    console.log(("Click !"));
})
btn2.addEventListener("click" , () =>{
    reponse.classList.add('shou-response')
     reponse.style.background ="blue"
    console.log("Click!")
})
// console.log(questionContainer);
// questionContainer.style.borderRadius = "80px";

// **********************************************
// Mouse Events
const mousemove = document.querySelector(".mousemove");
 window.addEventListener("mousemove", (e) =>{
    mousemove.style.left = e.pageX + "px"
    mousemove.style.top = e.pageY + "px"
})

window.addEventListener("mousedown" , ()=>{
    mousemove.style.transform ="scale(2) translate(-25%, -25%)"; 
})
window.addEventListener("mouseup" , ()=>{
    mousemove.style.transform ="scale(1) translate(-50%, -50%)";
    mousemove.style.border="2px solid teal"
})

questionContainer.addEventListener('mouseenter' , () =>{
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
})

questionContainer.addEventListener("mouseout" , () => {
questionContainer.style.background ="pink"
})

 reponse.addEventListener("mouseover", () => {
    reponse.style.transform="rotate(2deg)"
})

//********************************
// KeyPress event
const KeypressContainer = document.querySelector ('.keypress');
const key = document.getElementById("key");



document.addEventListener("keypress" , (e) => {
   key.textContent = e.key;

   if (e.key === "j"){
    KeypressContainer.style.background ="pink";
   }else if (e.key === "h"){
    KeypressContainer.style.background="teal"
   }  else{
    KeypressContainer.style.background ="red"
   }

 
});



// ***************************************************
//Scroll Event

const nav = document.querySelector("nav")

window.addEventListener("scroll" , () => {
   if(window.scrollY > 120) {
        nav.style.top=0
    }else {
        nav.style.top ="-50px"
    }
})

// *******************************************
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language ="";


 inputName.addEventListener("input",(e) => {
    pseudo= e.target.value;
    console.log(pseudo);
 }) 

select.addEventListener("input", (e) => {
  console.log(e.target.value);
})

form.addEventListener("submit",(e) => {
    e.preventDefault();

    console.log(cgv.checked);
    
   
    if (cgv.checked) {
       document.querySelector("form > div").innerHTML =`
       <h3>Pseudo : §{pseudo}</h3>  
       <h4> Language préféré : §{Language}<h4>
       
       `
     
      
    }else {
        alert("Veuillez accepter les CGV")
    } 
})

// *****************************
// Load event
window.addEventListener("Load", () => {
  console.log("Document Chargé ! ");
})

// *************************************************
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box")
console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener("click", (e)=> {
     e.target.style.transform ="scale(0.7)";
   })
})

// **********************************************
// addEvenListener Vs onclick
// document.body.onclick= () => {
//     console.log("Click !");
// };

// document.body.onscroll = () => {
//     console.log("Scroll !");
// }

// Bubbling  => Fin(de base l'enevntlistener est paramétré en mode de Bubibing)
document.body.addEventListener("click", () =>{
    console.log("click 1 !");
    
}, false
) ;


//Usecapture
document.body.addEventListener("click", () =>{
    console.log("click 2 !");
    
}, 
true
);

// https://gomakething.com/
//  what-js-that-third-argument-on-the-vanille-is-addventlistner-not 
// had-and-when-do-you-need-it /

//*********************************
// Stop propagation
// questionContainer.addEventListener("click", (e) => {
//     alert("Test !")
//    e.stopPropagation();
// })

// removeEventLIstener

// ****************************************************
// BOM

// console.log(window.innerHeight);
// // console.log(window.scrollY);
// window.open("http://google.com","cours js", "height=600,width=800")
// window.close()

// Evénement adossée à Window
// alert("hello");

// confire
btn2.addEventListener('click', ()=> {
    confirm("Veuiller vous vraiment vous tromper ?")
})

let answer;

// prompt
btn1.addEventListener("click", () => {
 let answer = prompt ("Entrer votre nom !")

questionContainer.innerHTML += "<h3>  Bravo" + answer + "</h3>";
})

//Timer , comte à rebours 

setTimeout (() => {
    questionContainer.style.borderRadius = "300px";
}, 2000);

//  let interval = setInterval(()=> {
//     document.body.innerHTML += `
//         <div class='box'>
//           <h2>Nouvelle Boite !</h2>
//        </div>
//     `;
// }, 4000);

// document.body.addEventListener("click", (e) => {
//     e.target.remove();
//     clearInterval(interval);
//  });

// Location
//  console.log(location.href);
//   console.log(location.host);
//  console.log(location.pathname);
//  console.log(location.search);
//  location.replace("http:/oppenclassrom.fr");

// window.onload = () => {
// location.href ="http:/twitter.fr";
// }

// SetProperty
// window.addEventListener("mousemove", (e) => {
//     console.log(e);
//     nav.style.setProperty("---x", e.layerX + "px");
//     nav.style.setProperty("---y", e.layerY + "px");
// });

// document.addEventListener("keypress" , () => {
//     console.log("yes !!");
//})
