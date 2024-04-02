import react from "/public/assets/react.svg";
import redux from "/public/assets/redux.svg";
import next from "/public/assets/nextjs.png";
import html from "/public/assets/html.png";
import css from "/public/assets/css.png";
import javascript from "/public/assets/JavaScript.png";
import bootstrap from "/public/assets/bootstrap.png";
import mui from "/public/assets/mui.png";
import tailwind from "/public/assets/tailwind.svg";
import node from "/public/assets/node.png";
import express from "/public/assets/express.png";
import php from "/public/assets/php.png";
import mysql from "/public/assets/mysql.svg";
import mongo from "/public/assets/mongo.svg";
import firebase from "/public/assets/firebase.svg";
import git from "/public/assets/git.svg";
import github from "/public/assets/github.png";
import netlify from "/public/assets/netlify.png";
import vercel from "/public/assets/vercel.png";
import vscode from "/public/assets/vscode.png";
import postman from "/public/assets/postman.svg";
import gradient from "/public/images/gradient-generator.png";
import myntra from "/public/images/myntra.png";
import blinkit from "/public/images/blinkit.png";
import chatApp from "/public/images/chatApp.png";
import portfolio from "/public/images/portfolio.png";


export const Bio = {
    name: "Sandeep Singh",
    roles: [
      "Full Stack Developer",
      "Front End Developer",
      "Backend Developer",
      "Programmer",
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    github: "https://github.com/sandeepsinghh143",
    resume:
      "https://drive.google.com/file/d/1tgVyi6AETNEtcMIFEhFjEkZOJVvBe3m9/view?usp=sharing",
    linkedin: "",
    twitter: "",
    insta: "",
    facebook: "",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:react,
        },
        {
          name: "Redux",
          image:redux,
        },
        {
          name: "Next Js",
          image:next,
        },
        {
          name: "HTML",
          image: html,
        },
        {
          name: "CSS",
          image:css,
        },
        {
          name: "JavaScript",
          image:javascript,
        },
        {
          name: "Bootstrap",
          image:bootstrap,
        },
        {
          name: "Material UI",
          image:mui,
        },
        {
          name: "Tailwind",
          image:tailwind,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: node,
        },
        {
          name: "Express Js",
          image:express,
        },
        {
          name: "Php",
          image:php,
        },
        {
          name: "MySQL",
          image:mysql,
        },
        {
          name: "MongoDB",
          image:mongo,
        },
        {
          name: "Firebase",
          image: firebase,
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:git,
        },
        {
          name: "GitHub",
          image:github,
        },
        {
          name: "Vercel",
          image:vercel,
        },
        {
          name: "Netlify",
          image:netlify,
        },
        {
          name: "VS Code",
          image:vscode,
        },
        {
          name: "Postman",
          image:postman,
        },
      ],
    },
  ];
  

  
  export const education = [
    {
      id: 0,
      school: "South Point Campus",
      date: "Oct 2016 - Sep 2019",
      desc: "I completed M.B.A from (DCRUST) Deenbandu Chottu Ram University of Science & Technology",
      degree: "M.B.A",
    },
    {
      id: 1,
      school: "Hindu College",
      date: "Oct 2012 - Sep 2015",
      desc: "I completed B.B.A from (MDU) Maharshi Dayanand University Rohtak.",
      degree: "B.B.A",
    },
    {
      id: 2,
      school: "Shambhu Dayal Modern School Sonipat",
      date: "Apr 2011 - Apr 2012",
      desc: "I completed my class 12 high school education FROM C.B.S.E.",
      degree: "XII",
    },
    {
      id: 3,
      school: "Shambhu Dayal Modern School Sonipat",
      date: "Apr 2009 - Apr 2010",
      desc: "I completed my class 10 education from C.B.S.E.",
      degree: "X",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Portfolio",
      description:
        "This is my personal Portfolio. It features various sections like about me, education, projects and skills and fully functional contact form using emailjs/browser package ",
      image:portfolio,
      tags: [
        "HTML",
        "CSS",
        "NEXT JS",
        "TAILWIND",
      ],
      github: "https://github.com/sandeepsinghh143/portfolio",
      webapp: "https://portfolio-eta-vert-24.vercel.app/"
    },
    {
      id: 1,
      title: "Gradient Generator",
      description:
        "Using Gradient Generator you can generate css property gradient background i.e linear gradient to right. After that just copy it and apply it to your preferred html element.",
      image:gradient,
      tags: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
      ],
      github: "https://github.com/sandeepsinghh143/GradientGenerator",
      webapp: "https://sandeepsinghh143.github.io/GradientGenerator/",
    },
    {
      id: 2,
      title: "Myntra Clone",
      description:"This is fully responsive clone of famous e-commerce website myntra. It features multiple carousal with product images. Responsive hamburger menu for mobile screens.",
      image:myntra,
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/sandeepsinghh143/myntra-clone",
      webapp: "https://sandeepsinghh143.github.io/myntra-clone/",
    },
    {
      id: 3,
      title: "Blink-It",
      description:"This is fully responsive clone of famous e-commerce website Blinkit. Responsive hamburger menu for mobile screens.",
      image:blinkit,
      tags: ["HTML", "CSS", "REACT-JS"],
      github: "https://github.com/sandeepsinghh143/blinkit-clone",
      webapp: "https://blinkit-sandeep.netlify.app/",
    },
    
    {
      id: 4,
      title: "Chat App",
      description:"In this chat app user can interact with each other. It uses socket.io to emit messages",
      image:chatApp,
      tags: ["Node JS"],
      github: "https://github.com/sandeepsinghh143/chat-app",
      webapp: "https://chat-app-socket-bhlw.onrender.com",
    },
    
  ];