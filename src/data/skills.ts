import { Code2,Brain,Database,Layout,Smartphone,Terminal} from "lucide-react"

export const skills = [
  { name: "Frontend", icon: Layout, items: ["React", "TypeScript", "Tailwind","HTML","CSS"]},
  { name: "Backend", icon: Code2, items: ["SpringBoot","Node.js","Express.js","FastAPI"]},
  { name: "Mobile", icon: Smartphone, items: ["React Native", "Expo"]},
  { name: "Languages", icon: Terminal, items: ["JavaScript", "Python", "Java","C"]},
  { name: "Databases", icon: Database, items: ["MySQL","Postgresql","MongoDB"]},
  { name: "AI/ML", icon: Brain, items:["Pandas","Numpy","PyTorch","TensorFlow","Sci-kit Learn","LangChain","LangGraph","Matplotlib","Seaborn"]}
]