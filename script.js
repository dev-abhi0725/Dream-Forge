var tl= gsap.timeline();
tl.from(".navbar1 li,.navbar2 li",{
    y:-100,
    delay:.3,
    stagger:.2
})

tl.from(".content h1, .content p",{
    y:100,
    opacity:0,
    stagger:.3
})
tl.from(".image img",{
    scale:0,
    opacity:0,
    duration:.3,
    stagger:.3
})
tl.from(".lower button",{
    scale :0,
    opacity: 0
})
tl.to(".lower button",{
    y:20,
    repeat:-1,
    yoyo:true
})
tl.from(".lower p,.lower hr",{
    y:100,
    opacity:0,stagger:.3
})