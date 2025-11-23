import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { clubsData } from "@/data/clubsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Clock, GraduationCap, CheckCircle, ArrowLeft } from "lucide-react";

const ClubDetail = () => {
  const { id } = useParams<{ id: string }>();
  const club = clubsData.find((c) => c.id === id);

  if (!club) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-4 text-4xl">Club Not Found</h1>
          <Link to="/clubs">
            <Button variant="default">Back to Clubs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/clubs">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Clubs
          </Button>
        </Link>

        <div className="animate-fade-in">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h1 className="mb-2 text-4xl md:text-5xl">{club.name}</h1>
                <Badge variant="secondary" className="text-base px-3 py-1">
                  {club.category}
                </Badge>
              </div>
              <Button variant="accent" size="lg">
                Join Club
              </Button>
            </div>
            <p className="text-xl text-muted-foreground">{club.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {club.fullDescription}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {club.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Club Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Members</div>
                      <div className="text-muted-foreground">{club.members} active members</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Meeting Schedule</div>
                      <div className="text-muted-foreground">{club.meetingSchedule}</div>
                    </div>
                  </div>

                  {club.nextEvent && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Next Event</div>
                        <div className="text-muted-foreground">{club.nextEvent}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Faculty Advisor</div>
                      <div className="text-muted-foreground">{club.faculty}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-primary text-white">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">Ready to Join?</h3>
                  <p className="mb-4 opacity-90">
                    Become a member today and start participating in exciting activities and events.
                  </p>
                  <Button variant="accent" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
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

export default ClubDetail;
