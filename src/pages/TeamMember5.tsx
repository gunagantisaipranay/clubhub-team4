import Navbar from "@/components/Navbar";
import { studentsData } from "@/data/studentsData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, User, School, Calendar } from "lucide-react";

const TeamMember5 = () => {
  const student = studentsData[4];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="rainbow-text text-5xl md:text-6xl font-bold mb-4">
              {student.prn}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {student.fullName}
            </h2>
          </div>
          
          <Card className="shadow-glow">
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
                      <p className="text-lg font-semibold">{student.yearOfStudy}</p>
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

export default TeamMember5;
