function mouseMovement() {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector("#circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
    })
}

mouseMovement();