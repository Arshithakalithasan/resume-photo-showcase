
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Building } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Certified App SEC Practitioner (CAP)",
      organization: "SecOps",
      year: "2025",
      type: "Security Certification"
    },
    {
      title: "AI Specialist",
      organization: "Salesforce",
      year: "2024",
      type: "AI/ML Certification"
    },
    {
      title: "Transform Executive Productivity with Copilot",
      organization: "Microsoft",
      year: "2024",
      type: "Productivity Tools"
    },
    {
      title: "Certified AI foundations associate",
      organization: "Oracle",
      year: "2025",
      type: "AI/ML Certification"
    }
  ];

  const participationCertificates = [
    {
      title: "International Level Oral Presentation",
      organization: "ICSME | Kumuraguru",
      year: "2023",
      type: "Presentation"
    },
    {
      title: "Senior State level Athletic Championship",
      organization: "Pioneer",
      year: "2023",
      type: "Sports"
    },
    {
      title: "Karpagam Conference",
      organization: "ICCSICE",
      year: "2024",
      type: "Technical Conference"
    }
  ];

  const extracurricular = [
    {
      title: "National Level Group Dance",
      details: "Runner Up | TASKRAK",
      year: "2023"
    },
    {
      title: "Automation and Robotics Expo",
      details: "2023",
      year: "2023"
    },
    {
      title: "Volley ball Winner",
      details: "District Level",
      year: "2022"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground">Professional certifications and extracurricular accomplishments</p>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{cert.organization}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{cert.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Participation Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Participation Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {participationCertificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.organization}</p>
                    <Badge variant="outline">{cert.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Extracurricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extracurricular.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">🏆</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{activity.details}</p>
                    <Badge variant="secondary">{activity.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
