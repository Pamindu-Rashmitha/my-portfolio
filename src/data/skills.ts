import { Code2,Brain,Database,Layout,Smartphone,Terminal} from "lucide-react"

export const skills = [
  { name: "Frontend", icon: Layout, items: ["React", "TypeScript", "Tailwind","HTML","CSS"]},
  { name: "Backend", icon: Code2, items: ["SpringBoot","FastAPI"]},
  { name: "Mobile", icon: Smartphone, items: ["React Native", "Expo"]},
  { name: "Languages", icon: Terminal, items: ["JavaScript", "Python", "Java","C"]},
  { name: "Databases", icon: Database, items: ["MySQL","Postgresql"]},
  { name: "AI/ML", icon: Brain, items:["Pandas","PyTorch","TensorFlow","LangChain","Numpy","Sci-kit Learn","Matplotlib","Seaborn"]}
]