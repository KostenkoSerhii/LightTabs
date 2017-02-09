
/*LightTabs*/
(function($){	
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			var tabs = this;
			var i = 0;
			var showPage = function(tabs, i){
				$(tabs).find(".tabs-content-js").css({"overflow" : "hidden" , "height" : "0"});
				$(tabs).find(".tabs-content-js").eq(i).css("height", "auto");
				$(tabs).children(".tabs-nav-item-js ").removeClass("is-active");
				$(tabs).children(".tabs-nav-item-js ").eq(i).addClass("is-active");
			}
			
			showPage(tabs, 0);
			
			$(tabs).find(".tabs-nav-item-js").each(function(index, element){
				$(element).attr("data-page", i);
				i++;
			});
			
			$(tabs).find(".tabs-nav-item-js").click(function(){
				showPage($(this).parent().parent(), parseInt($(this).attr("data-page")));
			});				
		};		
		
		return this.each(createTabs);
	};
})(jQuery);
/*LightTabs*/