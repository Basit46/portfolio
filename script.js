//hover effect but m not done
const navItems = document.querySelectorAll(".homebar .navbar ul li a");
const navLi = document.querySelectorAll(".homebar .navbar ul li .duo");

for(var i = 0;i < navItems.length; i ++){
    navItems[i].addEventListener("click", function(navLi){
        console.log(navLi[i])
    })
}

//menu design
const bar = document.querySelector(".bar i");
const menu = document.querySelector(".menu");
const cancel = document.querySelector(".menu ul div i");
const menuitems = document.querySelectorAll(".menu ul li");

bar.addEventListener("click", function(){
    menu.classList.add("menudgn")
})
cancel.addEventListener("click", function(){
    menu.classList.remove("menudgn")
})
menuitems.forEach(function(menuitem){
    menuitem.addEventListener("click", function(){
        menu.classList.remove("menudgn")
    })
})