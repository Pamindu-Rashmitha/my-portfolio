import storeImg from '../assets/store.jpeg';

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
        image: "https://via.placeholder.com/600x400"
    },
];