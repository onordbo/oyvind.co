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

//Index and randomize projectList
var randomProject = function () {
	//Count objects in projectList array
	var indexProject = Math.floor(Math.random()*projectList.length)
	//Retrieve an object based on random index
	var url = domain + projectList[indexProject];
	//Return chosen object
	return url.toString();
}

//Reload page with chosen object
var loadRandomProject = function () {
	//Get the currently active url
	var checkCurrentURL = function () {
		//Get active URL
		var projectLink = document.URL;
		//Splice active URL
		var project = url.splice(projectLink, url.length - "http://beta.oyvind.co/");		
		//Exclude current URL from projectIndex
		if (project == activeProject) {
			randomProject();
		} else {
			//Serve object
			window.location.href = randomProject();
		}
	}
}