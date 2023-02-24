// declaring variables

const hamburger = document.querySelector(".ham");
const close = document.querySelector(".close");
const navBar = document.querySelector(".mobNav");
const tabs = document.querySelectorAll("[data-tab-target]");
const imagesTab = document.querySelectorAll("[data-image-target]")
const tabContents = document.querySelectorAll("[data-tab-content]");
const images = document.querySelectorAll("[data-tab-image]");
const line = document.querySelector(".line");
const links = document.querySelectorAll(".link")
let touchstartX = 0
let touchendX = 0

// hamburger click event
hamburger.addEventListener("click", () => {
    navBar.classList.toggle("active");
    close.classList.add("active");
})


// close button click event
close.addEventListener("click", () => {
    navBar.classList.remove("active")
    close.classList.remove("active");
})

// destination tab click event
tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
            })
        tab.classList.add("active");

        const select = document.querySelector(tab.dataset.tabTarget);
           
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active")
        });
        select.classList.add("active")

        //For line width to adapt to each link's width
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
    })
})

imagesTab.forEach(image => {
    image.addEventListener("click", (e) => {
        const select2 = document.querySelector(image.dataset.imageTarget);
        images.forEach(imagge => {
            imagge.classList.remove("active")
        });
        select2.classList.add("active")
       
    })

})

