document.addEventListener('DOMContentLoaded', () => {
    let items = document.querySelectorAll(".slider .list .item");
    let prevBtn = document.getElementById("prev");
    let nextBtn = document.getElementById("next");
    let lastPosition = items.length - 1;
    let firstPosition = 0;
    let active = 0;
    let slideInterval = null; // Initialize as null for better checking

    const startAutoSlide = () => {
        // Clear any existing interval first
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        slideInterval = setInterval(() => {
            if (active < lastPosition) {
                active++;
                setSlider();
            } else {
                active = 0;
                setSlider();
            }
        }, 8e3);
    };

    const stopAutoSlide = () => {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null; // Reset to null after clearing
        }
    };

    nextBtn.onclick = () => {
        active = Math.min(active + 1, lastPosition);
        setSlider();
        stopAutoSlide();
        startAutoSlide();
    };

    prevBtn.onclick = () => {
        active = Math.max(active - 1, 0);
        setSlider();
        stopAutoSlide();
        startAutoSlide();
    };

    const setSlider = () => {
        let oldActive = document.querySelector(".slider .list .item.active");
        if (oldActive) oldActive.classList.remove("active");
        items[active].classList.add("active");
        
        nextBtn.classList.remove("d-none");
        prevBtn.classList.remove("d-none");
        if (active == lastPosition) nextBtn.classList.add("d-none");
        if (active == firstPosition) prevBtn.classList.add("d-none");
    };

    const setDiameter = () => {
        let slider = document.querySelector(".slider");
        let widthSlider = slider.offsetWidth;
        let heightSlider = slider.offsetHeight;
        let diameter = Math.sqrt(
            Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2)
        );
        document.documentElement.style.setProperty("--diameter", diameter + "px");
    };

    // Initialize
    setSlider();
    setDiameter();
    startAutoSlide();

    // Event listeners
    window.addEventListener("resize", setDiameter);
    
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
});
