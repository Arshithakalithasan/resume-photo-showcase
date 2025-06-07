
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Cpu, Users, Clock } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Java (Basics)", level: 70 },
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "PLC Programming", level: 75 }
      ]
    },
    {
      title: "Technical Skills",
      icon: Cpu,
      skills: [
        { name: "Automation Systems", level: 80 },
        { name: "IoT Development", level: 75 },
        { name: "Machine Learning", level: 70 },
        { name: "Sensor Integration", level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Team Work", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Quick Learning", level: 95 },
        { name: "Problem Solving", level: 88 }
      ]
    },
    {
      title: "Time Management",
      icon: Clock,
      skills: [
        { name: "Project Planning", level: 80 },
        { name: "Deadline Management", level: 85 },
        { name: "Multitasking", level: 78 },
        { name: "Priority Setting", level: 82 }
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Native" },
    { name: "Hindi", level: "Intermediate" },
    { name: "German", level: "Basics" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">Technical and professional competencies</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <div className="font-semibold text-foreground">{lang.name}</div>
                  <div className="text-sm text-muted-foreground">{lang.level}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
