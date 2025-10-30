import { Calendar, List, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="h-16 border-b border-border bg-card flex items-center px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-bold">SocialPlan Pro</h1>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <Button 
          variant={location.pathname === "/app" ? "default" : "ghost"}
          size="sm"
          onClick={() => navigate("/app")}
          className="gap-2"
        >
          <Calendar className="w-4 h-4" />
          Calendar
        </Button>
        <Button 
          variant={location.pathname === "/app/posts" ? "default" : "ghost"}
          size="sm"
          onClick={() => navigate("/app/posts")}
          className="gap-2"
        >
          <List className="w-4 h-4" />
          Posts
        </Button>
        <Button 
          variant={location.pathname === "/app/templates" ? "default" : "ghost"}
          size="sm"
          onClick={() => navigate("/app/templates")}
          className="gap-2"
        >
          <FileText className="w-4 h-4" />
          Templates
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
