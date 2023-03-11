var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
$('#particles-js').css('height', height);

$('.post-content a').attr('target', '_blank');

$('.project a').attr('target', '_blank');
