gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.feature').forEach((el) => {
    gsap.fromTo(el,
        {
            opacity: 0,
            y: 100,
            scale: 0.95
        },
        {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out'
        }
    );
});

