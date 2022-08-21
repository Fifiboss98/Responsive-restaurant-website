const hamburger = document.querySelector(".hamburger")
const navigation = document.querySelector("nav")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    navigation.classList.toggle("active")
})

