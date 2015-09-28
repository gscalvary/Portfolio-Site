/* Store all information related to oneself. */

var bio =
{
  "headShot" : "images/Chris.jpg",
  "name" : "Christopher Oliver",
  "role" : ["Software Engineer", "Full Stack Developer", "Techie", "All-around Helpful Guy"],
  "welcomeMessage" : "I am a creative, self-motivated, and highly organized developer with over ten years of programming experience building and supporting business critical, continuously available, large-scale computing systems.  I love to learn and am constantly exploring new technologies on my own.",
  "location" : "Austin, TX"
};

var skills =
{
  "categories" : [
    {
      "name" : "Languages",
      "entries" : [
        { "name" : "Java"},
        { "name" : "HTML(5)"},
        { "name" : "CSS(3)"},
        { "name" : "JSON"},
        { "name" : "JavaScript"},
        { "name" : "jQuery"},
        { "name" : "Groovy"},
        { "name" : "Python"},
        { "name" : "Lua"},
        { "name" : "Unix Shell"},
        { "name" : "C++"},
        { "name" : "C"},
        { "name" : "SQL"},
        { "name" : "GLSL"},
        { "name" : "COBOL"},
        { "name" : "JCL"},
        { "name" : "Racket"}
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
        { "name" : "Ant"},
        { "name" : "Gradle"},
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
        { "name" : "Spring MVC"},
        { "name" : "Android SDK"},
        { "name" : "Bootstrap"},
        { "name" : "Git"},
        { "name" : "OpenGL"},
        { "name" : "Google Cloud Messaging"},
        { "name" : "Parse Cloud Storage"},
        { "name" : "OSX"},
        { "name" : "Windows"},
        { "name" : "Linux"},
        { "name" : "Virtual Box"},
        { "name" : "GLFW"},
        { "name" : "zOS"},
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
      "title" : "Java Software Engineer",
      "company" : "Blizzard Entertainment - Austin, TX",
      "datesWorked" : "August 2015 - present",
      "role" : "Full Stack Developer",
      "accomplishments" : [
        {
          "description" : "Working on a complete re-design of Blizzard's game support portal: us.battle.net.  Using Spring MVC, Java, Javascript, jQuery, Handlebars templating, Sass styling, the Spock testing framework and an agile development methodology.  Repsonsible for various front-end and back-end feature development as well as current site production support."
        }
      ]
    },
    {
      "title" : "Principal Software Engineer",
      "company" : "Fidelity Investments - Smithfield, RI",
      "datesWorked" : "June 2001 - Sep 2014",
      "role" : "Development lead, extended architect.",
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
      "shortDescription" : "A Portfolio Site",
      "longDescription" : "I developed this webpage from scratch using HTML(5), CSS(3), jQuery, JavaScript and the Bootstrap Framework.  I used Git for code version control.",
      "image" : "images/PortfolioSite.jpg",
      "imageAlt" : "Portfolio Site Screen Shot",
      "codeLink" : "http://github.com/gscalvary/Portfolio-Site",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Basic HTTP Web Server",
      "date" : "Summer 2015",
      "shortDescription" : "A Multi-threaded Web Server",
      "longDescription" : "Implemented a basic HTTP web server in Java without the use of any third party libraries.  The web server is able to handle up to 50 requests concurrently using threading.  The web server serves both static resources and servlets.  Servlet classes are loaded and executed on the fly.  The design is based on the Apache Tomcat Web Server.",
      "image" : "images/HTTPWebServer.jpg",
      "imageAlt" : "Web Server Running Screen Shot",
      "codeLink" : "http://github.com/gscalvary/myBasicHTTPServer",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Tango Me",
      "date" : "Spring 2015",
      "shortDescription" : "An Exercise Game for Android",
      "longDescription" : "Tango Me turns your mobile android device into a virtual dance partner using the accelerometer and other sensors.  Users are able to record themselves dancing and share via social media.  Solely responsible for concept, design and implementation.  On GooglePlay in Alpha, currently developing a release strategy.  Tango me was coded in Java using the Android SDK in Android Studio.  Source code is under Git version control.",
      "image" : "images/TangoMe.jpg",
      "imageAlt" : "Tango Me Screen Shot",
      "codeLink" : "http://github.com/gscalvary/Tango-Me",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Word Fade",
      "date" : "Spring 2015",
      "shortDescription" : "A Word Game for Android",
      "longDescription" : "Word Fade is a Scrabble like word game with single and two-player modes able to be played synchronously or asynchronously via the cloud.  Solely responsible for design and implementation.  On GooglePlay in Alpha.  Word Fade was coded in Java using the Android SDK in Android Studio.  Source code is under Git version control.  Data for the two-player version of the game is stored in the cloud using Parse Cloud Storage.  Messaging between players makes use of Google Cloud Messaging.",
      "image" : "images/WordFade.jpg",
      "imageAlt" : "Word Fade Screen Shot",
      "codeLink" : "",
      "codeLinkDesc" : ""
    },
    {
      "name" : "Olive",
      "date" : "Fall 2014",
      "shortDescription" : "A 3D Game Engine",
      "longDescription" : "Olive is a 3D game engine that consumes vertex meshes, applies shaders and implements a camera users may manipulate to view the world.  Solely responsible for design and implementation, still under development.  Olive is being developed in C++ with Git used for source code version control.",
      "image" : "images/Olive.jpg",
      "imageAlt" : "Olive Screen Shot",
      "codeLink" : "http://github.com/gscalvary/Olive",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Property Ladder",
      "date" : "Summer 2013",
      "shortDescription" : "A Relational Database",
      "longDescription" : "Property Ladder is a web based application that connects real estate buyers, sellers and agents particularly interested in residential architecture and historical preservation.  Implemented a normalized relational database indexed and clustered to support large search queries as well as targeted updates and created all the application specific DML SQL.  Solely responsible for concept, design and implementation.",
      "image" : "images/PropertyLadder.jpg",
      "imageAlt" : "Property Ladder Database Design",
      "codeLink" : "http://github.com/gscalvary/Property-Ladder",
      "codeLinkDesc" : "See the code on GitHub"
    }
  ]
}

var links =
{
  "icons" : [
    {
      "link" : "https://github.com/gscalvary",
      "image" : "images/Octocat.jpg",
      "imageDesc" : "View Christopher Oliver's code on GitHub"
    },
    {
      "link" : "https://www.linkedin.com/pub/christopher-oliver/9/199/557",
      "image" : "https://static.licdn.com/scds/common/u/img/webpromo/btn_myprofile_160x33.png",
      "imageDesc" : "View Christopher Oliver's profile on LinkedIn"
    }
  ]
}
