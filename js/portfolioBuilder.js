/* Store all information related to oneself. */
var bio =
{
  "headShot" : "images/HeadShot.jpg",
  "name" : "Christopher Oliver",
  "role" : "Software Engineer - Techie",
  "welcomeMessage" : "I am a creative, self-motivated, and highly organized developer with over ten years of programming experience building and supporting business critical, continuously available, large-scale computing systems.  I love to learn and am constantly exploring new technologies on my own.",
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
        { "name" : "pgAdmin3"},
        { "name" : "Maya"},
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
        { "name" : "OSX"},
        { "name" : "Windows"},
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
  "jobs" : [
    {
      "title" : "Principal Software Engineer",
      "company" : "Fidelity Investments Smithfield, RI",
      "datesWorked" : "June 2001 - Sep 2014",
      "role" : "Development lead, extended architect, all-around helpful guy.",
      "accomplishments" : [
        {
          "description" : "This entry represents three development jobs I held at Fidelity each under a different sub-company in a different physical location.  I started in 2001 as an associate software engineer and earned three promotions along the way leaving as a principal software engineer, a role I held for five years.  Here are some highlights:"
        },
        {
          "description" : "Modernized a large, mission critical transfer agent system by porting it’s back-end web services to process against a relational database.  These services support all customer data view and update operations for advisor.fidelity.com and run concurrently with long-running batch processes that also update the database.  Lead developer for both on-shore and off-shore development teams."
        },
        {
          "description" : "Built a multi-threaded COBOL application reading and updating a multi-million row DB2 database using large, but performant, SQL cursors of my design.  Worked with DBAs to optimize DB table clustering and indexing to support performance, eliminate deadlocks and handle restarts in the event of mid-process failure."
        },
        {
          "description" : "Redesigned a single-threaded COBOL process responsible for processing very large data files from brokerage firms.  Delivered a multi-threaded COBOL process yielding a 700% performance increase over the former system.  The technology allowed Fidelity to process industry record-breaking data volume over a single weekend; whereas other mutual fund companies required several weekends to process similar volume.  Led design, development, testing and implementation phases."
        },
        {
          "description" : "Responsible for new technology evaluation and prototyping.  Installed, configured and evaluated an IBM zOS virtual machine (mini-mainframe) running on a RedHat Linux host.  Evaluated IBM Eclipse RDz IDE for zOS, as an early user worked directly with IBM development teams, under a non-disclosure agreement, to enhance and stabilize their product."
        },
        {
          "description" : "Participated in several 24/7 on-call rotations.  Performed code and system design reviews.  Mentored new programmers.  Traveled to India in 2012 and 2014 to train and mentor our off-shore software engineering teams."
        }
      ]
    }
  ]
}

