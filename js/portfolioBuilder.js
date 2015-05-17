/* Store all information related to oneself. */
var bio =
{
  "headShot" : "images/HeadShot.jpg",
  "name" : "Christopher Oliver",
  "role" : "Software Engineer - Super Techie",
  "welcomeMessage" : "I am a dedicated, self-motivated, and highly organized lead developer with over ten years of programming experience building and supporting business critical, continuously available, large-scale computing systems.  I love to learn and am constantly exploring new technologies on my own. Let's build something together!",
  "location" : "Providence, RI but will re-locate!"
};

var skills =
{
  "categories" : [
    {
      "name" : "Languages",
      "entries" : [
        { "name" : "Java"},
        { "name" : "C++"},
        { "name" : "C"},
        { "name" : "SQL"},
        { "name" : "COBOL"},
        { "name" : "Python"},
        { "name" : "Lua"},
        { "name" : "Unix Shell"},
        { "name" : "JCL"},
        { "name" : "Racket"},
        { "name" : "GLSL"},
        { "name" : "HTML(5)"},
        { "name" : "CSS(3)"},
        { "name" : "JSON"},
        { "name" : "JavaScript"},
        { "name" : "jQuery"}
      ]
    },
    {
      "name" : "Databases",
      "entries" : [
        { "name" : "SQLite"},
        { "name" : "DB2"},
        { "name" : "Oracle"},
        { "name" : "Sybase"},
        { "name" : "PostgreSQL"},
        { "name" : "VSAM"}
      ]
    },
    {
      "name" : "Tools",
      "entries" : [
        { "name" : "Android Studio"},
        { "name" : "IntelliJ"},
        { "name" : "Atom"},
        { "name" : "Eclipse RDz"},
        { "name" : "Xcode"},
        { "name" : "MS Visual Studio"},
        { "name" : "ISPF"},
        { "name" : "Toad"},
        { "name" : "Rapid SQL"},
        { "name" : "RTC"},
        { "name" : "Endevor"},
        { "name" : "DrRacket"}
      ]
    },
    {
      "name" : "Technologies",
      "entries" : [
        { "name" : "Android SDK"},
        { "name" : "Bootstrap"},
        { "name" : "OpenGL"},
        { "name" : "Google Cloud Messaging"},
        { "name" : "Parse Cloud Storage"},
        { "name" : "Linux"},
        { "name" : "Virtual Box"},
        { "name" : "GLFW"},
        { "name" : "zOS"},
        { "name" : "Git"},
        { "name" : "Subversion"},
        { "name" : "Box2D"},
        { "name" : "CBMC"}
      ]
    }
  ]
}

var education =
{
  "schools" : [
    {
      "degree" : "M.S. Computer Science",
      "name" : "Northeastern Univ. Boston, MA",
      "datesAttended" : "Sep 2012 - May 2015",
      "aboutDegree" : "Achieved a 3.83 GPA while studying: Artificial Intelligence, Mobile Application Development, Database Management Systems, Algorithms, Computer Systems, Program Design, Game Engine Design and Engineering Software for Reliablity."
    },
    {
      "degree" : "B.S. Finance",
      "name" : "URI Kingston, RI",
      "datesAttended" : "Sep 1993 - Aug 1996",
      "aboutDegree" : "Achieved a 3.65 GPA while a student athlete on the URI Crew Team.  Go Rams!"
    }
  ]
}

var experience =
{
  "title" : "Principal Software Engineer",
  "company" : "Fidelity Investments Smithfield, RI",
  "datesWorked" : "June 2001 - Sep 2014",
  "role" : "Development lead, extended architect, all-around helpful guy.",
  "accomplishments" : [
    {
      "description" : "Modernized a large, mission critical transfer agent system by porting it to process against a relational database.  Lead developer for both on-shore and off-shore development teams.  Built a multi-threaded COBOL application reading and updating a multi-million row DB2 datastore using large, but performant SQL cursors of my design.  Worked with DBAs to optimize DB table clustering and indexing.  Traveled to India in 2012 and 2014 to train and mentor our off-shore software engineering teams."
    },
    {
      "description" : "Redesigned a single-threaded COBOL process responsible for processing very large data files from brokerage firms.  Delivered a multi-threaded COBOL process yielding a 700% performance increase over the former system.  The technology allowed Fidelity to process industry record-breaking data volume over a single weekend; whereas other mutual fund companies required several weekends to process similar volume.  Led design, development, testing and implementation phases."
    },
    {
      "description" : "Responsible for new technology evaluation and prototyping.  Installed, configured and evaluated an IBM zOS virtual machine (mini-mainframe) running on a RedHat Linux host.  Evaluated IBM Eclipse RDz IDE for zOS, as an early user worked directly with IBM development teams to enhance and stabilize their product."
    },
    {
      "description" : "Participated in several 24/7 on-call rotations.  Performed code and system design reviews.  Mentored new programmers."
    }
  ]
}

