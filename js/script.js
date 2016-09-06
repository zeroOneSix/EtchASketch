$(document).ready(function(){

		/*Generate starting grid*/
	var startingSquares = 16;
	var divSquares = 256;
	generateSquares(startingSquares, divSquares );
	
	/* Helper method to generate the grid of square divs */
	
	function generateSquares(squares, totalDivs){
		 
		for(i = 0; i< totalDivs; i++){
		
		$('.grid').append("<div class = 'square orgColor'></div>");
		
		}
		var squareSize = 100 / squares;
		
		squareSizeString = squareSize.toString() + "%"; 
		
		$('.square').css({height: squareSizeString, width: squareSizeString});
	}


	/*Generate New Gridge Size when button newGrid is clicked */
	
	$('#newGrid').click(function s(){
		var squares = prompt("How many sqaures would you like (number entered will be coloumn and row total. E.g. 4 x 4)");
		totalDivs = squares * squares;

		if(squares % 4 == 0){
			$('.grid').empty();
			generateSquares(squares, totalDivs);
		}else{
			if(confirm("Not a valid Number! Try Again?")){		
				s();
			}
		}
		
	});
	
  /* Reset the Grid to white */
  
	$('#clearButton').click(function(){
		
		$('.orgColor').css({backgroundColor: "rgb(255,255,255)"});
		$('div').removeClass("changedColor");
	
	});
	
/* Creates new default grid (in essence refreshing the page) */
	
	$('#defaultGrid').click(function(){
		$('.grid').empty();
		generateSquares(16, 256);
	});

	
	/* First Solution
	Change color of square after mouse moves over it
	
	$(document).on('mouseenter', '.square', function () {
		
			 $(this).removeClass("orgColor");
			 $(this).addClass("changedColor");
		}).on('mouseleave', '.one span', function () {
			 $(this).removeClass("orgColor");
			 $(this).addClass("changedColor");
		});
	*/
	
	/*Gradual Colours
	Add 10% black to square for each mouse over */
	$(document).on('mouseenter', '.square', function(){
		
		var currentColor = $(this).css("background-color");
		console.log(currentColor);
		
		
		var parts = currentColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

		delete(parts[0]);
		console.log(parts);

		var rgbRed = parts[1];
		var rgbGreen = parts[2]; 
		var rgbBlue = parts[3];
		
		
		if(rgbRed !== 0 && rgbGreen !==0 && rgbBlue !== 0){
		
			rgbRed = Math.floor(rgbRed - ( rgbRed * .40));
			rgbGreen = Math.floor(rgbGreen - (rgbGreen * .40));
			rgbBlue = Math.floor(rgbBlue - (rgbBlue * .40));
			 
		}
		
		
		console.log("I got here!");
		var newRGB = "rgb(" + rgbRed + ", " + rgbGreen + ", " + rgbBlue + ")";
		$(this).css({backgroundColor: newRGB});
		console.log(newRGB);
		console.log($(this).css("background-color"));
	
	});
	
	
	function setColor(p){
		var red = p<50 ? 255 : Math.round(256 - (p-50)*5.12);
		var green = p>50 ? 255 : Math.round((p)*5.12);
    
	return "rgb(" + red + "," + green + ",0)";
	}
});
