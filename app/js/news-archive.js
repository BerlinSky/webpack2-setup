/**
 * this create news archive tree effect
 */
import $ from 'jquery';

export	function newsArchive(){

		if($(".news-archive-year").length>0){
			$(".news-archive-year").on("click", function(){
				$(this).find(".news-archive-month").toggle("slow");
			});
		}
		
		
		
}