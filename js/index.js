var clickClass;
var isCont = false;

$(function () {
    

    $('.menuList').on('click', function (e) {
        e.preventDefault();
        var clickID = $(this).data('id');

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': 'menu0' + clickID
        });

        $('html, body').animate({
            scrollTop: $(".section" + clickID).offset().top
        }, 1000);
    });

    $('.cont1 .cont1-btn2').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 1;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '01_apply'
        });
    });

    $('.cont2 .cont2-btn2').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 2;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '02_apply'
        });
    });

    $('.cont3 .cont3-btn2').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 3;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '03_apply'
        });
    });
    $('.cont4 .cont4-btn2').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 4;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '04_apply'
        });
    });
    $('.cont5-1 .cont5-btn1').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 5;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '05_apply'
        });
    });
    $('.cont6 .cont6-btn2').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 6;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '06_apply'
        });
    });
    $('.cont7 .cont7-btn1').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 7;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_apply'
        });
    });
    $('.cont8 .cont8-btn2').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 8;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '08_apply'
        });
    });

    $('.cont2 .cont2-btn1').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain2').fadeIn("fast");
        divHide();
        clickClass = 2;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '02_learnmore'
        });
    });
    
    $('.cont3 .cont3-btn1').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain3').fadeIn("fast");
        divHide();
        clickClass = 3;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '03_learnmore'
        });
    });

    $('.cont4 .cont4-btn1').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain4').fadeIn("fast");
        divHide();
        clickClass = 4;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '04_learnmore'
        });
    });

    $('.cont5-2 .cont5-btn2').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain5-1').fadeIn("fast");
        divHide();
        clickClass = 5;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '05_learnmore_VIP'
        });
    });
    $('.cont5-3 .cont5-btn3').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain5-2').fadeIn("fast");
        divHide();
        clickClass = 5;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '05_learnmore_fastpass'
        });
    });
    $('.cont5-4 .cont5-btn4').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain5-3').fadeIn("fast");
        divHide();
        clickClass = 5;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '05_learnmore_freeshuttle'
        });
    });
    $('.cont6 .cont6-btn1').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain6').fadeIn("fast");
        divHide();
        clickClass = 6;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '06_learnmore'
        });
    });

    $('.cont7-click .cont7-Btn').on('click', function (e) {
        e.preventDefault();
        $('.cardMain').fadeIn("fast");
        divHide();
        clickClass = 7;
    });
    $('.cont7-click .cont7-more1').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain7-1').fadeIn("fast");
        divHide();
        clickClass = 7;

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_learnmore_Aparking'
        });
    });
    $('.cont7-click .cont7-more2').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain7-2').fadeIn("fast");
        divHide();
        clickClass = 7;
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_learnmore_parking'
        });
    });
    $('.cont7-click .cont7-more3').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain7-3').fadeIn("fast");
        divHide();
        clickClass = 7;
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_learnmore_insurance'
        });
    });
    $('.cont7-click .cont7-more4').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain7-4').fadeIn("fast");
        divHide();
        clickClass = 7;
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_learnmore_transfer'
        });
    });
    $('.cont7-click .cont7-more5').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain7-5').fadeIn("fast");
        divHide();
        clickClass = 7;
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_learnmore_food'
        });
    });
    $('.cont7-click .cont7-more6').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain7-6').fadeIn("fast");
        divHide();
        clickClass = 7;
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_learnmore_wifi'
        });
    });
    $('.cont7-click .cont7-more7').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain7-7').fadeIn("fast");
        divHide();
        clickClass = 7;
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_learnmore_dutyfree'
        });
    });
    $('.cont8 .cont8-btn1').on('click', function (e) {
        e.preventDefault();
        $('.cardContMain8').fadeIn("fast");
        divHide();
        clickClass = 8;
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '08_learnmore'
        });
    });


    $('.linkBtn').on('click', function (e) {
        e.preventDefault();
        window.open('https://www.taishinbank.com.tw/TS/TS06/TS0602/TS060225/?pc=09', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': 'top_apply'
        });
    });
    $('.contLink2').on('click', function (e) {
        e.preventDefault();
        window.open('https://www.cathaypacific.com/cx/zh_TW/offers/flight/taihsin-bank-cobrand-card-exclusive-offer/launch-offer.html', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '02_flight'
        });
    });
    $('.contLink5-2-1').on('click', function (e) {
        e.preventDefault();
        window.open('http://www.24tms.com.tw/mastercard.html', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '05_freeshuttle_mastermcard'
        });
    });
    $('.contLink5-2-2').on('click', function (e) {
        e.preventDefault();
        window.open('https://goo.gl/rFy23L', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '05_freeshuttle_apply'
        });
    });
    $('.contLink5-3').on('click', function (e) {
        e.preventDefault();
        window.open('https://goo.gl/rFy23L', '_blank');
    });
    $('.contLink6').on('click', function (e) {
        e.preventDefault();
        window.open('https://www.cathaypacific.com/cx/zh_TW/offers/flight/taihsin-bank-cobrand-card-exclusive-offer/10-percent-off-discount-offer.html', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '06_buy'
        });
    });
    $('.contLink6-1').on('click', function (e) {
        e.preventDefault();
        window.open('https://www.asiamiles.com/', '_blank');
    });
    $('.contLink7-5-1').on('click', function (e) {
        e.preventDefault();
        window.open('https://goo.gl/XJeAe6', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_food_restaurant'
        });
    });
    $('.contLink7-5-2').on('click', function (e) {
        e.preventDefault();
        window.open('https://goo.gl/XJeAe6', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_food_offer'
        });
    });
    $('.contLink7-6').on('click', function (e) {
        e.preventDefault();
        window.open('https://www.roamingbar.com', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '07_freewifi_apply'
        });
    });
    $('.contLink8').on('click', function (e) {
        e.preventDefault();
        window.open('https://www.taishinbank.com.tw/TS/TS06/TS0601/index.htm?urlPath1=TS02&urlPath2=TS0206&uuid=f08db6d4-8342-49eb-bb80-2e5e42a66621', '_blank');

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': '08_service'
        });
    });

    $('.logo1').on('click', function (e) {
        e.preventDefault();
        window.open('https://www.taishinbank.com.tw/TS/TS02/TS0298/TS0298-SEC', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': 'logo_taishin'
        });
    });
    $('.logo2').on('click', function (e) {
        e.preventDefault();
        window.open('https://www.cathaypacific.com/cx/zh_HK.html', '_blank');
        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': 'logo_cathay'
        });
    });

    $('.fbBtn').on('click', function (e) {
        e.preventDefault();
        shareOnFacebook('', "http://www1.jwttw.com/event/cathaycobrand/", '台新國泰航空聯名卡，讓每次飛行都精彩', '立即申辦即享越飛越有哩，最優5元累積1里數，首刷滿額最高再享40,000里數回饋！');

        gtag('event', 'button', {
            'event_category': 'click',
            'event_label': 'fbshare'
        });
    });
    

    $('.boxClose').on('click', function (e) {
        e.preventDefault();
        divShow();
        $('.cardMain').fadeOut("fast");
        $('.cardContMain2').fadeOut("fast");
        $('.cardContMain3').fadeOut("fast");
        $('.cardContMain4').fadeOut("fast");
        $('.cardContMain5-1').fadeOut("fast");
        $('.cardContMain5-2').fadeOut("fast");
        $('.cardContMain5-3').fadeOut("fast");
        $('.cardContMain6').fadeOut("fast");
        $('.cardContMain7-1').fadeOut("fast");
        $('.cardContMain7-2').fadeOut("fast");
        $('.cardContMain7-3').fadeOut("fast");
        $('.cardContMain7-4').fadeOut("fast");
        $('.cardContMain7-5').fadeOut("fast");
        $('.cardContMain7-6').fadeOut("fast");
        $('.cardContMain7-7').fadeOut("fast");
        $('.cardContMain8').fadeOut("fast");
    });

    $('.menuBtn').on('click', function (e) {
        e.preventDefault();
        $('.menu').show();
    });
    $('.menuClose').on('click', function (e) {
        e.preventDefault();
        $('.menu').hide();
    });
    
    $(window).scroll(function () {
        var h = window.innerHeight ? window.innerHeight : $(window).height();

        var scrollPercent = $(window).scrollTop() / ($(document).height() - h);

        //console.log(scrollPercent);
        if (!isCont) {
            if (scrollPercent > 0.24 && scrollPercent < 0.26) {
                gtag('event', 'scroll', {
                    'event_category': '25%'
                });
            } else if (scrollPercent > 0.49 && scrollPercent < 0.51) {
                gtag('event', 'scroll', {
                    'event_category': '50%'
                });
            } else if (scrollPercent > 0.74 && scrollPercent < 0.76) {
                gtag('event', 'scroll', {
                    'event_category': '75%'
                });
            } else if (scrollPercent == 1) {
                gtag('event', 'scroll', {
                    'event_category': '100%'
                });
            }
        }
    });
});

