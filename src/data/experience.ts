export interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string[];
    skills: string[];
}

export const experiences: Experience[] = [
    {
        company: "John Keells Logistics",
        role: "Dispatch Officer",
        duration: "April/2024 - July/2024",
        description: [
        "Coordinated daily dispatch operations to ensure timely delivery of goods.",
        "Gained hands-on experience with the SAP system for inventory management and order processing.",
        "Optimized logistics workflows to improve delivery efficiency."
        ],
        skills: ["SAP", "Logistics Operations", "Inventory Management"]
    },
    {
        company: "David Pieris Holdings (Pvt) Ltd",
        role: "AI & Research Engineer Intern",
        duration: "September/2026 - Present",
        description: [

        ],
        skills: ["Gen AI", "Agentic AI", "Jira"]
    },

];