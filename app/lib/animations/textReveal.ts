import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const textReveal = () => {
    const paragraph: any = document.querySelector("[data-animation = 'paragraph']")
    const header: any = document.querySelector("[data-animation = 'header']")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                gsap.from(entry.target, {
                    opacity: 0,
                    y: 100,
                    ease: "power2.in",
                    autoAlpha: 1
                })
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0.1})
    paragraph.forEach((p: any) => observer.observe(p))
    header.forEach((h: any) => observer.observe(h))
} 