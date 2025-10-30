import { BarChart3, Hash, Image, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useContent } from "@/context/ContentContext";
import { contentTemplates, Template } from "@/data/templates";

interface SidebarProps {
  onTemplateSelect: (template: Template) => void;
}

const Sidebar = ({ onTemplateSelect }: SidebarProps) => {
  const { posts } = useContent();

  const stats = {
    totalPosts: posts.length,
    thisMonth: posts.filter((p) => {
      const now = new Date();
      return p.date.getMonth() === now.getMonth() && p.date.getFullYear() === now.getFullYear();
    }).length,
    platforms: Array.from(new Set(posts.flatMap((p) => p.platforms))).length,
  };

  return (
    <aside className="w-80 border-r border-border bg-card p-6 overflow-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Quick Stats
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4">
              <div className="text-2xl font-bold text-primary">{stats.totalPosts}</div>
              <div className="text-xs text-muted-foreground">Total Posts</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-bold text-secondary">{stats.thisMonth}</div>
              <div className="text-xs text-muted-foreground">This Month</div>
            </Card>
            <Card className="p-4 col-span-2">
              <div className="text-2xl font-bold text-accent">{stats.platforms}</div>
              <div className="text-xs text-muted-foreground">Active Platforms</div>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Hash className="w-4 h-4" />
            Popular Hashtags
          </h3>
          <div className="flex flex-wrap gap-2">
            {["#marketing", "#contentcreator", "#socialmedia", "#branding"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Content Templates
          </h3>
          <div className="space-y-2">
            {contentTemplates.slice(0, 6).map((template) => (
              <button
                key={template.id}
                onClick={() => onTemplateSelect(template)}
                className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors border border-transparent hover:border-primary/20"
              >
                <div className="font-medium">{template.name}</div>
                <div className="text-xs text-muted-foreground">{template.category}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
