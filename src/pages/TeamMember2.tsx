import Navbar from "@/components/Navbar";
import { studentsData } from "@/data/studentsData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, User, School, Calendar } from "lucide-react";
const TeamMember2 = () => {
  const student = studentsData[1];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden">
        < className="absolute inset-0 divgradient-hero opacity-70" />
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="ClubHub - Students collaborating" 
            className="h-full w-full object-cover opacity-80 animate-slow-zoom"
          />
        </div>
        {/* Floating animated shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-secondary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '0.5s' }} />
        </div>
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="rainbow-text text-5xl md:text-6xl font-bold mb-4">
              {student.prn}
            </h1>
            <h2 className="rainbow-text text-3xl md:text-4xl font-bold text-foreground mb-2">
              {student.fullName}
            </h2>
          </div>
          
          <Card className="rainbow-glow">
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Gender</p>
                      <p className="text-lg font-semibold">{student.gender}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Year of Study</p>
                      <p className="blue-text text-lg font-semibold">{student.yearOfStudy}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <School className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Section</p>
                      <p className="text-lg font-semibold">{student.section}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">School</p>
                    <p className="text-lg font-semibold">{student.school}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">University</p>
                    <p className="text-lg font-semibold">{student.university}</p>
                  </div>

                  <div>
                  <p className="text-sm text-muted-foreground mb-1">marks</p>
                  <p className="rainbow-text text-lg font-semibold">{student.marks}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href={`mailto:${student.email}`}
                        className="text-base font-semibold text-primary hover:underline"
                      >
                        {student.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {student.hobbies.map((hobby, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-base font-medium"
                    >
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TeamMember2;
