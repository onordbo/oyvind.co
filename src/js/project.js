//Set domain variable because, convenient.
var domain = "http://beta.oyvind.co/"

//List projects
var projectList = [
	"dated",
	"lava",
	"geolarm",
	"workflow",
	"shapr",
	"spotify"
];

//Index and randomize projectList
var randomProject = function () {
	//Count objects in projectList array
	var indexProject = Math.floor(Math.random()*projectList.length)
	//Retrieve an object based on random index
	var url = domain + projectList[indexProject];
	//Return chosen object
	return url.toString();
}

//Get the currently active url
var checkCurrentURL = function () {
	//Store currently active link
	var getProject = document.URL;
	//Strip "http://oyvind.co/" from link
	var currentProject = getProject - "http://beta.oyvind.co/"
	//Exclude current URL from projectIndex
	if (currentProject == getProject) {
		randomProject;
	}
}

//Reload page with chosen object
var loadRandomProject = function () {
	window.location.href = randomProject();
}