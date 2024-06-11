const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemc = document.querySelector("#elem-container");
var elemi = document.querySelector("#elem-image");
elemc.addEventListener("mouseenter",function(){
    elemi.style.display = "block"
})
elemc.addEventListener("mouseleave",function(){
    elemi.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image");
        elemi.style.backgroundImage = `url(${image})`;
    })
})