import React from 'react'
import HealthInsuranceProject from "../assets/HealthInsuranceProject.png";
import EticketManagement from "../assets/EticketManagementProject.png";
import HotelManagement from "../assets/HotelManagementProject.png";

import Login from "../assets/ScreenListHealthInsurancePr/Login.png";
import Signup from "../assets/ScreenListHealthInsurancePr/Signup.png";
import Claim from "../assets/ScreenListHealthInsurancePr/Claim.png";
import Contract from "../assets/ScreenListHealthInsurancePr/Contract.png";
import CreateClaim from "../assets/ScreenListHealthInsurancePr/CreateClaim.png";
import Payment from "../assets/ScreenListHealthInsurancePr/Payment.png";
import Profile from "../assets/ScreenListHealthInsurancePr/Profile.png";
import Registration from "../assets/ScreenListHealthInsurancePr/Registration.png";


import ProductHappyDemo from "../assets/VideoDemo/ProductHappyDemo.mp4";
const ProjectData = [
    {
      id: 1,
      name: "Health Insurance",
      techStack: "ReactJS, Tailwind CSS, MongoDB, Java",
      image: HealthInsuranceProject,
      link: "https://github.com/tuyetanh0207/dmisa_happy",
      startDate: "2023-10-01",
      endDate: "2024-01-01", 
      description: "The project aims to develop a digital health insurance system, focusing on improving and automating the registration and claim processing for customers.",
      teamSize: "5",
      position: ["Frontend Developer"],
      responsibilities: ["The project aims to develop a digital health insurance system, focusing on improving and automating the registration and claim processing for customers",
        "Participated in a team that followed the Agile (Scrum) methodology."
      ],
      imageList: [{
        imgName: "Login",
        imgSrc: Login
      },
      {
        imgName: "Signup",
        imgSrc: Signup
      },
      {
        imgName: "Claim",
        imgSrc: Claim
      },
      {
        imgName: "Contract",
        imgSrc: Contract
      },
      {
        imgName: "CreateClaim",
        imgSrc: CreateClaim
      },
      {
        imgName: "Payment",
        imgSrc: Payment
      },
      {
        imgName: "Profile",
        imgSrc: Profile
      },
      {
        imgName: "Registration",
        imgSrc: Registration
      },
    ],
        videoList: [
        {
          videoName: "ProductHappyDemo",
          videoSrc: ProductHappyDemo
        }, 
      ] 
    },
    {
      id: 2,
      name: "E-Ticket Management",
      techStack: "ReactJS, Tailwind CSS, MySQL, Flask",
      image: EticketManagement,
      link: "https://github.com/ptnhan2/EticketManagement",
      startDate: "2024-03-01",
      endDate: "2024-07-01", 
      description: "The project aims to develop a digital health insurance system, focusing on improving and automating the registration and claim processing for customers.",
      teamSize: "4",
      position: ["Frontend Developer", "Backend Developer", "Team Leader"],
      responsibilities: ["Analyzed business requirements for the Ticketing Service.",
        "Designed the database for the Ticketing Service.",
        "Developed RESTful APIs for the Ticketing Service, including ticket ordering, ticket management.",
        "Built the user interface for Ticketing Service, including ticket display, ticket selection, ticket management.",
        "Led the team: divided tasks among members, managed deadlines, and organized regular team meetings to ensure progress."
      ],
       imageList: [{
         imgName: "Registration",
        imgSrc: Registration
      },
      ],
      videoList: [
        {
          videoName: "Demo",
          videoSrc: "https://www.youtube.com/embed/2Vv-bUZOq4c"
        }, 
      ]
      
    },
    {
      id: 3,
      name: "Hotel Management",
      techStack: "C#, WinForms, Microsoft SQL Server",
      image: HotelManagement,
      link: "https://github.com/MSPhucNgo/HotelManagement_PTTKHTTT",
      startDate: "2023-04-01",
      endDate: "2023-07-01", 
      description: "The project aims to build a hotel management system to help hotel staff manage bookings, customer information, check-in, and services more easily and automatically.",
      teamSize: "5",
      position: ["Analyst and Developer"],
      responsibilities: ["Analyzed, created use case diagrams, activity diagrams, and ER diagrams for booking.",
        "Designed and built features: Create booking form, View list of waiting customers, View list of all customers."
      ],
       imageList: [{
        imgName: "Login Page",
        imgSrc: HealthInsuranceProject
      },],
      videoList: [
        {
          videoName: "Demo",
          videoSrc: "https://www.youtube.com/embed/2Vv-bUZOq4c"
        }, 
      ] 
    }
  ];

export default ProjectData;