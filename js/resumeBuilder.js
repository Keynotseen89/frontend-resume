/*
	Project : resumeBuilder 
	Date: 06/26/2017
	Author: Quinatzin Sintora
	Description: This JavaScript code is made from scratch, using Udacity helperJ.file and jquery.js and index.html
	. This is a resuem with past work skills and jobs show my skills in programming and
	understanding of JavaScript
 */
 
 var name = "Quinatzin Sintora";
 var formattedName = HTMLheaderName.replace("%data%", name);
 
 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 
 $("#header").append(formattedName);
 $("#header").append(formattedRole);

  var bio = 
{
	"name" : "Quinatzin Sintora",
	"role" : "Web Developer",
	"contacts" :
	{
		"mobile":"xxx-xxx-xxxx",
		"email": "Q@hotmail.com",
		"gitHub": "keynotseen89@example.com",
		"twitter": "@keynotseen",
		"linkedin": "https://www.linkedin.com/in/quinatzin-sintora-8bb628123/",
		"location": "Pomona CA, US"	
	},
	"welcomeMessage": "Welcome to my page build with JavaScipt and help from Udacity",
	"skills": [
	"Java", "C++", "Android Developer", "Basic JavaScript", "postgreSQL", "MS Office suite", "Eclipse", "Android Studio", "Visual Studio"
	],
	"bioPic": "images/QPic.jpg"
}
 
  var work = 
 {
	"jobs": [{
		"employer": "Natures Best",
		"title": "Inventory Control",
		"location": "Chino CA, US",
		"date": "March 2014 - Present",
		"description": "Cycle counting inventory in order to verify product accuracy while" 
		+ "operating warehouse machinery."
		+ "Problem solving warehouse inventory.  Working with returns to validate product."
		+ "Deal with inventory adjustments, RF moves, Offsets, and lost products"
		+ "Helping customers through e-mail. Running daily research, variance, and damage report with KeHe NTS systems."
	},
	{
	 "employer" :"Natures Best",
	 "title" : "Receiver",
	 "location": "Chino CA, US",
	 "date" : "November 2012 - March 2014",
	 "description": "As a receiver my dutites consisted of receiving incoming product and operating"
	 + "company machinery which consists of forklift, Reach-trucks, Cherry-Pickers."
	 + "  Providing Clerkical assistance such as running P.O's paper work and problem solving."
	 + "  Using RF guns, and making sure all returns are processed and replenished back into inventory."
	},
	{
	 "employer" : "Natures Best",
	 "title": "Active Selecter/Case Picker",
	 "location": "Chino CA, US",
	 "date" : "December 2011 - November 2012",
	 "description": "As an active selecter/case picker my job involed operating company Atlet, double length pallet jack."
	 + "Order picking eaches, cases, using voice operated mobile device while meeting production quota of 100% and up."
	},
	{
		"employer": "FedEx Ground",
		"title": "Package Handler",
		"location": "City of Industry CA, US",
		"date": "November 2008 - December 2011",
		"description": "Loading up company trailers."
	}]
}//end of works
 var projects = 
{
	"projects": [{
		"title": "SAOWikiFolder",
		"dates": "08-05-2016",
		"description": "This project display the Character of Sword Art Online and gives some information"
		+" about the first season Characters.  Followed by the Character on a second screen not on the same as the information." ,
		"images": [
			"images/SAOmenu.PNG", "images/SAOChar.PNG", "images/SAOChar2.PNG"
		]

	}]
}


var education = {
	"schools": [{
			"name": "Mt.Sac College",
			"city": "Walnut, CA, US",
			"degree": "Assoicate of Science",
			"major": "Computer Programming",
			"dates": 2016,
			"url": "http://mtsac.edu/"
		},
		{
			"name": "Garey High School",
			"city": "Pomona",
			"degree": "Diploma",
			"major": "GED",
			"dates": 2008,
			"url": "http://www.edlinesites.net/pages/Garey"
		}
	],

	"onlineCourses": [{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"dates": 2017,
			"url": "http://www.udacity.com/courses/ud804"
		},
		{
			"title": "Android Basics:Networking",
			"school": "Udacity",
			"dates": 2017,
			"url": "http://www.udacity.com/courses/ud843"
		},
		{
			"title": "Linux Command Line Basics",
			"school": "Udacity",
			"dates": 2016,
			"url": "http://www.udacity.com/courses/ud595"
		},
		{
			"title": "Android Development for Beginners",
			"school": "Udacity",
			"dates": 2016,
			"url": "http://www.udacity.com/courses/ud837"
		},
		{
			"title": "Android Basics: Multiscreen Apps",
			"school": "Udacity",
			"dates": 2016,
			"url": "http://www.udacity.com/courses/ud839"
		},
		{
			"title": "Intro to Relational DataBases",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/courses/ud197"
		}

	]

}


