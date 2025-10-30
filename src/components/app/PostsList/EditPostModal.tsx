import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContent, Post } from "@/context/ContentContext";
import { useToast } from "@/hooks/use-toast";
import PlatformSelector from "@/components/app/PostEditor/PlatformSelector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditPostModalProps {
  post: Post | null;
  onClose: () => void;
}

const EditPostModal = ({ post, onClose }: EditPostModalProps) => {
  const { addPost, updatePost } = useContent();
  const { toast } = useToast();
  
  const [caption, setCaption] = useState(post?.caption || "");
  const [platforms, setPlatforms] = useState<string[]>(post?.platforms || []);
  const [time, setTime] = useState(post?.time || "09:00");
  const [date, setDate] = useState(
    post?.date ? post.date.toISOString().split("T")[0] : new Date().toISOString().split("T")[0]
  );
  const [status, setStatus] = useState<Post["status"]>(post?.status || "draft");

  useEffect(() => {
    if (post) {
      setCaption(post.caption);
      setPlatforms(post.platforms);
      setTime(post.time);
      setDate(post.date.toISOString().split("T")[0]);
      setStatus(post.status);
    }
  }, [post]);

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

    const postData = {
      date: new Date(date),
      caption,
      platforms,
      hashtags: post?.hashtags || [],
      time,
      status,
    };

    if (post) {
      updatePost(post.id, postData);
      toast({
        title: "Post updated!",
        description: "Your changes have been saved",
      });
    } else {
      addPost(postData);
      toast({
        title: "Post created!",
        description: "Your post has been added to the calendar",
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-border animate-scale-in">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">
              {post ? "Edit Post" : "Create New Post"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {post ? "Update your post details" : "Add a new post to your calendar"}
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Date
              </Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <Label className="text-sm font-semibold mb-2 block">
                Time
              </Label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label className="text-sm font-semibold mb-2 block">
              Status
            </Label>
            <Select value={status} onValueChange={(value: Post["status"]) => setStatus(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-semibold mb-2 block">
              Select Platforms
            </Label>
            <PlatformSelector
              selected={platforms}
              onChange={setPlatforms}
            />
          </div>

          <div>
            <Label className="text-sm font-semibold mb-2 block">
              Caption
            </Label>
            <Textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write your caption here..."
              rows={8}
              className="resize-none"
            />
            <div className="text-xs text-muted-foreground mt-1">
              {caption.length} characters
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-card border-t border-border p-4 flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleSave} className="flex-1" variant="hero">
            {post ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
