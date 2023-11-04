var tl = gsap.timeline();

tl.to(".loader", {
    delay: 2,
    top: "-125vh",
    duration: 1,
});

// Check if the device width is greater than a certain breakpoint (e.g., 768 pixels)
if (window.innerWidth > 768) {
    // Select all .box3 elements
    const boxes = document.querySelectorAll(".box3");

    // Loop through each .box3 element and create a separate animation for each
    boxes.forEach((box3) => {
        gsap.from(box3, {
            y: 100,
            scale: 0.8,
            scrollTrigger: {
                trigger: box3,
                scroller: "body",
               
                scrub: 2,
            }
        });
    });
}
