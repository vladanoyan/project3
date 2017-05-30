


/*__________Listing Details Slider Starts ________*/

/* Function for Flex Slider Initialization */

	if($('#thumbnails').length)
		$('#thumbnails').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 94,
			itemMargin: 2,
			asNavFor: '#slider'
		});


	if($('#slider').length)
		$('#slider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: true,
			slideshow: false,
			sync: "#thumbnails",
			start: function(slider){
				$('body').removeClass('loading');
				//setListItmDtlDescHeight();
			}
		});



/* Function for Adding Listing Details Gallery Thumbnails Starts */
function addFakeThumbs() {
	$('#thumbnails').css('width', 'auto');
	var curThumbCnt=$('.real-thumb').length;
	var thumbContWidth=$('#thumbnails').outerWidth()-36;
	var fitThumbCnt=thumbContWidth/96;
	var addThumbCnt= Math.floor(fitThumbCnt-curThumbCnt);
	for(i=0; i<addThumbCnt; i++)
	{
		if(i==0)
			$('.real-thumb').last().
			after('<li style="margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
		else
			$('.fake-thumb').last().
			after('<li style="margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
	}
	if(addThumbCnt>0)
		$('#thumbnails .flex-direction-nav').css('display','none');

	$('.fake-thumb').unbind('click');
};

$(function(){
	addFakeThumbs();
});
$(window).bind('resize', function() {
	addFakeThumbs();
});
addFakeThumbs();
/*__________Listing Details Slider Ends ________*/


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

$(window).load(function(){
	$('.file-input').each(function(index, element) {
		setFileInputTextElipsis(this);
	});
});
/*__________File Input Elipsis Functions End__________*/