import $ from 'jquery';

export	function initInfiniteScroll(){

		let viewPortHeight,documentHeight;
		// let newsStoryNumber =1;
		const scrollSelector = ".l-pageContainer";
		if($("#infinite-next-link").length>0){
			const nextSelector = $("#infinite-next-link");
			let triggerPoint = calculateTriggerPoint($("#infinite-next-link:last"));
			
			$(window).resize(function() {
				triggerPoint = calculateTriggerPoint($(nextSelector));
			});
			$(scrollSelector).bind("scroll",function(){
				// console.log("Scrolled");
				infiniteScroll(triggerPoint,nextSelector);
			});
		}
		
		function infiniteScroll(trigg,nextSelector){
			// var scrollTop= $(scrollSelector).scrollTop(); //this isnt working in chrome so using scrolltop2 
			const scrollTop2 = documentHeight- ($(".l-pageFooter").offset().top + $(".l-pageFooter").height());
			
			if(documentHeight-(scrollTop2+viewPortHeight)<=trigg){
				
				$(scrollSelector).unbind('scroll');
				const href = $(nextSelector).attr("href");
				let route=$(nextSelector).attr("data-page-route");
				if(route.substr(-1,1) !== "/");{
					route += "/";
				}

				const pg = parseInt(href.replace(route,""));
				$.get(href, function( data ) {
					$(".newsList").append(data );
					const totalPages = 0 + $(nextSelector).attr("data-page-count");
					if(pg<totalPages){
						$(nextSelector).attr("href",href.replace(pg,pg+1));
						$(scrollSelector).bind("scroll",function(){
							infiniteScroll(trigg,nextSelector);
						});
					}
				});
			}
		}
		
		function calculateTriggerPoint(selector){
			viewPortHeight = $(window).height();
			
			var body = document.body;
			var calcHeight = 0;
			
			$("body>div.pageContainer>div").each(function(){
				calcHeight +=$(this).outerHeight();
			});
			
			var html = document.documentElement;
			documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
			html.clientHeight, html.scrollHeight, html.offsetHeight,calcHeight );

			var triggerPoint = documentHeight- selector.offset().top;
			return triggerPoint;
		}
	}