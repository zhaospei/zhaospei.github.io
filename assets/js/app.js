const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const themeSwitchToggle = document.querySelector(".themeSwitchToggle");
const themeSwitchIcon = document.querySelector(".themeSwitchIcon");

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
        title.innerHTML = "~/ works";
        break;
    case 'blog.html':
        title.innerHTML = "~/ blog";
        break;
    
    case 'about':
        title.innerHTML = "~/ about";
        break;
    
    case '':
        break;

    case 'tag':
        title.innerHTML = "~/ tag/" + words[2].replace('%20', ' ');
        break;

    default:
        var cc = document.querySelector(".container h1");
        if (cc != undefined && cc.innerHTML == '404') {
            title.innerHTML = "~/ 404"
        } else {
            // wo = "~/" + words[1] + "/" + words[words.length - 2];
            // title.innerHTML = wo;
            title.innerHTML = "~/ post"
        }
}

const svgDark = () => {
    themeSwitchIcon.style.transform = "translateX(24px)";
    themeSwitchIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" data-projection-id="17" class="moon cursor-pointer h-4 w-4"> <path d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z" fill="#F4DC9F" data-projection-id="18" transform-origin="24.673513412475586px 25.326481819152832px" style="transform: none; transform-origin: 24.6735px 25.3265px;"></path> </svg>'
    for (i = 0; i < svg.length; i++) {
        svg[i].classList.add("fill-white");
        svg[i].classList.remove("fill-black");
    }
}

const svgLight = () => {
    themeSwitchIcon.style.transform = "translateX(0)";
    themeSwitchIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-projection-id="1" class="sun cursor-pointer w-3 h-3"> <circle cx="11.9998" cy="11.9998" r="5.75375" fill="#FFCE31" data-projection-id="2" transform-origin="11.999799728393555px 11.999799728393555px" style="transform: none; transform-origin: 11.9998px 11.9998px;"></circle> <g data-projection-id="3" transform-origin="11.999961078166962px 11.999765396118164px" style="transform: none; transform-origin: 12px 11.9998px;"> <circle cx="3.08982" cy="6.85502" r="1.71143" transform="rotate(-60 3.08982 6.85502)" fill="#FFCE31"></circle> <circle cx="3.0903" cy="17.1436" r="1.71143" transform="rotate(-120 3.0903 17.1436)" fill="#FFCE31"></circle> <circle cx="12" cy="22.2881" r="1.71143" fill="#FFCE31"></circle> <circle cx="20.9101" cy="17.1436" r="1.71143" transform="rotate(-60 20.9101 17.1436)" fill="#FFCE31"></circle> <circle cx="20.9101" cy="6.8555" r="1.71143" transform="rotate(-120 20.9101 6.8555)" fill="#FFCE31"></circle> <circle cx="12" cy="1.71143" r="1.71143" fill="#FFCE31"></circle> </g> </svg>'
    for (i = 0; i < svg.length; i++) {
        svg[i].classList.remove("fill-white");
        svg[i].classList.add("fill-black");
    }
}

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        svgDark();
        return;
    }
    svgLight();    
};


const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        svgLight();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    svgDark();
}

themeSwitchToggle.addEventListener("click", () => {
    themeSwitch();
});

// moonIcon.addEventListener("click", () => {
//     themeSwitch();
// });

themeCheck();
