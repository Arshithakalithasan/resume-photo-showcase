
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated engineering student with a passion for automation and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get to know me</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a final-year Electronics and Communication Engineering student at SNS College of Engineering, 
              Coimbatore. My journey in engineering has been driven by a deep fascination with automation 
              technologies and artificial intelligence.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Through my internship at Zeus Solutions, I gained hands-on experience in PLC programming 
              and automation systems. I'm passionate about applying technology to solve real-world problems 
              and am always eager to learn new skills and take on challenging projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <CardContent className="flex items-center gap-3 p-0">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Coimbatore, India</span>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="flex items-center gap-3 p-0">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">+91-9042359487</span>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="flex items-center gap-3 p-0">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">arshithakalithasan@gmail.com</span>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="flex items-center gap-3 p-0">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm">Portfolio Website</span>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Internship</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Competitions</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
