
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">Professional internship and hands-on learning</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">PLC Programming Intern</CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  July 2024
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-semibold">ZEUS SOLUTIONS - Offline Internship</span>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Key Learning Outcomes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Gained comprehensive knowledge in PLC Programming for Industrial Automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Developed skills in controlling machine tools and conveyor belts through hands-on practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Acquired practical experience in automation systems and industrial control processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Enhanced understanding of real-world industrial automation applications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  "This hands-on learning experience provided invaluable insights into industrial automation 
                  and strengthened my technical expertise in PLC programming and control systems."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
