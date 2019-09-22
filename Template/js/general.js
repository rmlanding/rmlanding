jQuery(document).ready(function(){
var windowWidth = $(window).width();
	//alert(windowWidth);
	//if( windowWidth >= 767 ) {
jQuery(".tab:not(:first)").hide();

// price first tab show
// accou

//ACCORDION section
	


//to fix u know who
jQuery(".tab:first").show();

jQuery(".htabs li:first").addClass('active');
jQuery(".htabs a:first").addClass('active-clild');


jQuery(".htabs a").click(function(){
	jQuery(".htabs a").each(function(){
		jQuery(this).parent('li').removeClass('active');
		jQuery(this).removeClass('active-clild');
	});
	stringref = jQuery(this).attr("href").split('#')[1];
	
	jQuery(this).parent('li').addClass('active');
	jQuery(this).addClass('active-child');
	
	$('h5.accordionButton2').removeClass('on');
	
	var leftLiIndex =  $('.htabs a').index(this);
	$('#tab-'+leftLiIndex).addClass('on');
		
	jQuery('.tab:not(#'+stringref+')').hide();

	if (jQuery.browser.msie && jQuery.browser.version.substr(0,3) == "6.0") {
		jQuery('.tab#' + stringref).show();
	}
	else
		jQuery('.tab#' + stringref).fadeIn();	
		return false;
	});
//};


$(".video-in").fitVids();
        // Custom selector and No-Double-Wrapping Prevention Test

		

		
$("#accordion").accordion({ header: "h3", fillSpace: false });
if( windowWidth >= 767 ) {		
	//var tabH = $('.tab-cont').height();
//$('.acc-pan').css('height', tabH);
};

$('.ui-icon').before('<span class="activeTab"></span>');

// responsive  tab section

$('.accordionButton2').click(function() {
		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton2').removeClass('on');		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent2').slideUp('normal');
		
		//get show div id
		var  getShowDivId = $(this).attr('id').split('-')[1];
		//alert(getShowDivId);
		$('.htabs li').removeClass('active');
		$('.htabs li').eq(getShowDivId).addClass('active');
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
			
			
			//
			
			
		 } 
		  
	 });
	 
	 // price first tab opn
	 $('.ptable-outer h4#open').next('.accordionContent').show();
	 
	 
	 // footer social icon
	 
	 $(window).load(function(){
		
		// Fade in images so there isn't a color "pop" document load and then on window load
		$(".footer-thumb img").fadeIn(500);		
		// clone image
		$('.footer-thumb img').each(function(){
			var el = $(this);
			el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"1"}).insertBefore(el).queue(function(){
				var el = $(this);
				el.parent().css({"width":this.width,"height":this.height});
				el.dequeue();
			});
			this.src = grayscale(this.src);
		});
		
		// Fade image 
		$('.footer-thumb img').mouseover(function(){
			$(this).stop().animate({opacity:0}, 1000);
		})
		$('.img_grayscale').mouseout(function(){
			$(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
		});		
	});
	
	$('.accordionButton').append('<span>&nbsp;</span>');
	 $('.ui-accordion-header').append('<span class="accArrow">&nbsp;</span>');
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton').click(function() {
		
		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton').removeClass('on');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	

});

// Grayscale w canvas method
	function grayscale(src){
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var imgObj = new Image();
		imgObj.src = src;
		canvas.width = imgObj.width;
		canvas.height = imgObj.height; 
		ctx.drawImage(imgObj, 0, 0); 
		var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		for(var y = 0; y < imgPixels.height; y++){
			for(var x = 0; x < imgPixels.width; x++){
				var i = (y * 4) * imgPixels.width + x * 4;
				var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
				imgPixels.data[i] = avg; 
				imgPixels.data[i + 1] = avg; 
				imgPixels.data[i + 2] = avg;
			}
		}
		ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
		return canvas.toDataURL();
    }
	 	

$(window).load(function () {
	
	$('.backToTop').click(function(){
		$('html, body').animate({scrollTop: '0'}, 800);
	});

//$('html, body').animate({scrollTop: '0'}, 800);
	var headerHeight = $('.header').height();
	var firstHeight   = $('#firstHeight').height()+20;
	var secondHeight   = $('#secondHeight').height();
	var thirdHeight   = $('#thirdHeight').height();
	var fourthHeight   = $('#fourthHeight').height()+10;

	$('.nav1').click(function(){
		//alert('xx');
		var adVal =0;
		var height = headerHeight+firstHeight+adVal;			
		$('html, body').animate({scrollTop: height }, 800);
	});
	
	$('.nav2').click(function(){
		//alert('xx');
		var adVal =0;
		var height = headerHeight+firstHeight+secondHeight+adVal;			
		$('html, body').animate({scrollTop: height }, 800);
	});
	
	$('.nav3').click(function(){
		//alert('xx');
		var adVal =0;
		var height = headerHeight+firstHeight+secondHeight+thirdHeight+adVal;			
		$('html, body').animate({scrollTop: height }, 800);
	});
		
		
	// responsive navigation link
	
	$('.select-menu').change(function(){
		var locations = $(this).val();
		if( locations !== '#' ) {
			window.location.href = $(this).val();
		};
		});
		
		
// feature section column	
var featureLeftStatus = $('#featureLeft').css('display');
//alert(featureLeftStatus);
if(featureLeftStatus != 'none')	{
  setEqualHeight($("#featureLeft, #featureRight"));
}



		
		
});

// feature column section function

function setEqualHeight(columns){
	var tallestcolumn = 0;
	columns.each(function(){
		currentHeight = $(this).height();
		if(currentHeight > tallestcolumn){
			tallestcolumn = currentHeight;
			}
		});
	columns.height(tallestcolumn);
	}
	

// resize window function

function resizeFunction(){
	//culumn js section
	var featureLeftStatus = $('#featureLeft').css('display');
	
	if(featureLeftStatus == 'none')	{
 	 featureLeftStatus = $('#featureRight').css('height','auto');
	}
	
	
	
	
	$('.htabs li').each(function(){
		var activeClass = $(this).hasClass('active');
		if(activeClass== true)
			var activeHtabsVal = $(this).children('a').attr("href").split('#')[1];
			$('.tab#' + activeHtabsVal).show();
			
	});
	
	$('.tab-item').each(function(){
		var divStatus = $(this).css('display');
		//alert(divStatus);
		if(divStatus == 'block'){
			var h5Status = $(this).prev('h5').hasClass('on');
			if(h5Status == false)
			$(this).prev('h5').addClass('on');
		}
	});
	
	//price tabel section
	var windowWidth = $(window).width();
	
	if(windowWidth <=767)
		$('.accordionContent').hide();
	else
		$('.accordionContent').show();
	
	
	
	$('.ptable-in .ptable-outer').each(function(){
		var h4IdStatus = $(this).children('h4').attr('id');
		//alert(h4IdStatus);
		if(h4IdStatus == 'open'){
			$(this).children('h4').addClass('on');
			$(this).children('h4').next('div.accordionContent').css('display','block');
		}
	});
	
	
	//control Center and service and support
	
	$("#accordion").accordion("resize");

	
	//left out platform take out
	
	
}

$(window).resize(resizeFunction);