//Set domain variable because, convenient.
var domain = "http://oyvind.co/"

//List projects
var projectList = [
	domain + "project",
	domain + "project",
	domain + "project",
	domain + "project",
	domain + "project",
	domain + "project",
	domain + "project"
]

//Index function
var randomProject = function () {
	//Count objects in projectList array
	var indexProjects = Math.floor(Math.random()*projectList.length)
	//Retrieve an object based on random index
	/* Code code code */
	//Return chosen object
	/* Code code code */
}

//Reload page with chosen object
var loadRandomProject = function () {
	location.reload(chosenProject);
}