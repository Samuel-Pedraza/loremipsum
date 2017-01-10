var loremipsum = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Maecenas varius orci a arcu aliquet, quis maximus velit tincidunt. \n Duis sit amet mi in velit suscipit volutpat nec eget orci. Sed vitae lobortis diam. \n Cras tellus urna, pretium et sagittis euismod, facilisis pulvinar nibh. \n Sed imperdiet tortor rutrum leo pulvinar, ornare vehicula sem lobortis. \n Maecenas dictum, nulla ut fermentum commodo, risus risus rhoncus eros, vitae interdum est turpis ut erat. \n Suspendisse fermentum mollis tellus sed placerat. Nam eleifend, lorem in elementum maximus, turpis mauris gravida libero, nec sagittis libero lectus eu massa. \n Quisque urna arcu, eleifend nec tellus at, rhoncus luctus sem.</p> ";

document.getElementById("submit").addEventListener("click", function(event){
	event.preventDefault();
	
	var e = document.getElementById("option-value");
	
	var value = e.options[e.selectedIndex].value;
	var text = e.options[e.selectedIndex].text;

	if(value == 1){
		document.getElementById("lorem").innerHTML = loremipsum;
	} else if(value == 2){
		document.getElementById("lorem").innerHTML = loremipsum.concat(loremipsum);
	} else if(value == 3){
		document.getElementById("lorem").innerHTML = loremipsum.concat(loremipsum, loremipsum);
	} else if(value == 4){
		document.getElementById("lorem").innerHTML = loremipsum.concat(loremipsum, loremipsum, loremipsum);
	} else if(value == 5){
		document.getElementById("lorem").innerHTML = loremipsum.concat(loremipsum, loremipsum, loremipsum, loremipsum);
	}
});


