# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL:(https://spacetourismwebsitedavidog.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

```js
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
}
```

### Continued development


### Useful resources

- [Resource 1](https://www.stackoverflow.com) - This helped me for CSS and a bit of JavaScript. I really liked the answers to the different questions I hoped to find (there is answers(s) to almost anything you need to know about web dev in this website!) and will use it going forward.
- [Resource 2](https://www.youtube.com) - Youtube is a great platform to learn anything. I'd recommend it to anyone learning Web Dev.


## Author

- Website - [David_OG](https://spacetourismwebsitedavidog.netlify.app/)
- Frontend Mentor - [@DavidOG03](https://www.frontendmentor.io/profile/DavidOG03)

## Acknowledgments

Web Dev Simplified!!! This youtuber helped me with the tab sections.