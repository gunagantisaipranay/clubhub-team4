import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StudentCard from "@/components/StudentCard";
import Navbar from "@/components/Navbar";
import { announcementsData } from "@/data/clubsData";
import { studentsData } from "@/data/studentsData";
import { ArrowRight, Calendar, Users, Bell, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/5829c01dfbdc6e159b82d2f821aeffb8.jpg";
import clubsPattern from "@/assets/clubs-pattern.jpg";
import eventsBg from "@/assets/events-bg.jpg";

const Index = () => {
  const recentAnnouncements = announcementsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-100" />
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="ClubHub - Students collaborating" 
            className="h-full w-full object-cover opacity-50 animate-slow-zoom"
          />
        </div>
        {/* Floating animated shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-secondary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center text-white animate-fade-in">
            <h2 className="mb-3 text-lg md:text-2xl font-black tracking-wider animate-fade-in" style={{ 
              fontFamily: "'Courier New', monospace", 
              background: 'linear-gradient(90deg, #FF0080 0%, #FF8C00 14%, #FFD700 28%, #00FF00 42%, #00CED1 57%, #1E90FF 71%, #9400D3 85%, #FF1493 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'rainbow-dash 3s linear infinite',
              textShadow: 'none',
              filter: 'drop-shadow(0 0 20px rgba(255, 0, 128, 0.5)) drop-shadow(0 0 40px rgba(0, 206, 209, 0.3))',
              letterSpacing: '0.15em',
              fontWeight: 900
            }}>
              foc-mini project
            </h2>
            <h3 className="mb-6 text-3xl md:text-5xl font-extrabold tracking-tight animate-fade-in" style={{ 
              fontFamily: "'Poppins', sans-serif",
              background: 'linear-gradient(135deg, #FF6B9D 0%, #C06FFF 50%, #4ECDC4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 12px rgba(255, 107, 157, 0.3)',
              filter: 'drop-shadow(0 0 30px rgba(192, 111, 255, 0.4))',
              animationDelay: '0.3s'
            }}>
              CLUBHUB - Where Students Bond Together
            </h3>
            <h1 className="rainbow-text text-4xl md:text-6xl">
              Discover Your Passion
            </h1>
            <p className="mb-8 text-lg md:text-xl opacity-90">
              Join vibrant student clubs, participate in exciting events, and connect with peers who share your interests. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/clubs">
                <Button variant="accent" size="lg" className="gap-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-1">
                  <span>Explore Clubs</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </Link>
              <Link to="/announcements">
                <Button variant="secondary" size="lg" className="gap-2 bg-white/20 text-white hover:bg-white/30 border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-xl backdrop-blur-sm">
                  View Announcements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/30" />
        <div className="absolute inset-0 opacity-20">
          <img src={clubsPattern} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in backdrop-blur-sm bg-card/80 p-6 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-glow hover:-translate-y-2">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 shadow-lg transition-all duration-500 group-hover:rotate-12">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div className="rainbow-text text-3xl font-bold text-foreground">{studentsData.length}</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="animate-fade-in backdrop-blur-sm bg-card/80 p-6 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-glow hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 shadow-lg transition-all duration-500 group-hover:rotate-12">
                <Calendar className="h-7 w-7 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">Events This Year</div>
            </div>
            <div className="animate-fade-in backdrop-blur-sm bg-card/80 p-6 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-glow hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 shadow-lg transition-all duration-500 group-hover:rotate-12">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">350+</div>
              <div className="text-muted-foreground">Student Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Student PRN Directory */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute inset-0 opacity-20">
          <img src={clubsPattern} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="rainbow-text text-4xl md:text-5xl font-bold mb-4">Student Directory</h2>
            <p className="text-lg text-muted-foreground">
              Click on any PRN to view detailed student information
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {studentsData.map((student, index) => (
              <div 
                key={student.prn} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <StudentCard student={student} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Announcements */}
      <section className="border-t py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-primary/5 to-secondary/20" />
        <div className="absolute inset-0 opacity-15">
          <img src={eventsBg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl md:text-4xl">Recent Announcements</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest news from your clubs
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {recentAnnouncements.map((announcement) => (
              <Card key={announcement.id} className="animate-fade-in backdrop-blur-sm bg-card/90 transition-all duration-500 hover:shadow-glow hover:-translate-y-1 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <Bell className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-accent">{announcement.club}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{announcement.title}</h3>
                      <p className="text-muted-foreground">{announcement.content}</p>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(announcement.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/announcements">
              <Button variant="outline" size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-glow hover:border-accent hover:text-accent">
                <span>View All Announcements</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={clubsPattern} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="overflow-hidden gradient-primary text-white shadow-glow border-0 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="mb-4 text-3xl md:text-4xl">Ready to Get Involved?</h2>
              <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
                Whether you're passionate about STEM, arts, service, or academics, there's a perfect club waiting for you.
              </p>
              <Link to="/clubs">
                <Button variant="accent" size="lg" className="gap-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                  <span>Join a Club Today</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ClubHub. Empowering students through community.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
