import { Card, CardContent } from "@/components/ui/card";
import { Student } from "@/data/studentsData";
import { User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface StudentCardProps {
  student: Student;
}

const StudentCard = ({ student }: StudentCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-105 hover:-translate-y-1 bg-card border-2 border-border">
          <CardContent className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <User className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="rainbow-text text-2xl font-bold mb-2 tracking-wide">
              {student.prn}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              Click to view details
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="rainbow-text text-3xl font-bold text-center mb-2">
            {student.prn}
          </DialogTitle>
          <DialogDescription className="rainbow-text text-center text-lg font-lucida text-foreground">
            {student.fullName}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Gender</p>
              <p className="text-base font-semibold text-foreground">{student.gender}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Year of Study</p>
              <p className="text-base font-semibold text-foreground">{student.yearOfStudy}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Section</p>
              <p className="text-base font-semibold text-foreground">{student.section}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">School</p>
              <p className="text-base font-semibold text-foreground">{student.school}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">University</p>
            <p className="text-base font-semibold text-foreground">{student.university}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">marks</p>
            <p className="rainbow-text text-base font-semibold text-foreground">{student.marks}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <a 
              href={`mailto:${student.email}`}
              className="text-base font-semibold text-primary hover:underline"
            >
              {student.email}
            </a>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Hobbies</p>
            <div className="flex flex-wrap gap-2">
              {student.hobbies.map((hobby, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-sm font-medium"
                >
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentCard;
