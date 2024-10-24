// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
// const mainBody = {
//   gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
//   firstName: "Surya",
//   middleName: "",
//   lastName: "Rajendran",
//   message: " Passionate about changing the world with technology. ",
//   icons: [
//     {
//       image: "fa-github",
//       url: "https://github.com/SuryaRajendr",
//     },
//     {
//       image: "fa-linkedin",
//       url: "https://www.linkedin.com/in/surya-rajendran-developer/",
//     },
//     {
//       image: "fa-stack-overflow",
//       url: "https://stackoverflow.com/users/20155480/surya-rajendran", // Replace with your Stack Overflow URL
//     },
//     {
//       image: "fa-globe",
//       url: "https://suryacrajendran.wixsite.com/surya-rajendran-port/", // Replace with your website URL
//     },
//     {
//       image: "fa-code", // Substitute for LeetCode
//       url: "https://leetcode.com/u/Surya_Rajendran/", // Replace with your LeetCode URL
//     },
//     {
//       image: "fa-box", // Substitute for npm
//       url: "https://www.npmjs.com/~suryarajendran", // Replace with your npm URL
//     },
//     {
//       image: "fa-terminal", // Substitute for Replit
//       url: "https://replit.com/@SuryaRajendr", // Replace with your Replit URL
//     },
//     {
//       image: "fa-facebook",
//       url: "https://www.facebook.com/surya",
//     },
//     {
//       image: "fa-instagram",
//       url: "https://www.instagram.com/suryarajendr/",
//     },
//     {
//       image: "fa-twitter",
//       url: "https://twitter.com/suryawxyz",
//     },
//   ],
// };
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Surya",
  middleName: "",
  lastName: "Rajendran",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/SuryaRajendr",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/surya-rajendran-developer/",
    },
    {
      image: "fab fa-stack-overflow",
      url: "https://stackoverflow.com/users/20155480/surya-rajendran",
    },
    {
      image: "fas fa-globe",
      url: "https://suryacrajendran.wixsite.com/surya-rajendran-port/",
    },
    {
      image: "fas fa-code", // Substitute for LeetCode
      url: "https://leetcode.com/u/Surya_Rajendran/",
    },
    {
      image: "fas fa-box", // Substitute for npm
      url: "https://www.npmjs.com/~suryarajendran",
    },
    {
      image: "fas fa-terminal", // Substitute for Replit
      url: "https://replit.com/@SuryaRajendr",
    },
    {
      image: "fab fa-facebook",
      url: "https://www.facebook.com/surya",
    },
    {
      image: "fab fa-instagram",
      url: "https://www.instagram.com/suryarajendr/",
    },
    {
      image: "fab fa-twitter",
      url: "https://twitter.com/suryawxyz",
    },
  ],
};


// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/SuryaRajendran.jpeg"),
  imageSize: 375,
  message:
    "My name is Surya Rajendran. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1H2IIQAZ3OJWsnp-NiXJa6JRjnP8DIIZK/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SuryaRajendr", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/SuryaRajendran.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/SuryaRajendran.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Javascript", value: 90 },
    { name: "Nodejs", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "AWS", value: 65 },
    { name: "Serverless", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "GCP", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "surya.crajendran@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Engineer',// Here Add Company Name
      companylogo: require('../assets/img/aspireSystems.png'),
      date: 'May 2022 – Present',
    },
    {
      role: 'Software Developer',
      companylogo: require('../assets/img/venbaInfotech.png'),
      date: 'Nov 2020 – May 2022',
    },
    {
      role: 'Junior Software Developer',
      companylogo: require('../assets/img/cavintek.png'),
      date: 'Dec 2019 – Jul 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
