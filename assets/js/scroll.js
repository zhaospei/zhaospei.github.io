window.onload = function () {
    const $content = $(".post-content");
    const $selectors = $content.children("h1, h2, h3, h4");
    const articleH = $(".page-navigation").offset().top - $(".post-content").offset().top;

    $(window).scroll(function(){
        var windowY = $(window).scrollTop();
        var endselector;
        const curarticleH = windowY - $(".post-content").offset().top;
        if (curarticleH > 0 && curarticleH <= articleH) {
            $(".reading-line").width(curarticleH * 100 / articleH + "vw");
        } else if (curarticleH < 0) {
            $(".reading-line").width(0);
        } else {
            $(".reading-line").width("100vw");
        }
        $selectors.each(function(){
            if ($(this).offset().top - 40 <= windowY) {
                endselector = $(this);
            }
        });
        if (endselector != undefined) {
            const id = endselector.attr('id');
            $('.toc-entry').each(function() {
                $(this).removeClass('active');
            })
            $par = $(`.toc-entry a[href="#${id}"]`).parent();
            while (true) {
                $par.addClass('active');
                $par = $par.parent();
                if ($par.hasClass("table-of-contents-container")) break;
                $par = $par.parent();
                if ($par.hasClass("table-of-contents-container")) break;
            }
        }
    });
}