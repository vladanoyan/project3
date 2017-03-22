
/*Carousel Head*/
$(document).ready(function(){
/*__________Tooltip Initialization Starts__________*/
var startTooltip= function() {
    var hideAllTooltips = function() {
        $('[data-toggle="tooltip"]').each(function() {
            $(this).tooltip('hide');
            $(this).attr('data-visible',false);
        });
    };

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').bind('click', function(e) {

        e.preventDefault();
        e.stopPropagation();
        if($(this).attr('data-visible')=='true')
        {
            $(this).tooltip('hide');
            $(this).attr('data-visible',false);
        }
        else
        {
            $(this).tooltip('show');
            $(this).attr('data-visible',true);
        }

    });

    $(document).click(function (e) {
        $('[data-toggle="tooltip"]').attr('data-visible',false);
    });
}

$(function() {
    startTooltip();
});
$(document).ajaxComplete(function() {
    startTooltip();
});
/*__________Tooltip Initialization Ends__________*/


/*_________Changing Toggle Button Active State Starts__________*/
$(".navbar-toggle").click(function(){
    if($("div .navbar-collapse").attr("aria-expanded")=="true")
    {
        $(".navbar-toggle .icon-bar").addClass('navbar-toggle-normal');
        $(".navbar-toggle .icon-bar").removeClass('navbar-toggle-active');
    }
    else
    {
        $(".navbar-toggle .icon-bar").removeClass('navbar-toggle-normal');
        $(".navbar-toggle .icon-bar").addClass('navbar-toggle-active');
    }

});
/*_________Changing Toggle Button Active State Ends__________*/


    /*_________ Form Wizard Model1 Starts __________*/
    /* Form Validate Function */
    var validateForm = function(tabId, sectionId) {
        switch(sectionId)
        {
            case 'property-inf-request':
                switch(tabId)
                {
                    case 'tab1':
                        return true;
                        break;
                    case 'tab2':
                        return false;
                        break;
                    case 'tab3':
                        return true;
                        break;

                }
        }
        return true;
    }

    /* Navigate to Tab Function */
    var navigateToTab = function(tabEl) {
        setTimeout(function(){
            $('.file-input').each(function(index, element) {
                setFileInputTextElipsis(this);
            });
        }, 500);

        /*$('#form-wizard').find('li').removeClass('visited-step');*/

        /*__________File Input Elipsis Functions Start__________*/
        var setFileInputTextElipsis=function(cur) {
            var filename = $(cur).val().split('\\').pop();
            if(filename=='')
                filename=$(cur).attr('data-placeholder');
            var allowableWidth=$(cur).parent().find(".file-custom").outerWidth()-$(cur).parent().find( ".file-custom-txt" ).outerWidth();
            $(cur).parent().find( ".file-name-inner" ).text(middleElipsis(filename,allowableWidth));

            $(cur).parent().find( ".file-name").outerWidth($(cur).parent().outerWidth()-$(cur).parent().find( ".file-custom-txt").outerWidth());
            if($('.file-custom-left').length)
                $(cur).parent().find( ".file-custom-left" ).css('padding-left',$(cur).parent().find( ".file-custom-txt").outerWidth());
            if($('.file-custom-right').length)
                $(cur).parent().find( ".file-custom-right" ).css('padding-right',$(cur).parent().find( ".file-custom-txt").outerWidth());
        };

        $('.file-input').change(function() {
            setFileInputTextElipsis(this);
        });

        $(function(){
            $('.file-input').each(function(index, element) {
                setFileInputTextElipsis(this);
            });
        });

        $(window).resize(function(){
            $('.file-input').each(function(index, element) {
                setFileInputTextElipsis(this);
            });
        });


        /*__________File Input Elipsis Functions End__________*/
        /* Validation for Current Tab */
        var curTabHref=tabEl.find('>a').attr('href');
        var curTabId=curTabHref.substring(1, curTabHref.length);
        var curSectionId = tabEl.closest('section').attr('id');
        if(validateForm(curTabId, curSectionId))
        {
            /* Validation for Prevous Tabs */
            tabEl.prevAll().each(function(){
                var prevTab=$(this);
                var prevTabHref=prevTab.find('>a').attr('href');
                var tabId=prevTabHref.substring(1, prevTabHref.length);
                prevTab.addClass('visited-step');
                if(validateForm(tabId, curSectionId))
                    prevTab.find('>a').html('<i class="fa fa-check"></i>');
            })
            tabEl.find('>a').html('<i class="fa fa-check"></i>');
            tabEl.addClass('visited-step');
        }
        else
            return false;
    }

    $(function() {
        if($('#form-wizard').length)
            $('#form-wizard').bootstrapWizard(
                {
                    onNext: function(tab, navigation, index) {
                        return navigateToTab(tab);
                    },
                    onPrevious: function(A, b, c){
                        return true;
                    },
                    onTabChange: function(tab, navigation, index) {
                        return navigateToTab(tab);
                    }
                }
            );
    });
    /*_________ Form Wizard Model1 Ends __________*/

    // Multiselect
    $('#select-box2-filter,#select-box2-filter2,#select-box2-filter3,#select-box2-filter4').multiselect({
        includeSelectAllOption: true,
        selectAllText:'Tout sélectionner',
        allSelectedText:'Tout sélectionné',
        nSelectedText: 'Sélectionné',
        numberDisplayed: 1,
    });
    $('#localisation_multi').multiselect({
        includeSelectAllOption: true,
        selectAllText:'Tout sélectionner',
        allSelectedText:'Tout sélectionné',
        nSelectedText: 'Sélectionné',
        numberDisplayed: 1,
    });
    // /Multiselect

