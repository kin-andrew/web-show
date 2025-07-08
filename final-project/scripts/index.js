const elements = document.querySelectorAll(".element")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        buttons.forEach((btn) => btn.style.borderBottom = "")
        btn.style.borderBottom = "2px solid var(--text-color)"
        for (let el of elements) {
            el.style.left = -index * 120 + "%"
        }
    })
})

const navLinks = document.querySelectorAll("nav a")
navLinks[0].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#abouts-us-header")
    element.scrollIntoView({ behavior: "smooth" })
})
navLinks[1].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#guide-and-trails-header")
    element.scrollIntoView({ behavior: "smooth" })
})
navLinks[2].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#our-service-header")
    element.scrollIntoView({ behavior: "smooth" })
})