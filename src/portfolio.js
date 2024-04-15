/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samyak Gangwal",
  title: "Hi all, I'm Samyak",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of backend web applications with Rust / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FTfvSAFEiWKf20CSdyWSO8f8I7YnGxCl",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SamyakGangwal",
  linkedin: "https://www.linkedin.com/in/samyak-gangwal/",
  gmail: "sam.gangwal97@gmail.com",
  // Instagram and Twitter are also supported in the links!
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop clean, robust and highly scalable applications"),
    emoji(
      "⚡ Progressive Web Applications ( PWA ) in normal and Single Page Applications ( SPA ) Stacks"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ A motivated individual with in-depth knowledge of languages and development tools"
    ),
    emoji("⚡ A curious learner and creative team player")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "digitalOcean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "lni lni-kubernetes"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/sppu.jpeg"),
      subHeader: "Bachelor Of Engineering in Computer Engineering",
      duration: "August 2017 - May 2021",
      desc: "Participated and won Winjit Hackathon and published 1 research paper.",
      descBullets: [
        "Participated and won in Winjit Hackathon ",
        "Published research paper on thermal anomaly detection and breast cancer prediction using DITI and Deep Learning Approach",
        "Organized coding competitions and other technical events"
      ]
    },
    {
      schoolName: "University Of Massachusetts at Boston",
      logo: require("./assets/images/umassb.png"),
      subHeader: "Masters's Of Science in Computer Science",
      duration: "September 2022 - May 2024"
      // desc: "Participated and won Winjit Hackathon and published 1 research paper.",
      // descBullets: [
      //   "Participated and won in Winjit Hackathon ",
      //   "Published research paper on thermal anomaly detection and breast cancer prediction using DITI and Deep Learning Approach",
      //   "Organised coding competitions and other technical events"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Database/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer / Graduate Assistant",
      company: "UMass Boston",
      companylogo: require("./assets/images/umassb.png"),
      date: "July 2023 - Present",
      desc: "Created an application to manage awards and grants for Office of Sponsored Research and Programs + Teaching Assistant",
      descBullets: [
        "Designed and developed a secure Django web application with a PostgreSQL database to manage subawards and subcontracts for a research team.",
        "Implemented user authentication, data validation, and access control functionalities to ensure data integrity and security.",
        "Established a relational database schema with parent-child tables to efficiently track award iterations and simplify data retrieval.",
        "Developed a user-friendly interface for grant management including user signup, login, data entry, and report generation functionalities.",
        "Conducted bi-weekly progress meetings and user testing sessions with stakeholders to gather feedback and ensure the application met their needs.",
        "Currently Working as a Teaching Assistant for the subject CS210: Intermediate Computing with Data Structures in Java",
        "Technical Skills Demonstrated: Django, PostgreSQL, Database Design, User Authentication, Data Validation, Web Development"
      ]
    },
    {
      role: "Software Engineer",
      company: "Vicara",
      companylogo: require("./assets/images/vicara.jpeg"),
      date: "March 2021 - July 2022",
      desc: "Worked on PATR - A code deployment platform which helps developers scale without any problems.",
      descBullets: [
        "Developed and deployed key features for the PATR cloud platform, a one-stop solution for deploying web applications, databases, and containers. Implemented functionalities for deploying web apps using Docker, static sites via S3, and scalable databases on Kubernetes.",
        "Integrated containerization with Kubernetes and utilized Nginx and Cloudflare for secure application exposure. Leveraged Docker containers and Kubernetes for scalable deployments, ensuring secure access through Nginx and Cloudflare.",
        "Designed secure database schema for user payments and implemented role-based access control (RBAC). Established a secure database structure for user payments and enforced RBAC principles for granular access control within the platform.",
        "Championed agile development methodologies to manage the software development lifecycle. Utilized daily stand-up meetings and weekly task allocation to streamline development. Mentored new hires and facilitated a collaborative development environment.",
        "Automated the build process using CI/CD practices to improve development efficiency and reduce errors."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "BitGlaze Technologies",
      companylogo: require("./assets/images/bitglaze.jpeg"),
      date: "September 2020 - March 2021",
      desc: "worked on an analytical tool called Ace for TheBigSmallIdea",
      descBullets: [
        "Developed interactive web applications for data analysis and visualization using Django, Python, and parallel computing for"
        + "The Big Small Idea client. These applications included a word-cloud generator, a facial detection and screen-time calculator, "
        + "and a Twitter data searcher, empowering users with data exploration and insights."
      ]
    },
    {
      role: "Student Developer",
      company: "Crio.do",
      companylogo: require("./assets/images/crio.png"),
      date: "Feb 2020 - Sep 2020",
      descBullets: [
        "Got hands-on experience on Product development, by carrying out projects related to Networking and Backend Development",
        "Learned to solve problems in a more systematic way, by choosing the right Data Structure, and breaking the problem to subproblems, writing a clean code",
        "Received firsthand experience in developing a Spring Boot Application",
        "Developed the backend for a food ordering application on Spring Boot, using Gradle",
        "Built a Quiz evaluator and designed its API from scratch"
      ]
    }
  ]
};
/*

2 things how to put hyperlink in a json variable and add an svg to font-awesome

*/
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-8573130278",
  email_address: "sam.gangwal97@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  // bigProjects,
  // achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable
};
