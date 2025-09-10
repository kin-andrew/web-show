const buttons = document.querySelectorAll(".slider__pagination button")
const elements = document.querySelectorAll(".element")
const nav = document.querySelectorAll("nav a")


const links = ["#slider", "#guide-trails", "#our-services"]
nav.forEach((link, n) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const element = document.querySelector(links[n])
        element.scrollIntoView({ behavior: "smooth" })
    })
})


buttons.forEach((button, n) => {
    button.addEventListener("click", () => {
        for (let element of elements) {
            element.style.left = -130 * n + "%"
        }
        for (let button of buttons) {
            button.style.opacity = "0.5"
        }
        button.style.opacity = "1"
    })
})