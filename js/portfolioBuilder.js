/* Store all information related to oneself. */
var bio = {
  "headShot" : "images/HeadShot.jpg",
  "name" : "Christopher Oliver",
  "role" : "Software Engineer and All-around Techie",
  "welcomeMessage" : "I am a dedicated, self-motivated, and highly organized lead developer with over ten years of programming experience building and supporting business critical, continuously available, large-scale computing systems.  I love to learn and am constantly exploring new technologies on my own. Let's build something together!",
  "location" : "Providence, RI but will re-locate!"
};

var education = {
  "degree" : "M.S. Computer Science",
  "school" : "Northeastern Univ. Boston, MA",
  "datesAttended" : "Sep 2012 - May 2015",
  "aboutDegree" : "Achieved a 3.83 GPA while studying: Artificial Intelligence, Mobile Application Development, Database Management Systems, Algorithms, Computer Systems, Program Design, Game Engine Design and Engineering Software for Reliablity."
}

var experience = {
  "title" : "Principal Software Engineer",
  "company" : "Fidelity Investments Smithfield, RI",
  "datesWorked" : "June 2001 - Sep 2014"
}

/* Build HTML using definitions in helper.js. */
var picHTML = HTMLheaderPic.replace("%data%", bio.headShot);
var nameHTML = HTMLheaderName.replace("%data%", bio.name);
var roleHTML = HTMLheaderRole.replace("%data%", bio.role);
var msgHTML = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var locationHTML = HTMLlocation.replace("%data%", bio.location);
var degreeHTML = HTMLdegree.replace("%data%", education.degree);
var schoolHTML = HTMLschool.replace("%data%", education.school);
var datesAttendedHTML = HTMLdatesAttended.replace("%data%", education.datesAttended);
var aboutDegreeHTML = HTMLaboutDegree.replace("%data%", education.aboutDegree);
var titleHTML = HTMLtitle.replace("%data%", experience.title);
var companyHTML = HTMLcompany.replace("%data%", experience.company);
var datesWorkedHTML = HTMLdatesWorked.replace("%data%", experience.datesWorked);

/* Use jQuery to update the DOM with the HTML built above. */
$("#myNameAndRole").prepend(nameHTML);
$("#myNameAndRole").append(roleHTML);
$("#myPicture").append(picHTML);
$("#about").append(msgHTML);
$("#myLocation").append(locationHTML);
$("#degree").append(degreeHTML);
$("#school").append(schoolHTML);
$("#datesAttended").append(datesAttendedHTML);
$("#aboutDegree").append(aboutDegreeHTML);
$("#myTitle").append(titleHTML);
$("#myCompany").append(companyHTML);
$("#datesWorked").append(datesWorkedHTML);
