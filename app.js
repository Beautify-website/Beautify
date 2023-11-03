var tl=gsap.timeline();

tl.to(".loader",{
    delay:2,
    top:"-100vh",
    duration:1,
})
tl.from(".box",{
    scale:0,
    duration:0.8,
    scrub:5,
scrollTrigger:{
    trigger:".box",
    scroller:"boxes",
    marker:true
}
})


