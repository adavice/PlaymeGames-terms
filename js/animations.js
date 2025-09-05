gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // From right animation
    gsap.utils.toArray('[data-gsap="from-right"]').forEach(element => {
        gsap.from(element, {
            x: 50,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });

    // From left animation
    gsap.utils.toArray('[data-gsap="from-left"]').forEach(element => {
        gsap.from(element, {
            x: -50,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });

    // From bottom animation
    gsap.utils.toArray('[data-gsap="from-bottom"]').forEach(element => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: element,
                start: "top 85%"
            }
        });
    });

    // Stagger children animation
    gsap.utils.toArray('[data-gsap="stagger"]').forEach(container => {
        const elements = container.children;
        gsap.from(elements, {
            opacity: 0,
            y: 30,
            duration: 0.4,
            stagger: 0.1,
            scrollTrigger: {
                trigger: container,
                start: "top 85%"
            }
        });
    });
});
