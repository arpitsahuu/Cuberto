const main = document.querySelector(".main");
const cour = document.querySelector(".coursor");
const nav = document.querySelector("nav");

main.addEventListener("mousemove",function(dets){
    cour.style.left = dets.x + "px"
    cour.style.top = dets.y + "px"

})

nav.addEventListener("mousemove",function(dets){
    cour.style.left = dets.x +"px"
    cour.style.top = dets.y +"px"
})

document.querySelector("#subelem1").addEventListener("mousemove",function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.opacity = 1
    cour.style.opacity = 0
    document.querySelector("#elem1 img").style.left = ( dets.x -250) + "px"
    document.querySelector("#elem1 img").style.top = ( dets.y -500)+"px"
    document.querySelector("#elem1 img").style.height = 200 + "px"
    document.querySelector("#elem1 img").style.width = 200 + "px"

});

document.querySelector("#subelem1").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem1 img").style.scale = 0
    document.querySelector("#elem1 img").style.opacity = 0
    cour.style.opacity = 1
})


document.querySelector("#subelem2").addEventListener("mousemove",function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity = 1
    cour.style.opacity = 0
    document.querySelector("#elem2 img").style.left = ( dets.x -700) + "px"
    document.querySelector("#elem2 img").style.top = ( dets.y -500 )+"px"
    document.querySelector("#elem2 img").style.height = 200 + "px"
    document.querySelector("#elem2 img").style.width = 200 + "px"
})

document.querySelector("#subelem2").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem2 img").style.scale = 0
    document.querySelector("#elem2 img").style.opacity = 0
    cour.style.opacity = 1
})

document.querySelector("#subelem3").addEventListener("mousemove",function(dets){
    document.querySelector("#elem3 img").style.scale = 1
    document.querySelector("#elem3 img").style.opacity = 1
    cour.style.opacity = 0
    document.querySelector("#elem3 img").style.left = ( dets.x -1080) + "px"
    document.querySelector("#elem3 img").style.top = ( dets.y -500)+"px"
    document.querySelector("#elem3 img").style.height = 200 + "px"
    document.querySelector("#elem3 img").style.width = 200 + "px"
})

document.querySelector("#subelem3").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem3 img").style.scale = 0
    document.querySelector("#elem3 img").style.opacity = 0
    cour.style.opacity = 1
})


document.querySelector("#overlay1").addEventListener("mousemove",function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.opacity = 1
    cour.style.opacity = 0
    document.querySelector("#elem1 img").style.height = 300 + "px"
    document.querySelector("#elem1 img").style.width = 300 + "px"
    document.querySelector("#elem1 img").style.left = ( dets.x -225) + "px"
    document.querySelector("#elem1 img").style.top = ( dets.y -480)+"px"
})

document.querySelector("#overlay1").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem1 img").style.scale = 0
    document.querySelector("#elem1 img").style.opacity = 0
    cour.style.opacity = 1
})

document.querySelector("#overlay2").addEventListener("mousemove",function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity = 1
    cour.style.opacity = 0
    document.querySelector("#elem2 img").style.left = ( dets.x -760) + "px"
    document.querySelector("#elem2 img").style.top = ( dets.y -480)+"px"
    document.querySelector("#elem2 img").style.height = 300 + "px"
    document.querySelector("#elem2 img").style.width = 300 + "px"
})

document.querySelector("#overlay2").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem2 img").style.scale = 0
    document.querySelector("#elem2 img").style.opacity = 0
    cour.style.opacity = 1
})


document.querySelector("#overlay3").addEventListener("mousemove",function(dets){
    document.querySelector("#elem3 img").style.scale = 1
    document.querySelector("#elem3 img").style.opacity = 1
    cour.style.opacity = 0
    document.querySelector("#elem3 img").style.height = 300 + "px"
    document.querySelector("#elem3 img").style.width = 300 + "px"
    document.querySelector("#elem3 img").style.left = ( dets.x -1080) + "px"
    document.querySelector("#elem3 img").style.top = ( dets.y -480)+"px"
})

document.querySelector("#overlay3").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem3 img").style.scale = 0
    document.querySelector("#elem3 img").style.opacity = 0
    cour.style.opacity = 1
})