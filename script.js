var artistToHTML = function(artist){
	var lastName = artist["Last Name"];
	var firstName = artist["First Name"];
	var lastNameHTML = "<h2>"+lastName+",</h2>";
	var firstNameHTML = "<h2>"+firstName+"</h2>";
	var html = lastNameHTML + firstNameHTML;
	return html;
}

var elements = data.map(artistToHTML);

artistsElement = document.getElementById('artists')

artists.innerHTML = elements;