function mouseMovement() {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector(".circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
        document.querySelector("#page-2 .circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
    })
}

mouseMovement();


function homePageAnimation() {
    var t1 = gsap.timeline();

    t1.from(".navbar", {
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            delay: -2,
            y: '0%',
            duration: 2,
            ease: Expo.easeInOut,
            stagger: .2
        })

        .from("#home-footer", {
            y: - 10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut


        })

}

homePageAnimation();