var charEscape = function(_html){
	var newHTML = _html;
	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g,"&gt;");
	
	return newHTML;
};

//This displaysContact information in header
function displayContact(){
	//Displays mobile Information
	var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"].mobile);
	$("#header").append(formattedMobile);
	//Displays Email Information
	var formattedEmail = HTMLemail.replace("%data%", bio["contacts"].email);
	$("#header").append(formattedEmail);
	//Displays Github URL
	var formattedGithub = HTMLgithub.replace("%data%", bio["contacts"].gitHub);
	$("#header").append(formattedGithub);
	//Displays Linkedin URL
	var formattedLinkedin = HTMLblog.replace("%data%", bio["contacts"].linkedin);
	$("#header").append(formattedLinkedin);
	
	//Display Bio Photo
	var formatImage = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formatImage);
}//end of displayContact

displayContact();

//function that displays skills 
function displayBio(){
 if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++)
	{
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}//end of for loop	
}//end of if statement
}//end of displayBio


displayBio();

//This function displays wor, 
function displayWork(){
	$("#workExperience").append(HTMLworkStart);
		
	//For loop to run through work object
	for(var i = 0; i < work.jobs.length; i++){ 
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	//Displays Company and Job title 
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	//Displays Hired and final day
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].date);
	$(".work-entry:last").append(formattedDates);
	//Displays location of job
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	$(".work-entry:last").append(formattedLocation);
	//Displays job description
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
	$(".work-entry:last").append(formattedDescription);
	
	}//end of for loop
}//end of displayWork

displayWork();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x, y);
})

/*
function inName(oldName){
	var finalName = oldName;
	var names = oldName.split(" ");
	names[0] = names[0].toLowerCase();
	names[1] = names[1].toUpperCase();
	finalName = names.join(" ");
	
	return finalName;
}//end of inName

$("#main").append(internationalizeButton);
inName(name);
*/

projects.display = function(){
	$("#projects").append(HTMLprojectStart);
	for(var proj = 0; proj < projects.projects.length; proj++)
	{
		//This append HTMLprojectStart to projects
		//$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);
		
		//dates, description, images
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].description);
		$(".project-entry:last").append(formattedDescription);
		
		if(projects.projects[proj].images.length > 0){
			//for(image in projects.projects[proj].images)
				
			//for(var image = 0; image <= projects.projects.length ; ++image) 
			for(image in projects.projects[proj].images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[proj].images[image]);
				$(".project-entry:last").append(formattedImage);
			}//for-in loop
		}//end of if statement
	}//end of for loop
}

projects.display();

function displayEducation()
{
	$("#education").append(HTMLschoolStart);
	for(var edu = 0; edu < education.schools.length; edu++)
	{
		var formattedEdName = HTMLschoolName.replace("%data%",education.schools[edu].name);
		$(".education-entry:last").append(formattedEdName);
		
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree); 
		$(".education-entry:last").append(formattedschoolDegree);
		
		
		var formattedschoolDate = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
		$(".education-entry:last").append(formattedschoolDate);	
		
		var formattedschoolLoc = HTMLschoolLocation.replace("%data%",education.schools[edu].city);
		$(".education-entry:last").append(formattedschoolLoc);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[edu].major);
		$(".education-entry:last").append(formattedMajor);
		//Displays Schools Name
		
	}
	
	//Displays Header Online Classes
	$(".education-entry:last").append(HTMLonlineClasses);	
	for(var onlineEd = 0; onlineEd < education.onlineCourses.length; onlineEd++){
	
	//Displays title of Course
	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineEd].title);
	$(".education-entry:last").append(formattedonlineTitle);
	
	//Displays OnlineSchool Name
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineEd].school);
	$(".education-entry:last").append(formattedonlineSchool);
	
	//Displays Date taken
	var formattedschoolDate = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineEd].dates);
	$(".education-entry:last").append(formattedschoolDate);
	
	//Displays URL for Coures
	var formattedschoolURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineEd].url);
	$(".education-entry:last").append(formattedschoolURL);
	
	}//end of for loop

}//end of displayEducation 

displayEducation();

//var formattedMajor = HTMLschoolMajor.replace("%data%", education["schoool"].major)
//$("#.education-entry:last").append(formattedMajor);
//var formattedschoolDate = HTMLschoolDates.replace("%data%",education["schools"].dates);
//$(".education-entry:last").append(formattedschoolDate);
//$("#mapDiv").append(googleMap);
