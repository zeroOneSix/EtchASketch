$(document).ready(function(){

	$('#clearButton').click(function(){
		
		$('div').removeClass("changedColor");
		$('div').addClass("orgColor");
	
	});

	$('div').hover(function(){
	
		var currentClass = $(this).attr("class");
		
		if(currentClass.indexOf("org") !== -1){
			console.log("A");
			 $(this).removeClass("orgColor");
			 $(this).addClass("changedColor");
		
		}else{
		
			$(this).removeClass("changedColor");
			$(this).addClass("orgColor");
		
		}
	}, function(){});
	
});
