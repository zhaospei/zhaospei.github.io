const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

const svg = document.querySelectorAll(".svg-change-color");

function getCurrentURL () {
    return window.location.pathname
  }
  
  // Example
const url = getCurrentURL();

const title = document.querySelector(".blog-link");

words = url.split('/')

switch (words[1]) {
    case 'works.html':
        title.innerHTML = "~/works";
        break;
    case 'blog.html':
        title.innerHTML = "~/blog";
        break;
    
    case 'about':
        title.innerHTML = "~/about";
        break;
    
    case '':
        break;

    case 'tag':
        title.innerHTML = "~/tag/" + words[2].replace('%20', ' ');
        break;

    default:
        var cc = document.querySelector(".container h1");
        if (cc != undefined && cc.innerHTML == '404') {
            title.innerHTML = "~/404"
        } else {
            wo = "~/" + words[1] + "/" + words[words.length - 2];
            wo = wo.substring(0, 30) + '...';
            title.innerHTML = wo;
        }
}

const iconToggle = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};

const svgDark = () => {
    for (i = 0; i < svg.length; i++) {
        svg[i].classList.add("fill-white");
        svg[i].classList.remove("fill-black");
    }
}

const svgLight = () => {
    for (i = 0; i < svg.length; i++) {
        svg[i].classList.remove("fill-white");
        svg[i].classList.add("fill-black");
    }
}

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        sunIcon.classList.add("hidden");
        svgDark();
        return;
    }
    svgLight();
    moonIcon.classList.add("hidden");
};


const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        svgLight();
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    svgDark();
    iconToggle();
}

sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();
