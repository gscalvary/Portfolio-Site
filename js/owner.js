/* Store all information related to oneself. */

var bio =
{
  "headShot" : "images/Chris.jpg",
  "name" : "Christopher Oliver",
  "role" : ["Software Engineer", "Full Stack Developer", "Computer Scientist", "Techie"],
  "welcomeMessage" : "I am a creative, self-motivated, and highly organized developer with over twenty years of programming experience building and supporting business critical, continuously available, large-scale computing systems.  I love to learn and am constantly exploring new technologies.",
  "location" : "United States, Planet Earth"
};

var skills =
{
  "categories" : [
    {
      "name" : "Languages",
      "entries" : [
        { "name" : "Java"},
        { "name" : "Python"},
        { "name" : "Go"},
        { "name" : "JavaScript"},
        { "name" : "HTML(5)"},
        { "name" : "CSS(3)"},
        { "name" : "Groovy"},
        { "name" : "Sass"},
        { "name" : "SQL"},
        { "name" : "Unix Shell"},
        { "name" : "Apex"},
        { "name" : "C"},
        { "name" : "Scala"},
        { "name" : "C++"}
      ]
    },
    {
      "name" : "Datastores",
      "entries" : [
        { "name" : "MongoDB"},
        { "name" : "Oracle"},
        { "name" : "Couchbase"},
        { "name" : "Solr"},
        { "name" : "Salesforce"},
        { "name" : "DB2"},
        { "name" : "PostgreSQL"},
        { "name" : "SQLite"}
      ]
    },
    {
      "name" : "Pipeline",
      "entries" : [
        { "name" : "Git"},
        { "name" : "Gradle"},
        { "name" : "Maven"},
        { "name" : "npm"},
        { "name" : "gulp"},
        { "name" : "Docker"},
        { "name" : "Jenkins"},
        { "name" : "Artifactory"},
        { "name" : "AWS"},
        { "name" : "Kubernetes"},
        { "name" : "Helm"},
        { "name" : "OpenShift"},
        { "name" : "Rancher"},
        { "name" : "ArgoCD"}
      ]
    },
    {
      "name" : "Strategies",
      "entries" : [
        { "name" : "Trunk"},
        { "name" : "Scrum"},
        { "name" : "Agile"},
        { "name" : "Waterfall"}
      ]
    },
    {
      "name" : "Frameworks",
      "entries" : [
        { "name" : "Spring Boot"},
        { "name" : "RabbitMQ"},
        { "name" : "Bootstrap"},
        { "name" : "jQuery"},
        { "name" : "jUnit"},
        { "name" : "Mockito"},
        { "name" : "Spock"},
        { "name" : "Freemarker"},
        { "name" : "Spring MVC"},
        { "name" : "Unsemantic"},
        { "name" : "Android SDK"}
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
      "company" : "Fidelity Investments - Smithfield, RI",
      "datesWorked" : "July 2023 - September 2023",
      "role" : "Technical Lead - Innovation Squad",
      "accomplishments" : [
        {
          "description" : "Led a small, distributed team tasked with using emerging technologies to help our asset managers realize efficiencies related to compliance."
        },
        {
          "description" : "Used machine learning algorithms, implemented in both PyTorch and TensorFlow, to improve an application that analyzes mutual fund prospectuses to automatically identify compliance rules that must be followed by the asset managers."
        }
      ]
    },
    {
      "title" : "Principal Software Engineer",
      "company" : "Raytheon Technologies - Portsmouth, RI",
      "datesWorked" : "January 2020 - July 2023",
      "role" : "Technical Lead - Research and Development",
      "accomplishments" : [
        {
          "description" : "Worked on research and development projects related to solving complex planning and resource management problems."
        },
        {
          "description" : "Design and implement cloud native, containerized micro-service based systems deployed to Kubernetes implementations using modern CI/CD pipelines and agile development methodologies."
        }
      ]
    },
    {
      "title" : "Sr. Software Engineer",
      "company" : "Apple - Austin, TX",
      "datesWorked" : "November 2018 - October 2019",
      "role" : "Java/Scala Software Engineer",
      "accomplishments" : [
        {
          "description" : "Helped to build and lead a new engineering team responsible for the Apple online store bag and checkout experience for Apple customers across Asia. Built new and maintained existing site features in an agile environment."
        }
      ]
    },
    {
      "title" : "Java Software Engineer",
      "company" : "Blizzard Entertainment - Austin, TX",
      "datesWorked" : "August 2015 - November 2018",
      "role" : "Full Stack Developer",
      "accomplishments" : [
        {
          "description" : "Worked on a complete re-write of Blizzard's game support portal, support.blizzard.com, using the latest front and back-end technologies, a testing framework and the Scrum agile development methodology.  Developed various front and back-end features including integration into the World of Warcraft game client, a faceted search UI implementation and the site's back-end integration with our search engine.  This site is used worldwide, localized in over a dozen languages, and supported on many different browsers and form factors all supported by the small team on which I work."
        },
        {
          "description" : "Helped build a highly customized Knowledge Centered Support (KCS) system for storing and curating Blizzard support articles.  Integrated the new KCS system with the Support Portal and all Blizzard game sites by constructing a system, using message queuing and various REST calls, to publish curated articles to our search engine."
        },
        {
          "description" : "Working on several new self-service options that will automate solutions to common problems that customers must now contact a customer support representative to resolve.  This work entails both front and back-end work as well as colloboration with other Blizzard system teams to develop new APIs."
        },
        {
          "description" : "Participate in a 24/7 production support rotation.  Perform code reviews, system analysis for upcoming initiatives as well as write system documentation."
        }
      ]
    },
    {
      "title" : "Full-time Graduate Student",
      "company" : "Northeastern University - Boston, MA",
      "datesWorked" : "Sep 2014 - May 2015",
      "role" : "MS candidate, Computer Science.",
      "accomplishments" : [
        {
          "description" : "After having spent the prior two years working full-time as the development lead on a large software project while going to graduate school part-time I took a year break to finish my Masters full-time.  I first planned for this hiatus in 2011 as a much needed opportunity to update my technical skills and then to secure a development job using those new skills."
        }
      ]
    },
    {
      "title" : "Principal Software Engineer",
      "company" : "Fidelity Investments, FFAS - Smithfield, RI",
      "datesWorked" : "Oct 2006 - Sep 2014",
      "role" : "Development lead, extended architect.",
      "accomplishments" : [
        {
          "description" : "Modernized a large, mission critical transfer agent system by porting it’s back-end web services to process against a relational database.  These services support all customer data view and update operations for institutional.fidelity.com and run concurrently with long-running batch processes that also update the database.  Lead developer for both on-shore and off-shore development teams."
        },
        {
          "description" : "Rewrote the core batch and on-line software responsible for the systematic buying and selling of Fidelity mutual funds, including minimum retirement distributions from 401k accounts, directly from customer bank accounts.  Delivered several user interface tweaks and a complete batch redesign for performance improvements.  Led design, development, testing and implementation phases."
        },
        {
          "description" : "Built a multi-threaded COBOL application for periodic dividend processing that reads and updates a multi-million row DB2 database using large, but performant, SQL cursors of my design.  Worked with DBAs to optimize DB table clustering and indexing to support performance, eliminate deadlocks and handle restarts in the event of mid-process failure."
        },
        {
          "description" : "Redesigned a single-threaded COBOL process responsible for processing very large data files from brokerage firms.  Delivered a multi-threaded COBOL process yielding a 700% performance increase over the former system.  The technology allowed Fidelity to process industry record-breaking data volume over a single weekend; whereas other mutual fund companies required several weekends to process similar volume.  Led design, development, testing and implementation phases."
        },
        {
          "description" : "Responsible for new technology evaluation and prototyping.  Installed, configured and evaluated an IBM zOS virtual machine (container) running on a RedHat Linux host.  Evaluated IBM Eclipse RDz IDE for zOS, as an early user worked directly with IBM development teams, under a non-disclosure agreement, to enhance and stabilize their product."
        },
        {
          "description" : "Participated in several 24/7 on-call rotations.  Performed code and system design reviews.  Mentored new programmers.  Traveled to India in 2012 and 2014 to train and mentor our off-shore software engineering teams."
        }
      ]
    },
    {
      "title" : "Sr. Software Engineer",
      "company" : "Fidelity Investments, FBCT - Boston, MA",
      "datesWorked" : "Oct 2005 - Oct 2006",
      "role" : "Mainframe developer.",
      "accomplishments" : [
        {
          "description" : "Worked on the back-end of Fidelity's brokerage system primarily triaging, analyzing and fixing issues caused by software problems.  Responsible for monthly software releases as well as the creation and reporting of our team's monthly metrics."
        },
        {
          "description" : "Provided 24/7 support."
        }
      ]
    },
    {
      "title" : "Sr. Software Engineer",
      "company" : "Fidelity Investments, FPCMS - Boston, MA",
      "datesWorked" : "July 2001 - Oct 2005",
      "role" : "Mainframe developer.",
      "accomplishments" : [
        {
          "description" : "This was my first development job.  I started in 2001 as an associate software engineer and earned two promotions in the first three years leaving as a senior software engineer."
        },
        {
          "description" : "Primarily worked on the back-end of the mission critical trade delivery system that supported Fidelity's trading of the securities underlying their mutual funds.  Also worked on the back-end of the securities lending system that allowed Fidelity to lend the securities underlying their mutual funds to other institutions for profit.  By the time I left this role I was the technical subject matter expert of the trade delivery system and was training new engineers on its function and implementation."
        },
        {
          "description" : "Enhanced all of the custody systems supported by my team to interface with a new custody bank, Northern Trust.  Delivered technical documentation, new VPNs (NDM line), new transmissions and 500+ program, scheduling and JCL changes.  Led analysis, development, testing and implementation phases; primary technical liason for Northern Trust counterparts."
        },
        {
          "description" : "Participated in a 24/7 on-call rotation."
        }
      ]
    }
  ]
}

var featuredWork =
{
  "projects" : [
    {
      "name" : "Machine Learning Library",
      "date" : "Summer 2018",
      "shortDescription" : "Under Active Development",
      "longDescription" : "Currently building a machine learning library in Scala using the FunSuite framework for testing and the sbt for building. I am doing this as a learning exercise after having taken an edX Machine Learning class.  Solely responsible for design and implementation.  Using Git for code version control.",
      "image" : "images/MachineLearning.jpg",
      "imageAlt" : "Source Code Screen Shot",
      "codeLink" : "http://github.com/gscalvary/machine_learning",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Linear Algebra Library",
      "date" : "Spring 2017",
      "shortDescription" : "Implemented the Basics",
      "longDescription" : "Designed and built a linear algebra library in Java with tests written in Groovy using the Spock test framework. I did this as a learning exercise primarily to lay the foundation for further study of AI and ML.  Solely responsible for design and implementation.  I used Git for code version control.",
      "image" : "images/LinearAlgebra.jpg",
      "imageAlt" : "Source Code Screen Shot",
      "codeLink" : "http://github.com/gscalvary/linear-algebra",
      "codeLinkDesc" : "See the code on GitHub"
    },
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
      "longDescription" : "Tango Me turns your mobile android device into a virtual dance partner using the accelerometer and other sensors.  Users are able to record themselves dancing and share via social media.  Solely responsible for concept, design and implementation.  Tango me was coded in Java using the Android SDK in Android Studio.  Source code is under Git version control.",
      "image" : "images/TangoMe.jpg",
      "imageAlt" : "Tango Me Screen Shot",
      "codeLink" : "http://github.com/gscalvary/Tango-Me",
      "codeLinkDesc" : "See the code on GitHub"
    },
    {
      "name" : "Word Fade",
      "date" : "Spring 2015",
      "shortDescription" : "A Word Game for Android",
      "longDescription" : "Word Fade is a Scrabble like word game with single and two-player modes able to be played synchronously or asynchronously via the cloud.  Solely responsible for design and implementation.  Word Fade was coded in Java using the Android SDK in Android Studio.  Source code is under Git version control.  Data for the two-player version of the game is stored in the cloud using a third party cloud storage solution.  Messaging between players makes use of Google Cloud Messaging.",
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
