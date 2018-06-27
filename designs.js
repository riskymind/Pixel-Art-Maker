let height;
let width;
let color;

function makeGrid() {
	$("#pixelCanvas").html("");
	height = $("#inputHeight").val();
	width = $("#inputWeight").val();

	if (height > 99 || width > 99 || height < 1 || width < 1) {
		if (!error.classList.contains("error")) {
			error.classList.toggle("error");
			error.innerText = "The dimension has to be smaller than 99 and bigger than 0";
			//$(error).css('color', 'red');
			$(error).css({ 'color': 'red', 'font-size': '150%' });
		}
	} else {
		error.innerText = "";
		$('div').removeClass("error");
		for(let x = 0; x < height; x++){
			$("#pixelCanvas").append('<tr></tr>');
		}
		for (let y = 0; y < width; y++ ){
			$("#pixelCanvas tr").each(function(){
				$(this).append('<td></td>')
			});
		}
	}
}

color = $("#colorPicker");
$(document).on("mousedown", "tr td", function(){
	let colorValue = color.val();
	$(this).css('background-color', colorValue);
	$('tr td').bind("mouseover", function(){
		let colorValue = color.val();
		$(this).css('background-color', colorValue);
	}).mouseup(function(){
		$('td').unbind('mouseover');
	});
	$('tr td').on('dblclick', function(){
		$(this).css('background-color', '#FFFFFF')
	});
});



