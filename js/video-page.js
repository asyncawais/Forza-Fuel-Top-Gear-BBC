(function($) {
    $(document).ready(function() {
        $('#videos-wrapper .video-thumbnails ul li.off').css('opacity', '0.5');
        $('#video-4').show();
        $('#videos-wrapper .video-thumbnails ul li a.thumb').click(function(e) {
            e.preventDefault();
            if ($(this).parent().hasClass('off')) {
                return;
            }
            var id = $(this).parent().attr('id').split('-')[1];
            $('#video-' + id).fadeIn(400).siblings().fadeOut(400);
        });
        $('.scroll-to').click(function(e) {
            e.preventDefault();
            var section = $(this).attr('href').slice(1);
            var sectionTop = $('a[name="' + section + '"]').offset().top
            $('body, html').animate({
                'scrollTop': sectionTop + 'px'
            }, 600);
        });
    });
})(jQuery);