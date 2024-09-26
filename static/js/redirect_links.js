const github_btn = document.querySelector("#important_github")
const icon = document.querySelector(".logo")

const proj_1 = document.querySelector(".project_1")
// const proj_2 = document.querySelector(".project_2")
// const proj_3 = document.querySelector(".project_3")

function github() {
    window.open("https://github.com/G4brielXavier")
}

icon.addEventListener("click", (e) => {window.location.href = '/'})
github_btn.addEventListener("click", (event) => {github()})
proj_1.addEventListener("click", (e) => {window.open("https://github.com/G4brielXavier/TodoTerminal")})
// proj_2.addEventListener("click", (e) => {window.open("https://github.com/uno-terminal")})
