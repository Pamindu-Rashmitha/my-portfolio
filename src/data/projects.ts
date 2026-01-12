import storeImg from '../assets/store.jpeg';
import heartImg from '../assets/heart.png';
import restImg from '../assets/restaurant.png';
import pamiya from '../assets/pami-gpt.png';
import vehicle from '../assets/vehicle.png';
import portfolio from '../assets/portfolio.png';


export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveDemo?: string;
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Web Based Market Store",
        description: "The Web-Based Market Store is a Java Spring Boot web application designed to provide a user-friendly e-commerce platform. Customers can register, browse products, manage carts, place orders, process payments, and submit reviews.",
        technologies: ["Java", "SpringBoot", "MySQL", "Thymeleaf", "n8n"],
        githubLink: "https://github.com/Pamindu-Rashmitha/market-store-1",
        image: storeImg
    },
    {
        id: 2,
        title: "Restaurant Table Reservation Platform",
        description: "A full-stack reservation system based on java, servlets, jsp and file-handling as the data storage with Queue data structure implementation.",
        technologies: ["Java", "Servlets", "Jakarta EE", "OOP"],
        githubLink: "https://github.com/Pamindu-Rashmitha/RestaurantTableReservationPlatform-1-",
        image: restImg
    },
    {
        id: 3,
        title: "Heart-Disease Predictor",
        description: "A machine learning web application that predicts the likelihood of a patient having heart disease based on medical attributes.",
        technologies: ["Python", "Scikit-Learn", "Streamlit","Pandas","Matplotlib","Seaborn","Logistic Regression","Decision Tree","Random Forest","XG-boost"],
        githubLink: "https://github.com/Pamindu-Rashmitha/Heart-Disease-Predictor",
        liveDemo:"https://heart-disease-predictor-h7gwgu4xvqe5byvijs5eh9.streamlit.app/",
        image: heartImg
    },
    {
        id: 4,
        title: "Pamiya-GPT",
        description: "Pamiya-GPT is a sophisticated AI assistant capable of real-time web search, data analysis, document reading, and email automation. Built using Google's Gemini 2.5 Flash, LangChain, and Streamlit\
                        Unlike standard chatbots that rely solely on training data, Pamiya-GPT is an Agent equipped with specialized tools. It intelligently decides when to browse the internet, analyze a spreadsheet, or read a PDF document to answer your questions.",
        technologies: ["Python", "Scikit-Learn", "Streamlit","Lang-Chain","Pandas","pypdf","duckduckgo search"],
        githubLink: "https://github.com/Pamindu-Rashmitha/Pamiya-GPT",
        liveDemo:"https://pamiya-gpt-fzv4byvuzavwvv8na975u8.streamlit.app/",
        image: pamiya
    },
    {
        id:5,
        title:"Web Based Vehicle Reservation System",
        description:"This project is a full-stack, enterprise-grade Web-Based Vehicle Rental System developed using Spring Boot. It features a robust architecture integrating Stripe API for secure payments, Spring Security for role-based access control (Admin/User), and MySQL for data management. Key functionalities include real-time vehicle availability searching, automated email notifications, a customer support ticketing system, and a comprehensive administrative dashboard for fleet and revenue analytics.",
        technologies:["Java", "Spring Boot", "Spring Security", "spring Data JPA/Hibernate", "Thymeleaf","MySQL","Stripe API","Gmail SMTP"],
        githubLink:"https://github.com/Pamindu-Rashmitha/web-based-vehicle-rental",
        image:vehicle
    },
    {
        id:6,
        title:"My Portfolio",
        description:"A premium, interactive developer portfolio built with a focus on Artificial Intelligence and modern web technologies. This project showcases my journey as an AI student at SLIIT and my expertise in building intelligent, human-centered digital products.",
        technologies:["React", "Type Script", "Tailwind CSS", "Framer Motion", "Lucide React"],
        githubLink:"https://github.com/Pamindu-Rashmitha/my-portfolio",
        image:portfolio
    },

];