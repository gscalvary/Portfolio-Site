/* Functions used to dynamically allocate divs for personal data that has from
   1 to many entries. */

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

function buildHeader() {
  $('title').text(bio.name + "'s Portfolio");
}

function buildCategories() {

  var howMany = skills.categories.length;

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

function buildEducation() {

  var howMany = education.schools.length;

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

    var aboutDegree = document.createElement("div");
    aboutDegree.className = "col-md-4";
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

function buildExperience() {

  for (var i = 0; i < experience.jobs.length; i++) {
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

function buildFeaturedWork() {

  var numRows = Math.ceil(featuredWork.projects.length/2);

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
        /* Remove spaces from the project name to form a proper modal data target id. */
        var id = featuredWork.projects[k].name.replace(/\s|\!+/g, '');
        var workImageHTML = HTMLWorkImage.replace("%dataSrc%", featuredWork.projects[k].image).replace("%dataAlt%", featuredWork.projects[k].imageAlt).replace("%dataTarget%", "#" + id);
        var workTitleHTML = HTMLWorkTitle.replace("%data%", featuredWork.projects[k].name);
        var workSubTitleHTML = HTMLWorkSubTitle.replace("%data%", featuredWork.projects[k].shortDescription);
        var workDateHTML = HTMLWorkDate.replace("%data%", featuredWork.projects[k].date);
        var workLinkHTML = HTMLWorkLink.replace("%dataLink%", featuredWork.projects[k].codeLink).replace("%dataLinkText%", featuredWork.projects[k].codeLinkDesc);
        $("#myWork-" + k).append(workImageHTML);
        $("#myWork-" + k).append(workTitleHTML);
        $("#myWork-" + k).append(workSubTitleHTML);
        $("#myWork-" + k).append(workDateHTML);
        $("#myWork-" + k).append(workLinkHTML);
        /* Build a modal for the project. */
        var workModalHTML = HTMLmodal.replace("%dataID%", id).replace("%dataLabel%", featuredWork.projects[k].name).replace("%dataModalTitle%", featuredWork.projects[k].name).replace("%dataModalBody%", featuredWork.projects[k].longDescription);
        $("#modals").append(workModalHTML);
      }
    }
  }
}

function buildFooter() {

  for (icon in links.icons) {
    var iconHTML = HTMLfooterIcon.replace("%dataLink%", links.icons[icon].link).replace("%dataSrc%", links.icons[icon].image).replace("%dataAlt%", links.icons[icon].imageDesc);
    $("#icons").append(iconHTML);
  }
}

function animations() {

  var interval = 3e3; // 3 seconds
  var index = 1;
  var maxIndex = bio.role.length - 1;

  setInterval(function() {
    /* Flip the header role every so often. */
    $("#headerRole").text(bio.role[index]);
    index = (index == maxIndex) ? 0 : index + 1;
  }, interval);
}

/* Build HTML using definitions in helper.js. */
var picHTML = HTMLheaderPic.replace("%data%", bio.headShot);
var nameHTML = HTMLheaderName.replace("%data%", bio.name);
var roleHTML = HTMLheaderRole.replace("%data%", bio.role[0]);
var msgHTML = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var locationHTML = HTMLlocation.replace("%data%", bio.location);

/* Use jQuery to update the DOM with the HTML built above. */
$("#myNameAndRole").prepend(nameHTML);
$("#myNameAndRole").append(roleHTML);
$("#myPicture").append(picHTML);
$("#about").append(msgHTML);
$("#myLocation").append(locationHTML);

/* Dynamically modify the DOM for personal information with 1 to many entries. */
buildHeader();
buildCategories();
buildFeaturedWork();
buildEducation();
buildExperience();
buildFooter();

/* Begin animation(s). */
$( document ).ready(animations);
