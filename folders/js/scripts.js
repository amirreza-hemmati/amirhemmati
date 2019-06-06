$(document).ready(function () {
    /*start code index page */
    /*menu*/
    $("#span-menu").click(function (e) {
        $("header > nav > ul").toggleClass("menu");
        $(window).scroll(function () {
            $("header > nav > ul").removeClass("menu");
            $("#span-menu > div").eq(0).removeClass("one");
            $("#span-menu > div").eq(1).removeClass("three");
            $("#span-menu > div").eq(2).removeClass("two");
        })
        $("#span-menu > div").eq(0).toggleClass("one");
        $("#span-menu > div").eq(1).toggleClass("three");
        $("#span-menu > div").eq(2).toggleClass("two");
    });

    /*scroll top*/
    var top = document.getElementById("scrollTop");
    $(top).click(function (e) {
        $("html , body").animate({
            "scrollTop": 0
        }, 2000);
    });

    /*scroll bottom*/
    var bottom = document.getElementById("scrollBottom");
    $(bottom).click(function (e) {
        $("html , body").animate({
            "scrollTop": $(document).height()
        }, 2000);
    });


    function hovers()/*make a object*/ {
        this.hover = function (e) {
            $(".card").eq(e).hover(function () {
                /*mouse Enter*/
                $(".card-header").eq(e).removeClass("imges");
                $(".card-header").eq(e).addClass("bg-dark");
            }, function () {
                /*mouse Leave*/
                $(".card-header").eq(e).addClass("imges");
                $(".card-header").eq(e).removeClass("bg-dark");
            },
            );
        };
    }; var hover = new hovers();/*object for background-color cards*/
    hover.hover(0); hover.hover(1); hover.hover(2); hover.hover(3);/*background-color for .cars*/
    /*finit index page*/

    /*start code calculator page */
    /*ezafeh kardan mavared az tarigh dokmeh*/
    $(".btns").click(function (e) {
        $("#d-javab").append($(this).val());
    });

    /*mohasebeh javab ba dokmeh*/
    $("#btn-javab").click(function (e) {
        var javabs1 = $("#d-javab").text();
        $("#d-javab").text(eval(javabs1));
    });

    /*pak koonandeh mohasebeh*/
    $("#btn-remove").click(function (e) {
        $("#d-javab").text("")
    });

    /*keyboard click for calculator*/
    $(document).keyup(function (e) {
        var javabs = $("#d-javab").text();
        var a = e.keyCode;
        switch (a) {
            case 96: {
                $("#d-javab").append("0");
                break;
            }
            case 97: {
                $("#d-javab").append("1");
                break;
            }
            case 98: {
                $("#d-javab").append("2");
                break;
            }
            case 99: {
                $("#d-javab").append("3");
                break;
            }
            case 100: {
                $("#d-javab").append("4");
                break;
            }
            case 101: {
                $("#d-javab").append("5");
                break;
            }
            case 102: {
                $("#d-javab").append("6");
                break;
            }
            case 103: {
                $("#d-javab").append("7");
                break;
            }
            case 104: {
                $("#d-javab").append("8");
                break;
            }
            case 105: {
                $("#d-javab").append("9");
                break;
            }
            /*
            */
            case 48: {
                $("#d-javab").append("0");
                break;
            }
            case 49: {
                $("#d-javab").append("1");
                break;
            }
            case 50: {
                $("#d-javab").append("2");
                break;
            }
            case 51: {
                $("#d-javab").append("3");
                break;
            }
            case 52: {
                $("#d-javab").append("4");
                break;
            }
            case 53: {
                $("#d-javab").append("5");
                break;
            }
            case 54: {
                $("#d-javab").append("6");
                break;
            }
            case 55: {
                $("#d-javab").append("7");
                break;
            }
            case 56: {
                $("#d-javab").append("8");
                break;
            }
            case 57: {
                $("#d-javab").append("9");
                break;
            }
            case 61: {
                $("#d-javab").text(eval(javabs))
                break;
            }
            case 13: {
                $("#d-javab").text(eval(javabs))
                break;
            }
            case 107: {
                $("#d-javab").append("+");
                break;
            }
            case 106: {
                $("#d-javab").append("*");
                break;
            }
            case 109: {
                $("#d-javab").append("-");
                break;
            }
            case 108: {
                $("#d-javab").append("/");
                break;
            }
        }
    });
    /*finit calculator page*/

    /* start phone */
    /* start date phone */
    $("#btn-doc").click(function (e) {
        $("#db2-phone").fadeIn(500);
    });
    var dater = new Date;
    var sefr = 0;
    var hours = dater.getHours();
    var minuts = dater.getMinutes();
    $("#d-clock").html(hours + " : " + minuts);
    setInterval(function () {
        ++sefr;
        $("#d-clock").html(hours + " : " + minuts);
        if (sefr > 60) {
            sefr = 0;
            ++minuts;
            $("#d-clock").html(hours + " : " + minuts);
            if (minuts > 60) {
                minuts = 0;
                ++hours;
                $("#d-clock").html(hours + " : " + minuts);
            }
        }
    }, 1000);
    /* finit date phone */
    /* start day phone */
    var phoneDay = dater.getDay();
    switch (phoneDay) {
        case 0: {
            $("#d-mounth").html("یکشنبه");
            break;
        };
        case 1: {
            $("#d-mounth").html("دوشنبه");
            break;
        };
        case 2: {
            $("#d-mounth").html("سه شنبه");
            break;
        };
        case 3: {
            $("#d-mounth").html("چهارشنبه");
            break;
        };
        case 4: {
            $("#d-mounth").html("پنجشنبه");
            break;
        };
        case 5: {
            $("#d-mounth").html("جمعه");
            break;
        };
        case 6: {
            $("#d-mounth").html("شنبه");
            break;
        };
    }
    /* finit day phone */

    /* start open code phone */
    $("#span-lock-body").click(function (e) {
        $("#d-code-phone-parent").fadeIn(100);
        $("#done").fadeOut(100);
    });
    /* finit open code phone */

    /* start input:button code */
    $(".appn").click(function (event) {
        var appth = $(this).val();
        $("#text-code-phone").append(appth);
        var coder = document.getElementById("text-code-phone").innerHTML;
        if (coder.length == 5) {
            $("#text-code-phone").text("");
        };

        $("#logines").click(function (e) {
            if ($("#text-code-phone").text() == "0000") {
                /*برای باز شدن صفحه ی موزیک کدت اینجا بنویس*/
                $("#div-music-parent").fadeIn();
                $("#d-code-phone-parent").fadeOut(100);
            }
            else {
                $("#text-code-phone").text("");
            };
        });
    });

    $("#remover").click(function (e) {
        $("#text-code-phone").text("");
    });

    var First = 1;
    var imgMusic = document.getElementById("d-musicB");//../img/music1.jpg
    var musicText = document.getElementById("d-musicH");
    var music = document.getElementById("audio");
    musicText.innerHTML = First + ". music Disco";
    imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';


    $("#music-right").click(function (e) {
        if(First == 3)
        {
            First = 0;
        }
        First++;
        music.setAttribute("src", "folders/music/music" + First + ".mp3")
        music.pause();
        switch (First) {
            case 1: {
                musicText.innerHTML = First + ". music Disco";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                music.play();
                break;
            }
            case 2: {
                musicText.innerHTML = First + ". music Gentelman";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                music.play();
                break;
            }
            case 3: {
                musicText.innerHTML = First + ". music Ostad";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                music.play();

                break;
            }
        };
        $("main").addClass('musiced');
        $("#music-play").addClass("fa-stop-circle");
        $("#music-play").removeClass("fa-play-circle");
    });

    $("#music-left").click(function (e) {
        music.pause();
        if(First == 1)
        {
            First = 4;
        }
        --First;
        music.setAttribute("src", "folders/music/music" + First + ".mp3")
        switch (First) {
            case 1: {
                musicText.innerHTML = First + ". music Disco";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                music.play();
                break;
            }
            case 2: {
                musicText.innerHTML = First + ". music Gentelman ";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                music.play();
                break;
            }
            case 3: {
                musicText.innerHTML = First + ". music Ostad";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                music.play();
                break;
            }
        };
        $("main").addClass('musiced');
        $("#music-play").addClass("fa-stop-circle");
        $("#music-play").removeClass("fa-play-circle");
    });
    music.setAttribute("src", "folders/music/music" + First + ".mp3")

    $("#music-play").click(function (e) {
        $(this).toggleClass("fa-stop-circle , fa-play-circle");
        $("main").toggleClass('musiced');
        if ($("main").hasClass("musiced")) {
            music.play();
        }
        else {
            music.pause();
        }
        switch (First) {
            case 1: {
                musicText.innerHTML = First + ". music Disco";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                break;
            }
            case 2: {
                musicText.innerHTML = First + ". music Gentelman";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                break;
            }
            case 3: {
                musicText.innerHTML = First + ". music Ostad";
                imgMusic.style.backgroundImage = 'url("folders/img/music' + First +'.jpg")';
                break;
            }
        };
    });




    /* finish input:button code */
    /* start sign */
    /* finish sign */
    /* finit phone */
});