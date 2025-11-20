import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface ClubCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  image?: string;
  nextEvent?: string;
}

const ClubCard = ({ id, name, description, category, members, image, nextEvent }: ClubCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-glow hover:-translate-y-2 hover:scale-[1.02] animate-fade-in border-2 hover:border-primary/50 relative">
      {/* Animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none" />
      
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 relative">
          <img 
            src={image} 
            alt={name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 animate-subtle-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Animated overlay particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-5 right-5 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-10 left-10 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{name}</CardTitle>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{members} members</span>
          </div>
          {nextEvent && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{nextEvent}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/clubs/${id}`} className="w-full">
          <Button variant="default" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:gradient-primary">
            <span className="transition-transform duration-300 group-hover:translate-x-1">View Details</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ClubCard;
