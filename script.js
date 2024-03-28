// var slideImg = document.getElementById("slideImg");

// var images = new Array(
//     "assets/images/img1.jpg",
//     "assets/images/img2.avif",
//     "assets/images/img3.jpg",
//     "assets/images/img4.jpg"
// );

// var len = images.length;
// var i=0;
// function slider(){
//     if(i>len-1){
//         i=0;
//     }
//     slideImg.src = images[i];
//     i++;
//     setTimeout('slider()',3000)
// }











var tl= gsap.timeline();
tl.from(".header",{
    y:-100,
    delay:.3,
    stagger:.2
})

tl.from(".content h1,.content .note1",{
    y:100,
    opacity:0,
    stagger:.1
})
tl.from(".content button",{
    scale :0,
    opacity: 0
})
tl.to(".content button",{
    y:20,
    repeat:-1,
    yoyo:true
})
tl.from(".note2,.line, .note3",{
    y:100,
    opacity:0,
    stagger:.1
})
tl.from(".content .scroll",{
    scale:0,
    opacity:0
})
tl.to(".scroll",{
    y:30,
    repeat:-1,
    yoyo:true
})
tl.from("#page2 h2 ",{
    y:100,
    opacity:0,
    stagger:.1
})
tl.from(".card ",{
    y:100,
    opacity:0,
    stagger:.1
})

// Vanilla Tilt js
VanillaTilt.init(document.querySelectorAll(".card,.image"), {
    max: 25,
    speed: 400,
    glare:true,
    "max-glare":0,
});


