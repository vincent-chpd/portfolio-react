import { useState } from "react";
import { cn } from "../lib/utils";

const skills: Skill = [
  //frontend skills
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "Next.js", level: 70, category: "Frontend" },

  //tools and libraries
  { name: "Git", level: 80, category: "Tools" },
  { name: "GitHub", level: 85, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },
  { name: "Postman", level: 60, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

const categories: Category = ["All", "Frontend", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full cursor-pointer transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type Skill = {
  name: string;
  level: number;
  category: string;
}[];

type Category = string[];

export default Skills;