function trackEvent(event) {
    gtag('event', 'button', {
        'event_category': 'click',
        'event_label': event
    });
}

function divHide() {
    for (var i = 1; i < 9; i++) {
        $('.section' + i).hide();
    }
    $('.footer-pc').hide();
    $('.copyRight').hide();
    $('.footer-mobile').hide();
    $('.warnings_pc').hide();
    $('.warnings_mobile').hide();

    $('html, body').animate({
        scrollTop: 0
    }, 0);
    isCont = true;
}

function divShow(){
    for (var i = 1; i < 9; i++) {
        $('.section' + i).show();
    }

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width <= 480) {
        $('.footer-mobile').show();
        $('.warnings_mobile').show();
    } else {
        $('.footer-pc').show();
        $('.copyRight').show();
       
        $('.warnings_pc').show();
    }
   
    

    $('html, body').animate({
        scrollTop: $(".section" + clickClass).offset().top
    }, 0);
    isCont = false;
}

function shareOnFacebook(fb_image, link, title, summary) {
    var _fb_image = encodeURIComponent(fb_image);
    var _link = link;
    var _title = title;
    var _summary = summary;

    var url = "http://www.facebook.com/sharer.php?s=100&p[url]={url}&p[title]={title}&p[summary]={summary}&p[images][0]=" + _fb_image;
    //var url = "http://www.facebook.com/sharer.php?u={url}&t={title}";

    url = url.replace(/{title}/gi, encodeURIComponent(_title));
    url = url.replace(/{url}/gi, encodeURIComponent(_link));
    url = url.replace(/{summary}/gi, encodeURIComponent(_summary));

    void (window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A//www.taishinbank.com.tw/event/CathayCobrand", 'shareOnFacebook', 'height=450, width=550,top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no'));
    //void (window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A//www1.jwttw.com/event/taishinbank2017/", 'shareOnFacebook', 'height=450, width=550,top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no'));

}