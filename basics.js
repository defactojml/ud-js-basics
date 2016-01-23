/**
 * Created by jean-michel-legrand on 27/06/15.
 */

// Lesson 1 - Data Type
var firstName = "jean-michel";
console.log(firstName);

console.log("***** Lesson 1 - Data Type - Quiz 1");
var awesomeThoughts;
awesomeThoughts = "I am Jean-Michel and I am AWASOME";
console.log(awesomeThoughts);

// experiment with replace()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
var email = "jean-michel.legrand@valtech.fr";
var newEmail = email.replace("valtech", "ca-pacifica");
console.log("old email: " + email);
console.log("new email: " + newEmail);

console.log("***** Lesson 1 - Data Type - Quiz 2");
console.log(awesomeThoughts.replace("AWASOME", "FUN"));


console.log("***** Lesson 1 - Data Type - Quiz 4");
// Manipulate s to make it equal to "Udacity"
var s = "audacity";

var udacityizer = function (s) {
  return s[1].toUpperCase() + s.slice(2)
};

console.log(udacityizer(s));


console.log("***** Lesson 1 - Data Type - Quiz 5");
function logTruthyness(val) {
  return val ? console.log(val + " is " + "truthy") : console.log(val + " is " + "falsy");
}

logTruthyness(1);
logTruthyness("Awesome");
logTruthyness(undefined);
logTruthyness(-42); // true: non zero numbers are truthy
logTruthyness({"state": false}); // true: objects are truthy
logTruthyness([false]); // true: arrays are truthy

console.log("***** Lesson 1 - Data Type - Quiz 6");
var skills = ["awasome", "fun"];
console.log(skills.length);


console.log("***** Lesson 1 - Data Type - Quiz 7");
// increase the value of the last element by 1
var sampleArray = [0, 0, 7];

var incrementLastArrayElement = function (_array) {
  var newArray = _array;
  // remove the last element & retrieve it to increase its value by 1
  var lastElement = newArray.pop() + 1;
  // add the new element
  newArray.push(lastElement);
  return newArray;
};

console.log("initial array: " + sampleArray);
console.log("after transformation: " + incrementLastArrayElement(sampleArray));


console.log("***** Lesson 1 - Data Type - Quiz 8");
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
  var finalName = oldName;
  // Your code goes here!
  var firstname, lastName;
  firstname = oldName.slice(0, oldName.indexOf(' ')).toLowerCase();
  firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);

  lastName = oldName.slice(oldName.indexOf(' ')).toUpperCase();
  finalName = firstname + lastName;
  return finalName;
}

function nameChangerV2(oldName) {
  var finalName = oldName;
  var names = finalName.split(" ");
  names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names.join(" ");
}

console.log("initial string: " + name);
console.log("after transformation: " + nameChanger(name));
console.log("after transformation: " + nameChangerV2(name));


console.log("***** Lesson 1 - Problem Set ");
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function (_html) {
  var newHTML = _html;
  newHTML = newHTML.replace(/(<|>)+/, "");
  return newHTML;
};

// Did your code work? The line below will tell you!
console.log("initial string: " + html);
console.log("after transformation: " + charEscape(html));


var weirdObject = {
  "property": "Time for an astronomy lesson!",
  "property1": "Cameron's minor in college was astronomy",
  "property-2": "The 4 Galilean largest moons of Jupiter are:",
  "property 3": "Io, Ganymede, Callisto, Europa",
  "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
  " property": "The Sun contains 99.87% of the mass of the entire solar system",
  "property()": "There are 5 dwarf planets in our solar system:",
  "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
  "8property": "Mars has two tiny moons: Phobos and Deimos"
};
console.log("**** Using the Dot notation");
console.log(weirdObject.property);
console.log(weirdObject.property1);
console.log(weirdObject.property-2);
//console.log(weirdObject.property 3);
console.log(weirdObject.property$);
//console.log(weirdObject. property);
//console.log(weirdObject.property());
//console.log(weirdObject.property[]);
//console.log(weirdObject.8property);

console.log("**** Using the Bracket notation");
console.log(weirdObject["property"]);
console.log(weirdObject["property1"]);
console.log(weirdObject["property-2"]);
console.log(weirdObject["property 3"]);
console.log(weirdObject["property$"]);
console.log(weirdObject[" property"]);
console.log(weirdObject["property()"]);
console.log(weirdObject["property[]"]);
console.log(weirdObject["8property"]);



console.log("***** Lesson 2 - Data Type - Quiz 7");

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer() {
  var locations = [];
  for (job in work.jobs) {
    locations.push(work.jobs[job].location);
  }
  return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));