var featuredWork =
{
  "projects" : [
    {
      "name" : "This!",
      "date" : "Summer 2015",
      "description" : "A Portfolio Site",
      "image" : "images/PortfolioSite.jpg",
      "imageAlt" : "Portfolio Site Screen Shot",
      "codeLink" : "http://github.com/gscalvary/Portfolio-Site",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Tango Me",
      "date" : "Spring 2015",
      "description" : "An Exercise Game for Android",
      "image" : "images/TangoMe.jpg",
      "imageAlt" : "Tango Me Screen Shot",
      "codeLink" : "http://github.com/gscalvary/Tango-Me",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Word Fade",
      "date" : "Spring 2015",
      "description" : "A Word Game for Android",
      "image" : "images/WordFade.jpg",
      "imageAlt" : "Word Fade Screen Shot",
      "codeLink" : "",
      "codeLinkDesc" : ""
    },
    {
      "name" : "Olive",
      "date" : "Fall 2014",
      "description" : "A 3D Game Engine",
      "image" : "images/Olive.jpg",
      "imageAlt" : "Olive Screen Shot",
      "codeLink" : "http://github.com/gscalvary/Olive",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Property Ladder",
      "date" : "Summer 2013",
      "description" : "A Relational Database",
      "image" : "images/PropertyLadder.jpg",
      "imageAlt" : "Property Ladder Database Design",
      "codeLink" : "http://github.com/gscalvary/Property-Ladder",
      "codeLinkDesc" : "See the code on GitHub"
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

function buildExperience(howMany) {

  for (var i = 0; i < howMany; i++) {
    /* Build the rows. */
    var title = document.createElement("div");
    title.className = "row";
    title.id = "job-title-" + i;
    $("#experience").append(title);

    var subTitle = document.createElement("div");
    subTitle.className = "row";
    subTitle.id = "job-sub-title-" + i;
    $("#experience").append(subTitle);

    var details = document.createElement("div");
    details.className = "row";
    details.id = "job-details-" + i;
    $("#experience").append(details);

    /* Build the divs under the rows. */
    var myTitle = document.createElement("div");
    myTitle.className = "col-md-4";
    myTitle.id = "myTitle-" + i;
    $("#job-title-" + i).append(myTitle);

    var myCompany = document.createElement("div");
    myCompany.className = "col-md-8";
    myCompany.id = "myCompany-" + i;
    $("#job-title-" + i).append(myCompany);

    var datesWorked = document.createElement("div");
    datesWorked.className = "col-md-4";
    datesWorked.id = "datesWorked-" + i;
    $("#job-sub-title-" + i).append(datesWorked);

    var myRole = document.createElement("div");
    myRole.className = "col-md-8";
    myRole.id = "myRole-" + i;
    $("#job-sub-title-" + i).append(myRole);

    var myDetails = document.createElement("div");
    myDetails.className = "col-md-12";
    myDetails.id = "myDetails-" + i;
    $("#job-details-" + i).append(myDetails);

    /* Build the text. */
    var titleHTML = HTMLtitle.replace("%data%", experience.jobs[i].title);
    var companyHTML = HTMLcompany.replace("%data%", experience.jobs[i].company);
    var datesWorkedHTML = HTMLdatesWorked.replace("%data%", experience.jobs[i].datesWorked);
    var myRoleHTML = HTMLrole.replace("%data%", experience.jobs[i].role);
    $("#myTitle-" + i).append(titleHTML);
    $("#myCompany-" + i).append(companyHTML);
    $("#datesWorked-" + i).append(datesWorkedHTML);
    $("#myRole-" + i).append(myRoleHTML);

    for(accomplishment in experience.jobs[i].accomplishments) {
      var descriptionHTML = HTMLaccomplishment.replace("%data%", experience.jobs[i].accomplishments[accomplishment].description);
      $("#myDetails-" + i).append(descriptionHTML);
    }
  }
}

function buildFeaturedWork(howMany) {

  var numRows = Math.ceil(howMany/2);

  for(var i = 0; i < numRows; i++) {
    /* Build the rows. */
    var works = document.createElement("div");
    works.className = "row";
    works.id = "works-" + i;
    $("#featured").append(works);

    /* Build the divs under the rows. */
    for(var j = 0; j < 2; j++) {
      var work = document.createElement("div");
      work.className = "col-md-6";
      var k = i * 2 + j;
      work.id = "myWork-" + k;
      $("#works-" + i).append(work);
      /* Add the data. */
      if(k < featuredWork.projects.length) {
        var workImageHTML = HTMLWorkImage.replace("%dataSrc%", featuredWork.projects[k].image).replace("%dataAlt%", featuredWork.projects[k].imageAlt).replace("%dataTarget%", "#" + featuredWork.projects[k].name);
        var workTitleHTML = HTMLWorkTitle.replace("%data%", featuredWork.projects[k].name);
        var workSubTitleHTML = HTMLWorkSubTitle.replace("%data%", featuredWork.projects[k].description);
        var workDateHTML = HTMLWorkDate.replace("%data%", featuredWork.projects[k].date);
        var workLinkHTML = HTMLWorkLink.replace("%dataLink%", featuredWork.projects[k].codeLink).replace("%dataLinkText%", featuredWork.projects[k].codeLinkDesc);
        $("#myWork-" + k).append(workImageHTML);
        $("#myWork-" + k).append(workTitleHTML);
        $("#myWork-" + k).append(workSubTitleHTML);
        $("#myWork-" + k).append(workDateHTML);
        $("#myWork-" + k).append(workLinkHTML);
      }
    }
  }
}

/* Build HTML using definitions in helper.js. */
var picHTML = HTMLheaderPic.replace("%data%", bio.headShot);
var nameHTML = HTMLheaderName.replace("%data%", bio.name);
var roleHTML = HTMLheaderRole.replace("%data%", bio.role);
var msgHTML = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var locationHTML = HTMLlocation.replace("%data%", bio.location);
/* Use jQuery to update the DOM with the HTML built above. */
$("#myNameAndRole").prepend(nameHTML);
$("#myNameAndRole").append(roleHTML);
$("#myPicture").append(picHTML);
$("#about").append(msgHTML);
$("#myLocation").append(locationHTML);
/* Dynamically modify the DOM for personal information with 1 to many entries. */
buildCategories(skills.categories.length);
buildFeaturedWork(featuredWork.projects.length);
buildEducation(education.schools.length);
buildExperience(experience.jobs.length);
