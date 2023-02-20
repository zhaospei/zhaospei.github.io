$(".magnet").each(function () {
    $(this).css("transform", "rotate(".concat(Math.floor(20 * Math.random()) - 10, "deg)"));
});
  
  function dragEnd(event) {
    var leftextra = 0.1 * window.innerWidth / 2;
    event.target.style.top = event.clientY - 60 + "px";
    event.target.style.left = event.clientX - leftextra + "px";
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