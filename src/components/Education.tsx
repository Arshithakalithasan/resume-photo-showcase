
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "B.E (ECE)",
      institution: "SNS College of Engineering, Coimbatore",
      percentage: "Current",
      year: "2022-2026",
      description: "Electronics and Communication Engineering with focus on automation and IoT technologies"
    },
    {
      degree: "Higher Secondary",
      institution: "Dayananda Vidyalaya Matriculation Higher Secondary School",
      percentage: "82.0%",
      year: "2022",
      description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science"
    },
    {
      degree: "Secondary",
      institution: "Dayananda Vidyalaya Matriculation Higher Secondary School",
      percentage: "97.0%",
      year: "2020",
      description: "Strong foundation in mathematics and sciences"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">My academic journey and achievements</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.year}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-foreground mb-2">{edu.institution}</h3>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                  <div className="flex items-center justify-start md:justify-end">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{edu.percentage}</div>
                      <div className="text-xs text-muted-foreground">Achievement</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
