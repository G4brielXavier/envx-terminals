// const docs = document.querySelector(".docs")
const projects = document.querySelector(".projects_nav")
const home = document.querySelector(".logo")

// docs_url = "/docs"
projects_href = "/projects"
home_href = "/"

home.addEventListener("click", (e) => {
    window.location.href = home_href
    e.preventDefault()
})

// docs.addEventListener("click", (e) => {
//     window.location.href = docs_url
//     e.preventDefault()
// })

projects.addEventListener("click", (e) => {
    window.location.href = projects_href
    e.preventDefault()
})

