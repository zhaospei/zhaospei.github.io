var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
$('#particles-js').css('height', height);

$('.post-content a').attr('target', '_blank');

$('.project a').attr('target', '_blank');

$('.toc-entry a').click(function(){
    $('.toc-entry').each(function(){
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');
});