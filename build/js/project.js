//Set domain variable because, convenient.
var domain = "http://beta.oyvind.co/"

//List projects
var projectList = [
	"dated",
	"lava",
	"geolarm",
	"shapr",
	"spotify"
];

//Index function
var randomProject = function () {
	//Count objects in projectList array
	var indexProject = Math.floor(Math.random()*projectList.length)
	//Retrieve an object based on random index
	var url = domain+projectList[indexProject];
	//Return chosen object
	return url.toString();
}

var loadRandomProject = function () {
	//Get active URL
	var activeURL = document.URL;
	//Find the last "/"
	var domainLength = domain.length;
	//Slice up the link
	var activeProject = activeURL.splice(domainLength, activeURL.length - domainLength);
	//Store the last part of the link
	/* Code Code Code */
	//Compare link to chosen random object
	if (/* Active object == Chosen object*/) {
		//Get new URL
	} else {
		//Reload page with chosen object
		window.location.href = randomProject();
	}
}

/*
//Reload page with chosen object
var loadRandomProject = function () {
	window.location.href = randomProject();
}
*/

//url.splice(domain, activeURL.length - domain)
