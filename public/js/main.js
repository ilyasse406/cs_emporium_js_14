
// changement de couleur du background
let noir = document.getElementById("noir")
let blanc = document.getElementById("blanc")

let body = document.querySelector("body")
let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")
let section5 = document.getElementById("section5")
let section6 = document.getElementById("section6")




noir.addEventListener("click", (e) => {
    e.preventDefault()
    
    section1.style.backgroundColor = "black"
    section2.style.backgroundColor = "black"
    section3.style.backgroundColor = "black"
    section4.style.backgroundColor = "black"
    section5.style.backgroundColor = "black"
    section6.style.backgroundColor = "black"
    body.style.backgroundColor = "black"
    body.style.color = "white"
    empo.style.color = "black"

})
blanc.addEventListener("click", (e) => {
    e.preventDefault()
    
    section1.style.backgroundColor = ""
    section2.style.backgroundColor = ""
    section3.style.backgroundColor = ""
    section4.style.backgroundColor = ""
    section5.style.backgroundColor = ""
    section6.style.backgroundColor = ""
    body.style.backgroundColor = ""
    body.style.color = ""

})

// nav bar  fix

let header = document.querySelector("header")
let navbar = document.querySelector("nav")
let empo = document.getElementById("empo")
let maintitle = document.getElementById("main-title")


window.addEventListener("scroll", () => {
    if (window.scrollY >= 259) {
        header.style.position = "fixed";
        header.style.top = 0
        header.style.width = "100%"
        header.style.zIndex = 2
        empo.setAttribute("class", "d-block pt-4 pr-5")
        maintitle.style.display = "none"
        
    } else {
        header.style.position = "static"
        empo.setAttribute("class", "d-none")
        maintitle.style.display = ""
        
    }
})

// connexion pop up

let connexion = document.getElementById("connexion")
let popup = document.getElementById("popup")
let signup = document.getElementById("sign-up")
let register = document.getElementById("register")
let formulaire = document.getElementById("formulaire")
let maman = document.getElementById("maman")
console.log(register);

connexion.addEventListener("click", (e) => {
    e.preventDefault()
    popup.setAttribute("class", "bg-white text-center")
    let exit = document.getElementById("exit")
    exit.addEventListener("click", (e) => {
        popup.setAttribute("class", "bg-white text-center d-none")
        e.preventDefault()
    })
    // body.addEventListener("click", () => {
    //     popup.setAttribute("class", "bg-white text-center d-none")
    //     e.preventDefault()
    // })
    register.addEventListener("click", (e) => {
        e.preventDefault()
        maman.setAttribute("class", "p-3")
        formulaire.setAttribute("class", "d-none")
    })
    signup.addEventListener("click", (e) => {
        e.preventDefault()
        maman.setAttribute("class", "p-3 d-none")
        formulaire.setAttribute("class", "")

    })


})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        popup.style.position = "fixed"
        popup.style.top = "250px"
        popup.style.width = "60%"
        popup.style.height = "50%"
        popup.style.zIndex = 2
        

    }
})

// carousel
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let btn3 = document.getElementById("btn3")
// let btn4 = document.getElementById("btn4")

// let luxe = document.getElementById("luxe")
// let glove = document.getElementById("glove")
// let bowl = document.getElementById("bowl")
// let bag = document.getElementById("bag")
// let modern = document.getElementById("modern")
// let tshirt = document.getElementById("t-shirt")
// let plate = document.getElementById("plate")

// let container = document.querySelectorAll(".col-2");
// let containerWidth = container.offsetWidth

// console.log(containerWidth);

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-11%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-22%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-33%)';
      e.target.classList.add('active');
    
    } else if (e.target.classList.contains('quatre')){
      slides.style.transform = 'translatex(-44.5%)';
      e.target.classList.add('active');
    }
  }
});






// const controls=document.querySelector(".controls");
// const container=document.querySelector(".thumbnail-container");
// const allBox=container.children;
// const containerWidth=container.offsetWidth;
// const margin=30;
//  var items=0;
//  var totalItems=0;
//  var jumpSlideWidth=0;


// // item setup per slide

// responsive=[
// {breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
// {breakPoint:{width:800,item:2}}, //if width greater than 600 (2  item will show) 
// {breakPoint:{width:1000,item:4}} //if width greater than 1000 (4 item will show) 
// ]

// function load(){
//    for(let i=0; i<responsive.length;i++){
//        if(window.innerWidth>responsive[i].breakPoint.width){
//            items=responsive[i].breakPoint.item
//        }
//    }
//    start();
// }

// function start(){
//     var totalItemsWidth=0
//    for(let i=0;i<allBox.length;i++){
//         // width and margin setup of items
//        allBox[i].style.width=(containerWidth/items)-margin + "px";
//        allBox[i].style.margin=(margin/4)+ "px";
//       totalItemsWidth+=containerWidth/items;
//       totalItems++;
//    }

//    // thumbnail-container width set up
//    container.style.width=totalItemsWidth + "px";

//    // slides controls number set up
//     const allSlides=Math.ceil(totalItems/items);
//    const ul=document.createElement("ul");
//       for(let i=1;i<=allSlides;i++){
//         const li=document.createElement("li");
//              li.id=i;
//              li.innerHTML="";
//              li.setAttribute("onclick","controlSlides(this)");
//              ul.appendChild(li);
//              if(i==1){
//                  li.className="active";
//              }
//       }
//       controls.appendChild(ul);
// }

//   // when click on numbers slide to next slide
// function controlSlides(ele){
//      // select controls children  'ul' element 
//      const ul=controls.children;

//      // select ul children 'li' elements;
//     const li=ul[0].children
      
     
//      var active;

//      for(let i=0;i<li.length;i++){
//          if(li[i].className=="active"){
//              // find who is now active
//              active=i;
//              // remove active class from all 'li' elements
//              li[i].className="";
//          }
//      }
//      // add active class to current slide
//      ele.className="active";

//      var numb=(ele.id-1)-active;
//         jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
//      container.style.marginLeft=-jumpSlideWidth + "px";
// }

// window.onload=load();