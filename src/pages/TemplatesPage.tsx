import { useState } from "react";
import AppHeader from "@/components/app/AppHeader";
import { contentTemplates, Template } from "@/data/templates";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { FileText, Hash, Share2 } from "lucide-react";
import { useContent } from "@/context/ContentContext";
import { useToast } from "@/hooks/use-toast";

const TemplatesPage = () => {
  const navigate = useNavigate();
  const { addPost } = useContent();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(contentTemplates.map(t => t.category)))];

  const filteredTemplates = selectedCategory === "All" 
    ? contentTemplates 
    : contentTemplates.filter(t => t.category === selectedCategory);

  const handleUseTemplate = (template: Template) => {
    addPost({
      date: new Date(),
      caption: template.caption,
      platforms: template.platforms,
      hashtags: template.hashtags,
      time: "09:00",
      status: "draft",
    });
    toast({
      title: "Template added!",
      description: "Post created from template and added to your calendar",
    });
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Content Templates</h1>
            <p className="text-muted-foreground">
              Professional templates to jumpstart your content creation
            </p>
          </div>

          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-lg">{template.name}</h3>
                      </div>
                      <Badge variant="outline">{template.category}</Badge>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm whitespace-pre-wrap line-clamp-6">
                      {template.caption}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Platforms:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {template.platforms.map((platform) => (
                        <Badge key={platform} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Hash className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Hashtags:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {template.hashtags.slice(0, 4).map((hashtag) => (
                        <span
                          key={hashtag}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {hashtag}
                        </span>
                      ))}
                      {template.hashtags.length > 4 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{template.hashtags.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleUseTemplate(template)}
                    className="w-full"
                    variant="hero"
                  >
                    Use Template
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TemplatesPage;
