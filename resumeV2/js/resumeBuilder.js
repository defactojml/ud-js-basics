

/**
 * Created by jean-michel-legrand on 27/06/15.
 */

console.log("***** Lesson 1 - Data Type - Quiz 9");

var bio = {
  name : "Jean-Michel Legrand",
  role: "Front Engineer",
  welcomeMessage: "blablablablablbalbalbabab blablablablablbalbalbabab blablablablablbalbalbabab",
  //img: "images/github-avatar.jpeg",
  img: "http://placehold.it/200x200",
  contacts : {
    mobile: "06 82 26 26 65",
    email: "jml.legrand@gmail.com",
    twitter: "jmllegrand",
    github: "jmllegrand",
    location: "Paris"
  },
  skills :  ["awesomeness", "programming", "teaching", "JS"]
};


var work = {
  jobs: [
    {
      employer: "defact-o",
      title: "boss",
      location: "Paris",
      dates: "2014-present",
      description: "One man business company - Consulting work on large scale agile projects"
    },
    {
      employer: "valtech",
      title: "senior consultant",
      location: "Paris",
      dates: "2006-2014",
      description: "Consulting related to agile stuff "
    },
    {
      employer: "softeam",
      title: "consultant",
      location: "Paris",
      dates: "2002-2005",
      description: "Consulting a for large project in the banking industry"
    }
  ]
};



var projects = [

  {
    title : "acetp",
    description: "reengineering",
    images: [],
    dates: "2002-2005"
  },
  {
    title : "new sesame",
    description: "Reengineering of the sales tools for bank advisor - Target 2 major retail banking actors in France",
    images: [],
    dates: "2014-present"
  },
  {
    title : "new sesame",
    description: "Reengineering of the sales tools for bank advisor - Target 2 major retail banking actors in France",
    images: [],
    dates: "2014-present"
  }
];

var education = {
  "schools": [
    {
      "name": "Carnegie Mellon University",
      "dates": "1998 - 2001",
      "location": "Pittsburgh",
      "degree": "Master degree",
      "major": ["Computer Science"],
      "url":"http://www.cmu.edu/"
    },
    {
      "name": "Esigelec",
      "dates": "1993 - 1998",
      "degree": "BA",
      "location": "Rouen",
      "major": ["Eletrical Engineering"],
      "url":"http://www.esigelec.fr/"

    }
  ],
  "onlineCourses": [
    {
      "school": "Udacity",
      "dates": "2015",
      "title": "Front Nanodegree",
      "url":"https://www.udacity.com"

    }
  ]
};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedImage = HTMLbioPic.replace("%data%", bio.img);
var formattedMsg= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);



var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);

$("#main").prepend(internationalizeButton);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedImage);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#topContacts").append(formattedMsg);


$("#education").prepend(HTMLschoolStart);
$("#education").append(formattedSchoolName);

if (bio.skills.length) {
  $("#header").append(HTMLskillsStart);
  var skill;
  for (i = 0; i < bio.skills.length; i++ ){
    skill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(skill);
  }
}



displayWork();

displayProject();



function displayWork() {
  for (item in work.jobs) {
    var formattedWorkEmployerTitle =
      HTMLworkEmployer.replace("%data%", work.jobs[item].employer) +
      HTMLworkTitle.replace("%data%", work.jobs[item].title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedWorkEmployerTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedDescription);

  }
}

function displayProject() {
  for (project in projects) {
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[project].description);

    var formattedProjectImages = [];
    for (image in projects[project].images) {
      formattedProjectImages.push(HTMLprojectImage.replace("%data%", projects[project].images[image]))
    }
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[project].dates);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDescription);
    for (image in formattedProjectImages) {
      $(".project-entry:last").append(formattedProjectImages[image]);
    }
    $(".project-entry:last").append(formattedProjectDates);

  }
}


function inName(firstLastName) {
  var finalName = firstLastName;
  var names = finalName.split(" ");
  names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names.join(" ");
}

console.log("My internationalize name : " + inName("Jean-Michel Legrand"));

$("#mapDiv").append(googleMap);
