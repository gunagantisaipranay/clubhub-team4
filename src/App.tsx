import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Clubs from "./pages/Clubs";
import ClubDetail from "./pages/ClubDetail";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import TeamMember1 from "./pages/TeamMember1";
import TeamMember2 from "./pages/TeamMember2";
import TeamMember3 from "./pages/TeamMember3";
import TeamMember4 from "./pages/TeamMember4";
import TeamMember5 from "./pages/TeamMember5";
import TeamMember6 from "./pages/TeamMember6";
import TeamMember7 from "./pages/TeamMember7";
import TeamMember8 from "./pages/TeamMember8";
import TeamMember9 from "./pages/TeamMember9";
import TeamMember10 from "./pages/TeamMember10";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:id" element={<ClubDetail />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team/upendra-reddy" element={<TeamMember1 />} />
          <Route path="/team/sai-pranay" element={<TeamMember2 />} />
          <Route path="/team/sahithi" element={<TeamMember3 />} />
          <Route path="/team/hachitra" element={<TeamMember4 />} />
          <Route path="/team/vishnu-vardhan" element={<TeamMember5 />} />
          <Route path="/team/karthik" element={<TeamMember6 />} />
          <Route path="/team/sindhu" element={<TeamMember7 />} />
          <Route path="/team/sai" element={<TeamMember8 />} />
          <Route path="/team/ganga-reddy" element={<TeamMember9 />} />
          <Route path="/team/mohan-krishna" element={<TeamMember10 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
