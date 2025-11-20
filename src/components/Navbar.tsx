import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Bell, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: Users },
    { path: "/team/upendra-reddy", label: "D. Upendra Reddy-2025BTAM031", icon: Users },
    { path: "/team/sai-pranay", label: "G. Sai Pranay-2025BTAM032", icon: Users },
    { path: "/team/sahithi", label: "P. Sahithi-2025BTAM033", icon: Users },
    { path: "/team/hachitra", label: "L. Hachitra-2025BTAM034", icon: Users },
    { path: "/team/vishnu-vardhan", label: "M. Vishnu Vardhan-2025BTAM035", icon: Users },
    { path: "/team/karthik", label: "S. Karthik-2025BTAM036", icon: Users },
    { path: "/team/sindhu", label: "Y. Sindhu-2025BTAM037", icon: Users },
    { path: "/team/sai", label: "K. Sai-2025BTAM038", icon:Users  },
    { path: "/team/ganga-reddy", label: "B. Ganga Adhi Kesava Reddy-2025BTAM039", icon: Users },
    { path: "/team/mohan-krishna", label: "R. Mohan Krishna-2025BTAM040", icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">ClubHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 relative">
            <Button 
              variant="ghost" 
              className="gap-2"
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              Menu
            </Button>
            
            {desktopMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-card border rounded-lg shadow-lg p-2 min-w-[200px] animate-fade-in z-50">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <Link key={link.path} to={link.path} onClick={() => setDesktopMenuOpen(false)}>
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        className="w-full justify-start gap-2"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            )}

            <Button variant="accent" size="default">
              Join Club
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Button>
                </Link>
              );
            })}
            <Button variant="accent" className="w-full" size="default">
              Join Club
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
