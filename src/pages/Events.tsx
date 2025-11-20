import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface Event {
  id: string;
  title: string;
  club: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  description: string;
  category: string;
}

const eventsData: Event[] = [
  {
    id: "1",
    title: "Regional Robotics Championship",
    club: "Robotics Club",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Gymnasium",
    attendees: 120,
    description: "Compete with your robot against teams from across the region. Exciting challenges and prizes await!",
    category: "Competition",
  },
  {
    id: "2",
    title: "Spring Drama Production: The Wizard of Oz",
    club: "Drama Club",
    date: "March 18-20, 2024",
    time: "7:00 PM",
    location: "School Auditorium",
    attendees: 200,
    description: "Join us for three nights of magical performances. Follow Dorothy on her journey through Oz!",
    category: "Performance",
  },
  {
    id: "3",
    title: "State Debate Tournament",
    club: "Debate Team",
    date: "March 20, 2024",
    time: "8:00 AM - 6:00 PM",
    location: "Conference Center",
    attendees: 80,
    description: "Our debate team competes in the state championship. Come support our speakers!",
    category: "Competition",
  },
  {
    id: "4",
    title: "24-Hour Coding Hackathon",
    club: "Coding Club",
    date: "March 22-23, 2024",
    time: "6:00 PM - 6:00 PM",
    location: "Computer Lab Building",
    attendees: 75,
    description: "Build innovative projects in 24 hours. Prizes for best app, best game, and most creative solution!",
    category: "Hackathon",
  },
  {
    id: "5",
    title: "Music Production Showcase",
    club: "Music Production Club",
    date: "March 25, 2024",
    time: "6:30 PM - 9:00 PM",
    location: "Music Hall",
    attendees: 150,
    description: "Experience original student compositions and productions. An evening of diverse musical creativity!",
    category: "Performance",
  },
  {
    id: "6",
    title: "Beach Clean-Up & Conservation Day",
    club: "Environmental Club",
    date: "April 1, 2024",
    time: "9:00 AM - 1:00 PM",
    location: "Seaside Beach Park",
    attendees: 45,
    description: "Help protect our local environment. Make a difference while enjoying time outdoors with fellow students.",
    category: "Service",
  },
  {
    id: "7",
    title: "Spring Art Exhibition Opening",
    club: "Art Club",
    date: "April 5, 2024",
    time: "6:00 PM - 8:30 PM",
    location: "Main Gallery",
    attendees: 180,
    description: "Celebrate student creativity with diverse artworks. Opening reception with refreshments and artist talks.",
    category: "Exhibition",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="mb-3 text-4xl md:text-5xl">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground">
            Mark your calendar for exciting club activities and competitions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {eventsData.map((event, index) => (
            <Card key={event.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <Badge variant="secondary">{event.category}</Badge>
                </div>
                <div className="text-sm font-medium text-accent">{event.club}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{event.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.attendees} expected attendees</span>
                  </div>
                </div>

                <Button variant="default" className="w-full">
                  Register for Event
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="border-t bg-card py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ClubHub. Empowering students through community.</p>
        </div>
      </footer>
    </div>
  );
};

export default Events;
