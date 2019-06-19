//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MOUSEOVER
const mouseOver = document.querySelector("nav");
mouseOver.addEventListener("mouseover", event => {
    event.target.style.color = "hotpink";

    setTimeout(function() {
        event.target.style.color = "";
    },500);

});
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~KEYDOWN
const keyDown = document.querySelector("html")
keyDown.addEventListener("keydown", event => {
    // alert("What are you doing?");
})
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~WHEEL
const wheel = document.querySelector("h1")
wheel.addEventListener("wheel", event => {
   
    wheel.style.fontSize = "10rem";
    
})
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CLICK
const click = document.querySelector("nav")
click.addEventListener("click", event => {

    const title = document.querySelector("h1")
  title.textContent = event.target.textContent;
})
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DOUBLECLICK
const doubleClick = document.querySelector("div.btn")
doubleClick.addEventListener("dblclick", event => {

    doubleClick.textContent = "Signed in sucessfully!"
})
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DRAG
const page = document.querySelector("html")
const drag = document.createElement("dragMe")

drag.textContent = "Drag Me Around!";
page.appendChild(drag);
drag.style.fontSize = "2rem";
drag.style.border = "black";
drag.style.backgroundColor = "#00BFFF";

drag.addEventListener("drag", event => {

})
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LOAD
// const load = document.querySelector("img")
// load.addEventListener('load', event => {
    
//     console.log('page is fully loaded');
// });
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FOCUS
const focus = document.querySelector("input")
focus.addEventListener('focus', event => {
    event.target.style.background = "#00BFFF";    
  });
 //<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RESIZE
// const resize = document.querySelector("html")
// resize.addEventListener("resize", event => {

// })
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SCROLL
// const scroll = document.querySelector("html")
// scroll.addEventListener("scroll", event => {
//     console.log("its working!")
        
// })
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SELECT
const select = document.querySelector("input")
select.addEventListener("select", event => {

    console.log("You selected some text!");
});
//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PROPAGATION

const grandParent = document.querySelector("#grandParent")
grandParent.addEventListener("click", event => {
    grandParent.style.border = "1px solid red";
    grandParent.style.padding = "10px";
    grandParent.style.padding = "10px";
    grandParent.align = "center"
    alert("grandParent!");
    
})
const parent = document.querySelector("#parent")
parent.addEventListener("click", event => {
    parent.style.border = "1px solid red";
    parent.style.padding = "10px";
    alert("parent!");
    event.stopPropagation()
})
const child = document.querySelector("#child")
child.addEventListener("click", event => {
    child.style.border = "1px solid red";
    child.style.padding = "10px";
    alert("child!");
    
})
