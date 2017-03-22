/*
 * Haytech Front End Model Core v.4.8.0
 * Copyright 2016, Haytech Solutions
 * Custom Libraries
 */

/*__________Detecting IE version(including IE11) Starts_________*/
function getInternetExplorerVersion()
{
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  // For IE11
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
/*__________Detecting Browser(including IE) Ends____________*/


/*__________Equal Heights of 2 or 3 Elements Starts_________*/
/*
	When needed we will implement general function, now there is no need 
*/
function equalHeightsSimple(elem1ClassId, elem2ClassId, elem3ClassId)
{
	var maxHeight=0;
	if(elem3ClassId=='')
	{
		var maxHeight=Math.max($(elem1ClassId).height(),$(elem2ClassId).height());
		$(elem1ClassId).height(maxHeight);
		$(elem2ClassId).height(maxHeight);
	}
	else
	{
		var maxHeight=Math.max($(elem1ClassId).height(),$(elem2ClassId).height(), $(elem3ClassId).height());
		$(elem1ClassId).height(maxHeight);
		$(elem2ClassId).height(maxHeight);
		$(elem3ClassId).height(maxHeight);
	}
	return maxHeight;
}
var applyEqualHeights =function(elem1ClassId, elem2ClassId, elem3ClassId)
{
	if(elem3ClassId=='')
	{
		$(elem1ClassId).css('height', 'auto');
		$(elem2ClassId).css('height', 'auto');
		equalHeightsSimple(elem1ClassId, elem2ClassId,'');
	}
	else
	{
		$(elem1ClassId).css('height', 'auto');
		$(elem2ClassId).css('height', 'auto');
		$(elem3ClassId).css('height', 'auto');
		equalHeightsSimple(elem1ClassId, elem2ClassId, elem3ClassId);
	}
}
/*__________Equal Heights of 2 or 3 Elements Ends_________*/


/*__________Set Line Height Starts________*/
var setLineHeight = function(idClass){
    $(idClass).each(function(){
        $(this).css('line-height',$(this).css('height'));
    });
};
var applySetLineHeight = function(idClass) {
	
    $(idClass).css('line-height','normal');
    setLineHeight(idClass);
}
/*__________Set Line Height Ends________*/


/*__________Center Header Image on Resizing Starts________*/
var  centerImage=function(imgContainer){
	var imageHeight, wrapperHeight, overlap, container = $(imgContainer);
	if($(imgContainer).length)
	{
		imageHeight = container.find('>img').height();
		wrapperHeight = container.height();
		overlapHeight = (wrapperHeight - imageHeight) / 2;
		container.find('>img').css('margin-top', overlapHeight);
		
		imageWidth = container.find('>img').width();
		wrapperWidth = container.width();
		overlapWidth = (wrapperWidth - imageWidth) / 2;
		container.find('>img').css('margin-left', overlapWidth);
	}
}
/*__________Center Header Image on Resizing Ends________*/


/*__________Middle Elipsis based on Width Starts________*/
function middleElipsis(str, currentWidth) {
  var symbCnt=currentWidth/8;
  if (str.length > symbCnt) {
      return str.substr(0, symbCnt-15) + '...' + str.substr(str.length-10, str.length);
  }
  return str;
}
/*__________Middle Elipsis based on Width Ends________*/


/*__________Equal Heights by Different Col Appropriate Rows Starts________*/
/*
* leftCol- left container column selector
* rightCol- right container column selector
* itemCl- inner item selector 
*/
function equalHeightByColRows(leftCol, rightCol, itemCl)
{
	var leftColRowCnt=$(leftCol).find($(itemCl)).length;
	var rightColRowCnt=$(rightCol).find($(itemCl)).length;
	var rowCnt=Math.max(leftColRowCnt,rightColRowCnt);
	for (i=0; i<rowCnt; i++)
	{
		var el1=$(leftCol).find($(itemCl)).eq(i);
		var el2=$(rightCol).find($(itemCl)).eq(i);
		var maxHeight=Math.max(el1.height(),el2.height());
		el1.height(maxHeight);
		el2.height(maxHeight);
	}
	
}
function applyEqualHeightByColRows(leftCol, rightCol, itemCl)
{
	$(itemCl).css('height','auto');
	equalHeightByColRows(leftCol, rightCol, itemCl);
}
/*__________Equal Heights by Different Col Appropriate Rows Ends________*/


/*__________ Gets Image Actual Height Based on Container Starts ________*/
/* Gets the height that image will take based on it's container
 * colCl- selector of image container */
var getImgActualHeight =function(colCl)
{
	var theImage = new Image();
	theImage.src = $(colCl).find('img').attr("src");
	var imageWidth = theImage.width;
	var imageHeight = theImage.height;
	var imgColWidth=$(colCl).width();
	var actHeight=0;
	var actDif=imgColWidth/imageWidth;
	imgActHeight=imageHeight *actDif;
	return imgActHeight;
}
/*__________ Gets Image Actual Height Based on Container Ends ________*/
