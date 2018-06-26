// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function(){

    var tableRow, tableCol;
	function makeGrid(x,y){
		
	    $('tr').remove();   
		for (var i = 1; i <=x; i++){
			$('table').append('<tr></tr>');
			for(var j = 1; j <= y; j++){
				$('tr:last').append('<td></td>');
				$('td').attr('class', 'cell');
			}
		}
		
		$('.cell').click(function(event){
			var cellColor = $('#colorPicker').val();
		    $(event.target).css('backgroundColor', cellColor);
		});
		
		
	}

	$('#sizePicker').submit(function(event){
		event.preventDefault();
		tableRow = $('#inputHeight').val();
	    tableCol = $('#inputWidth').val();
		makeGrid(tableRow, tableCol);
	});
});	


	    







