// === Main project thumbnails ===
import HealthInsuranceProject from "../assets/HealthInsuranceProject.png";
import MyPortfolio from "../assets/PortfolioProject.png";
import EticketManagement from "../assets/EticketManagementProject.png";
import HotelManagement from "../assets/HotelManagementProject.png";

// === Health Insurance Screens ===
import HI_Login from "../assets/ScreenListHealthInsurance/Login.png";
import HI_Signup from "../assets/ScreenListHealthInsurance/Signup.png";
import HI_Claim from "../assets/ScreenListHealthInsurance/Claim.png";
import HI_Contract from "../assets/ScreenListHealthInsurance/Contract.png";
import HI_CreateClaim from "../assets/ScreenListHealthInsurance/CreateClaim.png";
import HI_Payment from "../assets/ScreenListHealthInsurance/Payment.png";
import HI_Profile from "../assets/ScreenListHealthInsurance/Profile.png";
import HI_Registration from "../assets/ScreenListHealthInsurance/Registration.png";

// === My Portfolio Screens ===
import MP_Home from "../assets/ScreenListPersonalPortfolio/Home.png";
import MP_About from "../assets/ScreenListPersonalPortfolio/About.png";
import MP_Projects from "../assets/ScreenListPersonalPortfolio/Projects.png";
import MP_Contact from "../assets/ScreenListPersonalPortfolio/Contact.png";
import MP_ProjectDetail from "../assets/ScreenListPersonalPortfolio/ProjectDetail.png";

// === E-Ticket Management Screens ===
import EM_Home from "../assets/ScreenListEticketManagement/Home.png";
import EM_Home2 from "../assets/ScreenListEticketManagement/Home2.png";
import EM_Signin from "../assets/ScreenListEticketManagement/Signin.png";
import EM_Signup from "../assets/ScreenListEticketManagement/Signup.png";
import EM_Payment from "../assets/ScreenListEticketManagement/Payment.png";
import EM_ManageTicket from "../assets/ScreenListEticketManagement/ManageTicket.png";
import EM_Footer from "../assets/ScreenListEticketManagement/Footer.png";
import EM_EventList from "../assets/ScreenListEticketManagement/EventList.png";
import EM_EventDetail from "../assets/ScreenListEticketManagement/EventDetail.png";
import EM_BuyTicket from "../assets/ScreenListEticketManagement/BuyTicket.png";