/*toggle icon*/
$('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });



    $('.ourNewCarousel').owlCarousel({
        loop: true,
        items:1,
        autoplay:true,
        animateOut: 'fadeOut'
    });


    $('.ourSecondCarousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay:true,
        nav: true,
        autoplayTimeout:3000,
        navText: ["<",">"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            550:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true
            },
            1200:{
                items:4,
                nav:true
            }
    }
    });
/*chenge btn text*/

        $('#equipment').click(function(){
        $('#equipment').toggleClass('flashOn flash')
    });

   /*__________Listing Model3 Functions Start_________*/
/* Match Item heights for Listing Item */
var matchHeightLstItm=function(){
    if(window.innerWidth>=992)
    {
        if($('.listing-item-content').length)
            $('.listing-item-content').css('height', 'auto');

        if($('.listing-item-img').length)
            $('.listing-item-img').outerHeight($('.listing-item-content').outerHeight());
    }
    else
        $('.listing-item-img').css('height','auto');
};

/*__________Listing Details Gallery Starts ________*/
/* Lightbox Gallery */
$(function(){
    if($('.listing-dtl-gallery').length)
    {
        var gallery = $('.listing-dtl-gallery .gal-class').simpleLightbox({
            navText:['',''],
        })
        var gallery1 = $('.listing-dtl-gallery .gal-class1').simpleLightbox({
            navText:['',''],
        })

        var galCustomStyleForNav=function(){
            var imgWidth = $('.sl-image').width();
            var windowWidth = window.innerWidth;
            var marg=(windowWidth-imgWidth)/2;
            $('.sl-prev').css('left', marg);
            $('.sl-next').css('right', marg);
            $('.sl-prev').css('visibility', 'visible');
            $('.sl-next').css('visibility', 'visible');
        };

        $('.listing-dtl-gallery .gal-class').on('shown.simplelightbox', function () {
            galCustomStyleForNav();
        });
        $('.listing-dtl-gallery .gal-class1').on('shown.simplelightbox', function () {
            galCustomStyleForNav();
        });
        $(window).bind('resize', function(){
            galCustomStyleForNav();
        });

    }
});
/*__________Listing Details Gallery Ends ________*/




    /*__________DPE GES Hover Effect Starts________*/
    $(document).on({
        mouseenter: function(e) {
            $(".btn-hover-container").not(this).find(".hover-content").stop(true, true).delay(300).slideUp(300);
            $(this).find(".hover-content").stop(true, true).delay(400).slideToggle(400);
        },
        mouseleave: function(e) {
            $(this).find(".hover-content").stop(true, true).delay(300).slideUp(300);
        },
    }, '.no-touchevents .btn-hover-container');

    $(document).on('click','.touchevents .btn-hover-container',function(e){
        e.stopPropagation();
        $(".btn-hover-container").not(this).find(".hover-content").stop(true, true).slideUp(400);
        $(this).find(".hover-content").stop(true, true).slideToggle(400);
    });
    $(document).on("click", function(e) {
        $(".hover-content").stop(true, true).slideUp(400);
    });
    /*__________DPE GES Hover Effect Ends________*/

});