var featuredWork =
{
  "projects" : [
    {
      "name" : "Tango Me",
      "description" : "An Exercise Game for Android",
      "image" : "http://placekitten.com/555/300",
      "imageAlt" : "Cute kitten 1!",
      "codeLink" : "http://github.com/gscalvary/Tango-Me",
      "codeLinkDesc" : "Link to project"
    },
    {
      "name" : "Word Fade",
      "description" : "A Word Game for Android",
      "image" : "http://placekitten.com/555/300",
      "imageAlt" : "Cute kitten 2!",
      "codeLink" : "http://github.com/gscalvary",
      "codeLinkDesc" : "Link to project"
    },
    {
      "name" : "Olive",
      "description" : "A 3D Game Engine",
      "image" : "http://placekitten.com/555/300",
      "imageAlt" : "Cute kitten 3!",
      "codeLink" : "http://github.com/gscalvary/Olive",
      "codeLinkDesc" : "Link to project"
    },
    {
      "name" : "This!",
      "description" : "A Portfolio Site",
      "image" : "http://placekitten.com/555/300",
      "imageAlt" : "Cute kitten 4!",
      "codeLink" : "http://github.com/gscalvary/Portfolio-Site",
      "codeLinkDesc" : "Link to project"
    }
  ]
}

/* Functions used to dynamically allocate divs for personal data that has from
   1 to many entries.
*/
function setSkillHeading(index) {

  var categoryHTML = HTMLcategory.replace("%data%", skills.categories[index].name);
  $("#category-" + index).append(categoryHTML);
}

function setSkills(index) {

  for (entry in skills.categories[index].entries) {
    var skillHTML = HTMLSkill.replace("%data%", skills.categories[index].entries[entry].name);
    $("#category-" + index).append(skillHTML);
  }
}

function buildCategories(howMany) {

  for (var i = 0; i < howMany; i++) {
    var div = document.createElement("div");
    switch (howMany) {
      case 4:
        var div = document.createElement("div");
        div.className = "col-md-3";
        div.id = "category-" + i;
        $("#categories").append(div);
        setSkillHeading(i);
        setSkills(i);
        break;
      default:
        break;
    }
  }
}

function buildEducation(howMany) {

  for (var i = 0; i < howMany; i++) {
    /* Build the rows. */
    var header = document.createElement("div");
    header.className = "row";
    header.id = "school-header-" + i;
    $("#education").append(header);

    var about = document.createElement("div");
    about.className = "row";
    about.id = "school-about-" + i;
    $("#education").append(about);

    /* Build the divs under the rows. */
    var degree = document.createElement("div");
    degree.className = "col-md-4";
    degree.id = "degree-" + i;
    $("#school-header-" + i).append(degree);

    var school = document.createElement("div");
    school.className = "col-md-8";
    school.id = "school-" + i;
    $("#school-header-" + i).append(school);

    var datesAttended = document.createElement("div");
    datesAttended.className = "col-md-4";
    datesAttended.id = "datesAttended-" + i;
    $("#school-about-" + i).append(datesAttended);

    var aboutDegree = document.createElement("div");
    aboutDegree.className = "col-md-8";
    aboutDegree.id = "aboutDegree-" + i;
    $("#school-about-" + i).append(aboutDegree);

    /* Build the text. */
    var degreeHTML = HTMLdegree.replace("%data%", education.schools[i].degree);
    var schoolHTML = HTMLschool.replace("%data%", education.schools[i].name);
    var datesAttendedHTML = HTMLdatesAttended.replace("%data%", education.schools[i].datesAttended);
    var aboutDegreeHTML = HTMLaboutDegree.replace("%data%", education.schools[i].aboutDegree);
    $("#degree-" + i).append(degreeHTML);
    $("#school-" + i).append(schoolHTML);
    $("#datesAttended-" + i).append(datesAttendedHTML);
    $("#aboutDegree-" + i).append(aboutDegreeHTML);

    /* Add a divider, sometimes... */
    if(i + 1 < howMany) $("#education").append(document.createElement("hr"));
  }
}

/* Build HTML using definitions in helper.js. */
var picHTML = HTMLheaderPic.replace("%data%", bio.headShot);
var nameHTML = HTMLheaderName.replace("%data%", bio.name);
var roleHTML = HTMLheaderRole.replace("%data%", bio.role);
var msgHTML = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var locationHTML = HTMLlocation.replace("%data%", bio.location);
buildCategories(skills.categories.length);
buildEducation(education.schools.length);
var titleHTML = HTMLtitle.replace("%data%", experience.title);
var companyHTML = HTMLcompany.replace("%data%", experience.company);
var datesWorkedHTML = HTMLdatesWorked.replace("%data%", experience.datesWorked);
var myRoleHTML = HTMLrole.replace("%data%", experience.role);

/* Use jQuery to update the DOM with the HTML built above. */
$("#myNameAndRole").prepend(nameHTML);
$("#myNameAndRole").append(roleHTML);
$("#myPicture").append(picHTML);
$("#about").append(msgHTML);
$("#myLocation").append(locationHTML);
$("#myTitle").append(titleHTML);
$("#myCompany").append(companyHTML);
$("#datesWorked").append(datesWorkedHTML);
$("#myRole").append(myRoleHTML);

(function($) {

    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);

        // Iterate over each object in collection
        return this.each( function() {

        	// Save a reference to the element
        	var $this = $(this);

        	// Set up Scroll Handler
        	$(document).scroll(function(){

    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();

    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}

			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                 // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');

        	});
        });
    }
}(jQuery));

$('.background-img').parallax({
	speed :	0.15
});
