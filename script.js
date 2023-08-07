var timer;

function mouseMovement(xscale, yscale) {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector(".circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}

function cicledeformation() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", (dets) => {
        clearTimeout(timer);
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - yprev);


        xprev = dets.clientX;
        yprev = dets.clientY;

        mouseMovement(xscale, yscale);

        timer = setTimeout(() => {
            document.querySelector(".circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px , scale(1,1)))`
        }, 100);
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
cicledeformation();