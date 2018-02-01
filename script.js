$(document).ready(function () {
    $('a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });
});


$(window).ready(function () {
            $('.count1').countTo({
                from: 0,
                to: 1000,
                speed: 3000,
                refreshInterval: 90
            });
            $('.count2').countTo({
                from: 0,
                to: 900,
                speed: 3000,
                refreshInterval: 90
            });
            $('.count3').countTo({
                from: 0,
                to: 500,
                speed: 3000,
                refreshInterval: 90
            });
            $('.count4').countTo({
                from: 0,
                to: 100,
                speed: 3000,
                refreshInterval: 80
            });
})

$(document).ready(function() {
    let scrollY = 0;
    $(window).scroll(function(){
        scrollY = $(this).scrollTop();
        if(scrollY >= 600) {
            $('.scrollup').css('visibility', 'visible')
        }
        else if(scrollY < 600) {
            $('.scrollup').css('visibility', 'hidden')
        }
    })
});