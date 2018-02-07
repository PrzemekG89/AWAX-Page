$(window).ready(function () {

    $(document).scroll(function () {
        var scrollTop = $(window).scrollTop(),
            elementOffset = $('#facts').offset().top,
            distance = (elementOffset - scrollTop);
        console.log(distance);

        if (distance >= 500) {
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
        }
    })
});

$(document).ready(function () {
    let scrollY = 0;
    $(window).scroll(function () {
        scrollY = $(this).scrollTop();
        if (scrollY >= 600) {
            $('.scrollup').css('visibility', 'visible')
        }
        else if (scrollY < 600) {
            $('.scrollup').css('visibility', 'hidden')
        }
    })
});