import storeImg from '../assets/store.jpeg';
import heartImg from '../assets/heart.png';
import restImg from '../assets/restaurant.png';
import pamiya from '../assets/pami-gpt.png';


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
        technologies: ["Python", "Scikit-Learn", "Streamlit"],
        githubLink: "https://github.com/Pamindu-Rashmitha/Heart-Disease-Predictor",
        liveDemo:"https://heart-disease-predictor-h7gwgu4xvqe5byvijs5eh9.streamlit.app/",
        image: heartImg
    },
    {
        id: 4,
        title: "Pamiya-GPT",
        description: "Pamiya-GPT is a sophisticated AI assistant capable of real-time web search, data analysis, document reading, and email automation. Built using Google's Gemini 2.5 Flash, LangChain, and Streamlit\
                        Unlike standard chatbots that rely solely on training data, Pamiya-GPT is an Agent equipped with specialized tools. It intelligently decides when to browse the internet, analyze a spreadsheet, or read a PDF document to answer your questions.",
        technologies: ["Python", "Scikit-Learn", "Streamlit"],
        githubLink: "https://github.com/Pamindu-Rashmitha/Pamiya-GPT",
        liveDemo:"https://pamiya-gpt-fzv4byvuzavwvv8na975u8.streamlit.app/",
        image: pamiya
    },
];