jQuery(document).ready(function () {
    jQuery(".menu-item-6771").click(function(){
        jQuery("#qodef-side-area").css('right', 0).css('width', '100%').css('visibility', 'visible');
    });
    jQuery("#qodef-side-area-close").click(function(){
        jQuery("#qodef-side-area").css('right', '-3000px');
    });
    jQuery(document).on("click", ".request-quote" , function(e) {
        e.preventDefault();
        jQuery("#qodef-side-area").css('right', 0).css('width', '100%').css('visibility', 'visible');
    });
    jQuery('.portfolio-item h4').remove();
    jQuery('.portfolio-item a').click(function(e){
        console.log('clicked');
        e.preventDefault();
        var theImage = jQuery(this).find('img').attr('src');
        theImage = theImage.replace("-400x400", "");
        jQuery('#qodef-page-wrapper').append('<div class="qodef-side-area-cover"></div>');
        jQuery('.qodef-side-area-cover').css('opacity',1).css('z-index',500).css('display','flex').css('justify-content','center').css('align-items','center').css('background-color','rgba(0,0,0,.7)');
        jQuery('.qodef-side-area-cover').append('<div class="i-wrap"><img src="'+theImage+'"></div>');
        jQuery('.qodef-side-area-cover .i-wrap').css('position','relative');
        jQuery('.qodef-side-area-cover .i-wrap').append('<a class="custom-close" href="javascript:void(0)"><span class="qodef-lines"><span class="qodef-line qodef-line-1"></span><span class="qodef-line qodef-line-2"></span><span class="qodef-line qodef-line-3"></span><span class="qodef-line qodef-line-4"></span><span class="qodef-line qodef-line-5"></span></span></a>');
    });
    jQuery(document).on("click", ".custom-close" , function(e) {
        jQuery('.qodef-side-area-cover').remove();
    });

    jQuery('.page-template h1').after('<a class="hero-cta qodef-shortcode qodef-m request-quote qodef-button qodef-layout--splitted  qodef-html--link" href="#" target="_self" style="background-color: #299EF8">\n' +
        '    <span class="qodef-m-text">\n' +
        '        Request a Quote        <svg class="qodef-m-arrowline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63 20" xml:space="preserve">\n' +
        '                            <line x1="61.6" y1="10" x2="61.6" y2="10"></line>\n' +
        '                            <line x1="62" y1="10" x2="61.6" y2="10"></line>\n' +
        '                            <line x1="61.6" y1="10" x2="1" y2="10"></line>\n' +
        '                            <path d="M61.6,10"></path>\n' +
        '                            <line x1="61.6" y1="10" x2="61.6" y2="10"></line>\n' +
        '                            <line class="arrow-up" x1="56.7" y1="5.1" x2="61.6" y2="10"></line>\n' +
        '                            <path d="M61.6,10"></path>\n' +
        '                            <line x1="61.6" y1="10" x2="61.6" y2="10"></line>\n' +
        '                            <line class="arrow-down" x1="61.6" y1="10" x2="56.7" y2="14.9"></line>\n' +
        '                        </svg>    </span>\n' +
        '    <span class="qodef-m-split qodef-split--up"></span>\n' +
        '    <span class="qodef-m-split qodef-split--down"></span>\n' +
        '</a>');

});

