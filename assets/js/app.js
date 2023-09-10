const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

const svg = document.querySelector(".svg-change-color");

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

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        sunIcon.classList.add("hidden");
        svg.classList.add("fill-white");
        svg.classList.remove("fill-black");
        return;
    }
    svg.classList.remove("fill-white");
    svg.classList.add("fill-black");
    moonIcon.classList.add("hidden");
};


const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        svg.classList.remove("fill-white");
        svg.classList.add("fill-black");
        console.log(svg);
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    svg.classList.add("fill-white");
    svg.classList.remove("fill-black");
    console.log(svg);
    iconToggle();
}

sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();
