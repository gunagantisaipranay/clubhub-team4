import { useState } from "react";
import Navbar from "@/components/Navbar";
import ClubCard from "@/components/ClubCard";
import { clubsData } from "@/data/clubsData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "STEM", "Arts", "Academic", "Service"];

  const filteredClubs = clubsData.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/20 rounded-full animate-pulse blur-3xl" />
        <div className="absolute top-1/3 right-20 w-56 h-56 bg-accent/20 rounded-full animate-float blur-3xl" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-secondary/20 rounded-full animate-float blur-3xl" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="mb-3 text-4xl md:text-5xl">Explore Clubs</h1>
          <p className="text-lg text-muted-foreground">
            Find the perfect club that matches your interests and passions
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search clubs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          Showing {filteredClubs.length} {filteredClubs.length === 1 ? 'club' : 'clubs'}
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club, index) => (
            <div key={club.id} style={{ animationDelay: `${index * 0.05}s` }}>
              <ClubCard {...club} />
            </div>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">
              No clubs found matching your search criteria.
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

export default Clubs;
