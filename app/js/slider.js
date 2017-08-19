import $ from 'jquery';
/*
 * Slider plugin for scrolling left or right
 * 
 *  data-slider-height defines the height of slider
 * HTML structure
 * <div class="js-sliderContainer">
        <div class="imageGridContainer js-sliderContent"  data-slider-height="160">
            <div class="slider-grid"><img alt="img" src="img/path/file1.jpg>"></div> 
            <div class="slider-grid"><img alt="img" src="img/path/file2.jpg>"></div> 
            <div class="slider-grid"><img alt="img" src="img/path/file3.jpg>"></div> 
        </div>
    </div>
 */
export function slider() {
	//  selectionr
	const sliderSelector = $('.js-sliderContent');
	const sliderGridItemSelector = $('.slider-grid');
	const sliderGridNavLeft = "<div class='slider-grid-nav left'><i class='fa fa-arrow-circle-left fa-2x' aria-hidden='true'></i> </div>";
	const sliderGridNavRight = "<div class='slider-grid-nav right'> <i class='fa fa-arrow-circle-right fa-2x' aria-hidden='true'></i> </div>";
	const SCROLL_SIZE = 50;
	const MAX_RETRY= 5;
	
	
	
	if($(sliderSelector).length>0){
		
		// let reloadAttempt = [];
		const sliderCollection = $(sliderSelector);
	
		// there can be multiple slider in a page
		// go through each slider and draw it
		for(var i=0;i< sliderCollection.length;i++){
			const sliderContainer = $(sliderCollection[i]).closest(".js-sliderContainer");
			
			const sliderGridCollection = $(sliderCollection[i]).find(sliderGridItemSelector);
			//read height of slider defined in data-slider-height attribute
			const sliderHt = $(sliderCollection[i]).attr("data-slider-height") ;
			const sliderHeight = sliderHt + "px";
			//read attempt made for drawing slider
			let reloadAttempt = $(sliderCollection[i]).attr("data-slider-retry");
			if(reloadAttempt == undefined){
				reloadAttempt= 0;
			}
			//set height of slider and its items
			$(sliderCollection[i]).css({height: sliderHeight});
			$(sliderGridCollection).css({height: sliderHeight})
			
			let sliderWidth = 0;// initate slider width which will be widht of slider content later
			
			//gothrough each slider item to calculate width of slider itself
			for( var j =0; j < sliderGridCollection.length;j++){
				const gridWidth = $(sliderGridCollection[j]).width();
				
				//if width is zero , retry whole thing max to be 5 attempt
				if(gridWidth==0 && reloadAttempt < MAX_RETRY){
					reloadAttempt++;
					$(sliderCollection[i]).attr("data-slider-retry", reloadAttempt);
					setTimeout(function(){slider();}, 1000);
					return false;
				}
				sliderWidth += (5 + gridWidth)
			}
			const sliderWidth2 = sliderWidth + "px";
			
			
			
			//Set the width of slider content
			$(sliderCollection[i]).css({height:sliderHeight, width:sliderWidth2});
			
			//set navigation element for sliding
			let sliderContainerWidth = $(sliderContainer).width()
			//handle mobile window
			if(sliderContainerWidth > $(window).width()){
				sliderContainerWidth= $(window).width();
				$(sliderContainer).css("width", (sliderContainerWidth-5)+"px");
			}
			
			if( sliderContainerWidth< sliderWidth){
				$(sliderContainer).prepend(sliderGridNavRight);
				$(sliderContainer).prepend(sliderGridNavLeft);
				const navItems= $(sliderContainer).find(".slider-grid-nav");
				for(var i=0;i< navItems.length;i++){
					$(navItems[i]).find("i").css("margin-top",((sliderHt/2)-15) +"px");
				}
				
			};
			
			//scroll toward left
			$(sliderContainer).find(".slider-grid-nav.left").on("click",function(){
				const scrollLeft = $(this).closest(".js-sliderContainer").scrollLeft();
				let scrollLeftPos = 0;
				if(scrollLeft> SCROLL_SIZE){
					scrollLeftPos= scrollLeft- SCROLL_SIZE;
				}
				$(this).closest(".js-sliderContainer").scrollLeft(scrollLeftPos);
				
				repositionNav(this,scrollLeftPos);
			});
			

			//scroll toward right
			$(sliderContainer).find(".slider-grid-nav.right").on("click",function(){
				const scrollLeft= $(this).closest(".js-sliderContainer").scrollLeft();
				const scrollLeftPos = scrollLeft + SCROLL_SIZE;
				$(this).closest(".js-sliderContainer").scrollLeft(scrollLeftPos);
				
				let newScrollLeftPos=$(this).closest(".js-sliderContainer").scrollLeft();
				if(newScrollLeftPos >scrollLeftPos){
					newScrollLeftPos = scrollLeftPos;
				}
				repositionNav(this,newScrollLeftPos);
			});
		}
	}
	
	// reposition nav element after sliding
	function repositionNav(obj,scrollLeftPos){
		const navRightPos = "-" + scrollLeftPos + "px";
		const navLeftPos =  scrollLeftPos + "px";
		$(obj).closest(".js-sliderContainer").find(".slider-grid-nav.right").css({right: navRightPos});
		$(obj).closest(".js-sliderContainer").find(".slider-grid-nav.left").css({left: navLeftPos});
	}
	
}
	