$(window).load(function () {
    $('.logo-element').addClass("active-loading");
    setTimeout(function () {
        $('.loader-image').addClass('animated ');
        $('.loader-image').addClass('animated ');
        $('.logo-element').fadeOut('slow', function () {});
    }, 0); // set the time here
    setTimeout(function(){
        $('.logo-element').removeClass("active-loading");

    },0)

})


var currentPosition = 2;
var lastElement = 5;
var firstElement = 2;
var open = 0;
var oldDate = new Date();
/*
(function ($) {
    setTimeout(function() {
    var elem = $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
        {
            width: 'auto',
            height: 12000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function (percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                //console.log(percent);
            }
        });
    },0);
    
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            elem.destroy();
        } else {
            elem.reinitialize();
        }
    });
}(jQuery));

*/
$(document).ready(function () {
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
    $(document).delegate('.open', 'mouseenter tap', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
     
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    })
     $(document).delegate('a', 'click', function (event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
    $('#sidebar').mouseleave(function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
    /*
    var indicator = new WheelIndicator({
        elem: document.querySelector('.container'),
        callback: function (e) {
            closeDetailsPage()
            if (!($('.logo-element').hasClass("active-loading"))) {



                if (e.direction == "up") {
                    if (currentPosition - 1 >= firstElement) {
                        var temp = currentPosition;
                        currentPosition = currentPosition - 1;
                        var tempString = temp.toString();
                        var string = currentPosition.toString();

                        $("#" + string + "link").addClass("active")
                        $("#" + tempString + "link").removeClass("active")
                        $('html,body').animate({
                                scrollTop: $("#" + string).offset().left
                            },
                            'slow');
                    }
                } else {
                    if (currentPosition + 1 <= lastElement) {
                        var temp = currentPosition;
                        currentPosition = currentPosition + 1;
                        var tempString = temp.toString();
                        var string = currentPosition.toString();
                        $("#" + string + "link").addClass("active")
                        $("#" + tempString + "link").removeClass("active")
                        $("a").animate({
                            color: '​#f31c31'
                        }, 1000);
                        $('html,body').animate({
                                scrollTop: $("#" + string).offset().left
                            },
                            'slow');
                    }
                }
            }
        }
    });
    indicator.getOption('preventMouse');
*/

});
$('#page').touchwipe({
    wipeLeft: function () {
        if (currentPosition + 1 <= lastElement) {
            var temp = currentPosition;
            currentPosition = currentPosition + 1;
            var tempString = temp.toString();
            var string = currentPosition.toString();
            $("#" + string + "link").addClass("active-nav")
            $("#" + tempString + "link").removeClass("active-nav")
            $("a").animate({
                color: '​#f31c31'
            }, 1000);
            $('html,body').animate({
                    scrollTop: $("#" + string).offset().left
                },
                'slow');
        }
    },
    wipeRight: function () {
        if (currentPosition - 1 >= firstElement) {
            var temp = currentPosition;
            currentPosition = currentPosition - 1;
            var tempString = temp.toString();
            var string = currentPosition.toString();

            $("#" + string + "link").addClass("active-nav")
            $("#" + tempString + "link").removeClass("active-nav")
            $('html,body').animate({
                    scrollTop: $("#" + string).offset().left
                },
                'slow');
        }
    },
    min_move_x: 100,
    min_move_y: 100,
    preventDefaultEvents: true

});


function goToByScroll(id) {
    // Reove "link" from the ID
    id = id.replace("link", "");

    // Scroll
    var current_left = $('html').offset().left;
    currentPosition = parseInt(id);




    $('html,body').animate({
            scrollTop: $("#" + id).offset().left
        },
        'slow');


}

$(".navbar-hrefs").click(function (e) {
   alert('lol')
    $("#sidebar").removeClass("oppenned");

    
});


$("#1").click(function (e) {
    closeDetailsPage()
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll("2link");
    $("#sidebar > span > ul > li > a").removeClass("active-nav");

    $(this).addClass("active-nav");
});


$('.container').click(function (e) {
    var focus = currentPosition.toString();
    if (open == 0) {

        $('#more-' + focus).css({
            visibility: "visible",
            top: '100vh',
            height: '100vh',
            z: 100
        }).stop().animate({
            top: 0,
            height: '100vh'
        }, 1000);

        open = 1;
    }



});

function closeDetailsPage() {
    var focus = currentPosition.toString();
    $("#more-" + focus).css({
        visibility: "hidden",
        top: '100vh',
        height: '100vh',
        z: 100
    }).stop().animate({
        top: 0,
        height: '0vh',
        visibility: "hidden",
    }, 1000);
    open = 0;
}
