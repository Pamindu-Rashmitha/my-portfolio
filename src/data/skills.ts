import { Code2,Brain,Database,Layout,Smartphone,Terminal, ToolCase} from "lucide-react"

export const skills = [
  { name: "Frontend", icon: Layout, items: ["React", "TypeScript", "Tailwind","HTML","CSS","Next.js"]},
  { name: "Backend", icon: Code2, items: ["SpringBoot","Node.js","Express.js","FastAPI","ASP.NET Core"]},
  { name: "Mobile", icon: Smartphone, items: ["React Native", "Expo"]},
  { name: "Languages", icon: Terminal, items: ["JavaScript", "Python", "Java","C#","TypeScript"]},
  { name: "Databases", icon: Database, items: ["MySQL","Postgresql","MongoDB","PineCone","ChromaDB"]},
  { name: "AI/ML", icon: Brain, items:["Pandas","Numpy","PyTorch","TensorFlow","Sci-kit Learn","LangChain","LangGraph","Matplotlib","Seaborn","MCP","AI-SDK"]},
  { name: "Tools", icon:ToolCase, items:["Git", "Postman", "Docker", "SAP","Figma"]}

]