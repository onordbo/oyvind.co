//Set domain variable because, lazy and convenient.
var domain = "http://oyvind.co/"

//List projects
var projectList = [
	domain + "project",
	domain + "project",
	domain + "project",
	domain + "project",
	domain + "project",
	domain + "project",
	domain + "project",
]

//Index function
var randomProject = function () {
	//Count objects in projectList array
	var indexProjects = Math.floor(Math.random()*projectList.length)
	//Pick random object from counted array
	/* Code code code */
	//Return chosen object
	/* Code code code */
}

//Reload page with chosen object
var loadRandomProject = function () {
	location.reload(chosenProject);
}