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
  username: "Manisha Mehra",
  title: "Hi all, I'm Manisha",
  subTitle: emoji(
    "A results-driven Business Analyst 💼 with 2.7 years of experience in delivering technical business solutions, managing IT projects, and collaborating with stakeholders to optimize business processes and enhance system performance."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/manisha-mehra-a71bbb15b/",
  gmail: "manishamehra1999@gmail.com",
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
  subTitle: "INSIGHTFUL BUSINESS ANALYST WHO TURNS IDEAS INTO ACTIONABLE SOLUTIONS",
  skills: [
    emoji("⚡ Analyze and document business processes to align with client needs and project goals"),
    emoji("⚡ Collaborate with cross-functional teams using Agile/Scrum methodologies for seamless project execution"),
    emoji("⚡ Design intuitive wireframes and user journeys using tools like Axure RP and Figma"),
    emoji("⚡ Conduct risk assessments, improve processes, and ensure timely delivery of IT solutions"),
    emoji("⚡ Define product strategies and roadmaps to enhance business value and user experience")
  ],

  softwareSkills: [
    {
      skillName: "Microsoft Office 365",
      fontAwesomeClassname: "fas fa-file-word"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Axure RP",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Trello",
      fontAwesomeClassname: "fab fa-trello"
    },
    {
      skillName: "Scrum",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Agile",
      fontAwesomeClassname: "fas fa-running"
    },
    {
      skillName: "Waterfall",
      fontAwesomeClassname: "fas fa-water"
    },
    {
      skillName: "Product Management",
      fontAwesomeClassname: "fas fa-lightbulb"
    }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Amity University, Noida",
      logo: require("./assets/images/amityLogo.png"), // Replace with actual logo if available
      subHeader: "Master of Computer Applications (MCA)",
      duration: "2020 - 2022",
      desc: "Completed postgraduate studies in Computer Applications with a focus on IT systems, development, and business processes.",
      descBullets: [
        "Built a strong foundation in software development and systems analysis",
        "Focused on technical and managerial aspects of IT projects"
      ]
    },
    {
      schoolName: "Amity University, Noida",
      logo: require("./assets/images/amityLogo.png"), // Replace with actual logo if available
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "2017 - 2020",
      desc: "Graduated with a bachelor's degree in Computer Applications, gaining essential skills in programming, databases, and software engineering.",
      descBullets: [
        "Gained practical exposure to computing technologies and applications",
        "Participated in academic projects related to business software solutions"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Business Analysis & Documentation",
      progressPercentage: "90%"
    },
    {
      Stack: "Project Management & Agile/Scrum",
      progressPercentage: "85%"
    },
    {
      Stack: "Tools & Technologies (JIRA, Figma, SQL, Axure RP)",
      progressPercentage: "80%"
    },
    {
      Stack: "Stakeholder Communication & UAT",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Executive",
      company: "Mahindra Teqo",
      companylogo: require("./assets/images/mahindraLogo.png"), // Replace with actual logo if available
      date: "March 2025 – Present",
      desc: "Overseeing product strategy and business process improvements in the renewable energy domain, while aligning technical teams with business objectives.",
      descBullets: [
        "Driving product initiatives and performance tracking for tech-driven solar management solutions",
        "Liaising with internal and external stakeholders to gather requirements and deliver scalable solutions",
        "Supporting strategic planning, roadmap definition, and delivery oversight for digital transformation projects"
      ]
    },
    {
      role: "Business Analyst",
      company: "Infoneo Technologies",
      companylogo: require("./assets/images/infoneoLogo.png"),
      date: "September 2024 – February 2025",
      desc: "Collaborated with onsite stakeholders to define and document business requirements for major software development projects like CNG Sales and Cathodic Protection systems.",
      descBullets: [
        "Streamlined report submission and approval, reducing manual effort by 75%",
        "Led sprint planning and daily Scrum meetings using Agile methodologies",
        "Conducted IT risk assessments, reducing incidents by 30%"
      ]
    },
    {
      role: "Business Analyst",
      company: "Uneecops Technologies Ltd.",
      companylogo: require("./assets/images/uneecopsLogo.png"),
      date: "June 2022 – July 2024",
      desc: "Managed multiple government and enterprise web portal projects, ensuring timely delivery and alignment with client expectations.",
      descBullets: [
        "Created SRS documents, wireframes, and user manuals for projects like DGLL, NCLAT, and Film Facilitation Office",
        "Performed IT risk assessments and system testing across 30 district websites for Odisha government",
        "Collaborated with stakeholders for dashboard design and issue resolution across platforms like Broadcast Seva and TRIFED"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "SOME GOVERNMENT AND ENTERPRISE PROJECTS I CONTRIBUTED TO AS A BUSINESS ANALYST",
  projects: [
    {
      image: require("./assets/images/dgllLogo.png"), // Replace with actual project logo if available
      projectName: "DGLL Website, NCLAT Website, Film Facilitation Office",
      projectDesc: "Gathered and documented requirements, created SRS, user manuals, and wireframes using Axure RP and Figma.",
      footerLink: [
        {
          name: "Visit Uneecops",
          url: "https://www.uneecops.com/"
        }
      ]
    },
    {
      image: require("./assets/images/trifedLogo.png"), // Replace with actual project logo if available
      projectName: "TRIFED Web Portal (VDVK, MSP for MFP)",
      projectDesc: "Defined and monitored project milestones, collaborated with clients, and ensured timely delivery aligned with expectations.",
      footerLink: [
        {
          name: "TRIFED Website",
          url: "https://trifed.tribal.gov.in/"
        }
      ]
    },
    {
      image: require("./assets/images/odishaLogo.png"), // Replace with actual project logo if available
      projectName: "Odisha District Websites (30)",
      projectDesc: "Performed comprehensive testing and IT risk assessments, improving system security and reducing vulnerabilities by 30%.",
      footerLink: [
        {
          name: "Visit Odisha Govt",
          url: "https://odisha.gov.in/"
        }
      ]
    },
    {
      image: require("./assets/images/gailLogo.png"), // Replace with actual project logo if available
      projectName: "GAIL Gas – CNG Sales & Cathodic Protection System",
      projectDesc: "Led business analysis and Agile implementation for automation and system optimization projects, improving efficiency significantly.",
      footerLink: [
        {
          name: "Visit GAIL",
          url: "https://gailgas.com/"
        }
      ]
    }
  ],
  display: true
};

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
//       imageAlt: "Google Code-In Logo",
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
//       imageAlt: "Google Assistant Action Logo",
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
//       imageAlt: "PWA Logo",
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

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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

// Talks Sections

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

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "manishamehra1999@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  bigProjects,
  // achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
