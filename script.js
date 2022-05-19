const menu = document.querySelector("#bar");
const cancel = document.querySelector(".cancel");
const menusBox = document.querySelector(".menubar");
const menusItems = document.querySelectorAll(".menubar ul li");

menu.addEventListener("click", function(){
    menusBox.classList.add("design");
})
cancel.addEventListener("click", function(){
    menusBox.classList.remove("design");
})
menusItems.forEach(function(menusItem){
    menusItem.addEventListener("click", function(){
        menusBox.classList.remove("design");
    })
})
