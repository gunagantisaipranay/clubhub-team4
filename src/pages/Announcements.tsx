import Navbar from "@/components/Navbar";
import { announcementsData } from "@/data/clubsData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar } from "lucide-react";

const Announcements = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-accent text-accent-foreground";
      case "medium":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const sortedAnnouncements = [...announcementsData].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="mb-3 text-4xl md:text-5xl">Announcements</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest news and events from all clubs
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {sortedAnnouncements.map((announcement, index) => (
            <Card key={announcement.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge className={getPriorityColor(announcement.priority)}>
                        {announcement.priority}
                      </Badge>
                      <span className="text-sm font-medium text-accent">{announcement.club}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(announcement.date).toLocaleDateString('en-US', { 
                          year: 'numeric',
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{announcement.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{announcement.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {announcementsData.length === 0 && (
          <div className="py-12 text-center">
            <Bell className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">
              No announcements at this time. Check back later!
            </p>
          </div>
        )}
      </div>

      <footer className="border-t bg-card py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ClubHub. Empowering students through community.</p>
        </div>
      </footer>
    </div>
  );
};

export default Announcements;
