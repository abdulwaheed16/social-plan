import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useContent } from "@/context/ContentContext";
import { useToast } from "@/hooks/use-toast";
import PlatformSelector from "./PlatformSelector";
import { Template } from "@/data/templates";

interface PostModalProps {
  date: Date;
  template?: Template | null;
  onClose: () => void;
}

const PostModal = ({ date, template, onClose }: PostModalProps) => {
  const { addPost } = useContent();
  const { toast } = useToast();
  const [caption, setCaption] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [time, setTime] = useState("09:00");

  useEffect(() => {
    if (template) {
      setCaption(template.caption);
      setPlatforms(template.platforms);
      toast({
        title: "Template loaded!",
        description: `${template.name} template ready to customize`,
      });
    }
  }, [template, toast]);

  const handleSave = () => {
    if (!caption.trim()) {
      toast({
        title: "Caption required",
        description: "Please write a caption for your post",
        variant: "destructive",
      });
      return;
    }

    if (platforms.length === 0) {
      toast({
        title: "Platform required",
        description: "Please select at least one platform",
        variant: "destructive",
      });
      return;
    }

    addPost({
      date,
      caption,
      platforms,
      hashtags: template?.hashtags || [],
      time,
      status: "draft",
    });

    toast({
      title: template ? "Post created from template!" : "Post created!",
      description: "Your post has been added to the calendar",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-border animate-scale-in">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">
              {template ? `Template: ${template.name}` : "Create Post"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {date.toLocaleDateString("en-US", { 
                weekday: "long", 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="text-sm font-semibold mb-2 block">
              Select Platforms
            </label>
            <PlatformSelector
              selected={platforms}
              onChange={setPlatforms}
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">
              Caption
              {template && (
                <span className="ml-2 text-xs text-muted-foreground">
                  (Template includes {template.hashtags.length} hashtags)
                </span>
              )}
            </label>
            <Textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write your caption here..."
              rows={6}
              className="resize-none"
            />
            <div className="text-xs text-muted-foreground mt-1">
              {caption.length} characters
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">
              Posting Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-input bg-background"
            />
          </div>
        </div>

        <div className="sticky bottom-0 bg-card border-t border-border p-4 flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleSave} className="flex-1" variant="hero">
            Save Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
