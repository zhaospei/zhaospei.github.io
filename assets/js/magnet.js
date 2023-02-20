$(".magnet").each(function () {
  $(this).css("transform", "rotate(".concat(Math.floor(20 * Math.random()) - 10, "deg)"));
});

function dragEnd(event) {
  var leftextra = 0.1 * window.innerWidth / 2;
  if (event.clientY - 60 > 200) {
    event.target.style.top = "200px";
  } else if (event.clientY < 50) {
    event.target.style.top = "0px";
  } else {
    event.target.style.top = event.clientY - 60 + "px";
  }
  var newLeft = $(window).width() - 2 * parseInt(event.target.style.width, 10) - 10;
  console.log(newLeft);
  if (event.clientX - leftextra > newLeft) {
    event.target.style.left = newLeft + "px";
  } else {
    event.target.style.left = event.clientX - leftextra + "px";
  }
  event.target.style.transform = "rotate(".concat(Math.floor(20 * Math.random()) - 10, "deg)");
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}