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

//Reload page with chosen object
var loadRandomProject = function () {
	window.location.href = randomProject();
}

/*
	//If you want on siteload; call loadRandomProject()
	window.onload = function(){
		loadRandomProject();
	};
*/