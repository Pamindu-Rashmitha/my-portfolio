import '../assets/store.jpeg'

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
        id:1,
        title:"Web Based Market Store",
        description: "The Web-Based Market Store is a Java Spring Boot web application designed to provide a user-friendly e-commerce platform. Customers can register, browse products, manage carts, place orders, process payments, and submit reviews. Administrators can manage products, orders, and payments, ensuring a robust backend. The development approach follows Agile (Scrum) methodology, adopts MVC architecture, and emphasizes ethical principles, such as privacy and accessibility.",
        technologies: ["#Java", "#SpringBoot", "#Spring Security", "#MySQL","#Thymeleaf","#Spring Security","#Chatbot","#n8n"],
        githubLink: "https://github.com/Pamindu-Rashmitha/market-store-1",
        image: "../assets/store.jpeg"
    },
    {
        id:2,
        title:"Restaurant Table Reservation Platform",
        description: "A full-stack reservation system based on java,servlets,jsp and file-handling as the data storage. with Queue data structure implementation",
        technologies: ["#Java", "#Servlets", "#Jakartha EE", "#CSS","#OOP","#File Handling"],
        githubLink: "https://github.com/Pamindu-Rashmitha/RestaurantTableReservationPlatform-1-",
        image: "https://via.placeholder.com/300"
    },
    
];