// === Hotel Management Screens ===
import HM_Bill from "../assets/ScreenListHotelManagement/Bill.png";
import HM_CheckIn from "../assets/ScreenListHotelManagement/CheckIn.png";
import HM_Checkout from "../assets/ScreenListHotelManagement/Checkout.png";
import HM_Coupon from "../assets/ScreenListHotelManagement/Coupon.png";
import HM_CreateRule from "../assets/ScreenListHotelManagement/CreateRule.png";
import HM_CreateService from "../assets/ScreenListHotelManagement/CreateService.png";
import HM_Dashboard from "../assets/ScreenListHotelManagement/Dashboard.png";
import HM_DetailofRoom from "../assets/ScreenListHotelManagement/DetailofRoom.png";
import HM_ListofItem from "../assets/ScreenListHotelManagement/ListofItem.png";
import HM_ListofRoom from "../assets/ScreenListHotelManagement/ListofRoom.png";
import HM_Notice from "../assets/ScreenListHotelManagement/Notice.png";
import HM_Reservation from "../assets/ScreenListHotelManagement/Reservation.png";
import HM_Rule from "../assets/ScreenListHotelManagement/Rule.png";
import HM_Service from "../assets/ScreenListHotelManagement/Service.png";
import HM_ServiceofRoom from "../assets/ScreenListHotelManagement/ServiceofRoom.png";
import HM_TourBooking from "../assets/ScreenListHotelManagement/TourBooking.png";
const ProjectData = [
  {
    id: 1,
    name: "My Portfolio",
    techStack: "ReactJS, TailwindCSS",
    image: MyPortfolio,
    link: "https://github.com/ptnhan2/my-portfolio",
    startDate: "2025-06-15",
    endDate: "2025-06-30",
    description: "A personal portfolio site showcasing my projects and skills.",
    teamSize: "1",
    position: ["Frontend Developer"],
    responsibilities: [
      "Designed and developed a fully responsive web interface using HTML, CSS, JavaScript (ReactJS), and Tailwind CSS.",
      "Implemented dynamic project sections to display portfolio items with sort, filter and detail views.",
      "Created smooth navigation and scroll animations for a better user experience.",
      "Integrated a contact form with email handling and reCAPTCHA.",
      "Deployed the website using Vercel for public access"
    ],
    imageList: [
      {imgName:"Home",
        imgSrc: MP_Home
      },
      {imgName:"About",
        imgSrc: MP_About
      },
      {imgName:"Projects",
        imgSrc: MP_Projects
      },
      {imgName:"Contact",
        imgSrc: MP_Contact
      },
      {imgName:"ProjectDetail",
        imgSrc: MP_ProjectDetail
      },
    ],
    videoList: [
      {
        videoName: "Demo",
        videoSrc: "https://www.youtube.com/embed/2Vv-bUZOq4c",
      },
    ],
  },
  {
    id: 2,
    name: "Health Insurance",
    techStack: "ReactJS, Tailwind CSS, MongoDB, Java",
    image: HealthInsuranceProject,
    link: "https://github.com/tuyetanh0207/dmisa_happy",
    startDate: "2023-10-01",
    endDate: "2024-01-01",
    description:
      "The project aims to develop a digital health insurance system, focusing on improving and automating the registration and claim processing for customers.",
    teamSize: "5",
    position: ["Frontend Developer"],
    responsibilities: [
      "Designed and implemented UI components using ReactJS and Tailwind CSS.",
      "Integrated mock data and implemented dynamic rendering of claims and contracts.",
      "Participated in Scrum-based development with 2-week sprints and daily stand-ups.",
    ],
    imageList: [
      {
        imgName: "Login",
        imgSrc: HI_Login,
      },
      {
        imgName: "Signup",
        imgSrc: HI_Signup,
      },
      {
        imgName: "Claim",
        imgSrc: HI_Claim,
      },
      {
        imgName: "Contract",
        imgSrc: HI_Contract,
      },
      {
        imgName: "CreateClaim",
        imgSrc: HI_CreateClaim,
      },
      {
        imgName: "Payment",
        imgSrc: HI_Payment,
      },
      {
        imgName: "Profile",
        imgSrc: HI_Profile,
      },
      {
        imgName: "Registration",
        imgSrc: HI_Registration,
      },
    ],
    videoList: [
      {
        videoName: "ProductHappyDemo",
        videoSrc: "ProductHappyDemo", // Replace with real URL or import path
      },
    ],
  },
  {
    id: 3,
    name: "E-Ticket Management",
    techStack: "ReactJS, Tailwind CSS, MySQL, Flask",
    image: EticketManagement,
    link: "https://github.com/ptnhan2/EticketManagement",
    startDate: "2024-03-01",
    endDate: "2024-07-01",
    description:
      "This project manages online event ticketing with a user-friendly frontend and RESTful API backend.",
    teamSize: "4",
    position: ["Frontend Developer", "Backend Developer", "Team Leader"],
    responsibilities: [
      "Designed and implemented RESTful APIs with Flask for event and ticket services.",
      "Built UI for ticket booking, event browsing, and user authentication.",
      "Managed team sprints, code reviews, and documentation.",
    ],
    imageList:[
      {
        imgName: "Login",
        imgSrc: EM_Signin,
      },
      {
        imgName: "Signup",
        imgSrc: EM_Signup,
      },
      {
        imgName: "Home",
        imgSrc: EM_Home,
      },
      {
        imgName: "ManageTicket",
        imgSrc: EM_ManageTicket,
      },
      {
        imgName: "Footer",
        imgSrc: EM_Footer,
      },
      {
        imgName: "EventList",
        imgSrc: EM_EventList,
      },
      {
        imgName: "EventDetail",
        imgSrc: EM_EventDetail,
      },
      {
        imgName: "BuyTicket",
        imgSrc: EM_BuyTicket,
      },
      {
        imgName: "Payment",
        imgSrc: EM_Payment,
      },
    ],
    videoList: [
      {
        videoName: "Demo",
        videoSrc: "https://www.youtube.com/embed/2Vv-bUZOq4c",
      },
    ],
  },
  {
    id: 4,
    name: "Hotel Management",
    techStack: "C#, WinForms, Microsoft SQL Server",
    image: HotelManagement,
    link: "https://github.com/MSPhucNgo/HotelManagement_PTTKHTTT",
    startDate: "2023-04-01",
    endDate: "2023-07-01",
    description:
      "A desktop application to streamline hotel room booking, check-in/out, and service usage tracking.",
    teamSize: "5",
    position: ["Analyst and Developer"],
    responsibilities: [
      "Analyzed business logic and drew system diagrams (Use Case, ERD, Activity).",
      "Developed key features like Room Reservation, Service Management, and Reporting.",
    ],
    imageList:[
      {imgName:"Bill",
        imgSrc: HM_Bill
      },
      {imgName:"CheckIn",
        imgSrc: HM_CheckIn
      },
      {imgName:"Checkout",
        imgSrc: HM_Checkout
      },
      {imgName:"Coupon",
        imgSrc: HM_Coupon
      },
      {imgName:"CreateRule",
        imgSrc: HM_CreateRule
      },
      {imgName:"CreateService",
        imgSrc: HM_CreateService
      },
      {imgName:"Dashboard",
        imgSrc: HM_Dashboard
      },
      {imgName:"DetailofRoom",
        imgSrc: HM_DetailofRoom
      },
      {imgName:"ListofItem",
        imgSrc: HM_ListofItem
      },
      {imgName:"ListofRoom",
        imgSrc: HM_ListofRoom
      },
      {imgName:"Notice",
        imgSrc: HM_Notice
      },
      {imgName:"Reservation",
        imgSrc: HM_Reservation
      },
      {imgName:"Rule",
        imgSrc: HM_Rule
      },
      {imgName:"Service",
        imgSrc: HM_Service
      },
      {imgName:"ServiceofRoom",
        imgSrc: HM_ServiceofRoom
      },
      {imgName:"TourBooking",
        imgSrc: HM_TourBooking
      }
    ],
    videoList: [
      {
        videoName: "Demo",
        videoSrc: "https://www.youtube.com/embed/2Vv-bUZOq4c",
      },
    ],
  },
  
];

export default ProjectData;
