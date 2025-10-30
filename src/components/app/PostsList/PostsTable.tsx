import { Post, useContent } from "@/context/ContentContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Edit, Trash2, Archive, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface PostsTableProps {
  posts: Post[];
  onEdit: (post: Post) => void;
}

const PostsTable = ({ posts, onEdit }: PostsTableProps) => {
  const { updatePost, deletePost } = useContent();
  const { toast } = useToast();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  const handleStatusChange = (postId: string, newStatus: Post["status"]) => {
    updatePost(postId, { status: newStatus });
    toast({
      title: "Status updated",
      description: `Post status changed to ${newStatus}`,
    });
  };

  const handleDelete = (postId: string) => {
    setPostToDelete(postId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (postToDelete) {
      deletePost(postToDelete);
      toast({
        title: "Post deleted",
        description: "The post has been permanently deleted",
      });
      setPostToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  const getStatusBadge = (status: Post["status"]) => {
    const variants = {
      draft: "secondary",
      scheduled: "default",
      published: "default",
      archived: "outline",
    } as const;

    return (
      <Badge variant={variants[status]} className="capitalize">
        {status}
      </Badge>
    );
  };

  const getPlatformIcons = (platforms: string[]) => {
    return platforms.map((platform) => (
      <Badge key={platform} variant="outline" className="text-xs">
        {platform}
      </Badge>
    ));
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed rounded-lg">
        <p className="text-muted-foreground">No posts found in this category</p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & Time</TableHead>
              <TableHead>Caption</TableHead>
              <TableHead>Platforms</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>
                      {post.date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.time}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="max-w-md">
                  <p className="truncate">{post.caption}</p>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {getPlatformIcons(post.platforms)}
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(post.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit(post)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {post.status !== "scheduled" && (
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(post.id, "scheduled")}
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          Mark as Scheduled
                        </DropdownMenuItem>
                      )}
                      {post.status !== "published" && (
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(post.id, "published")}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Mark as Published
                        </DropdownMenuItem>
                      )}
                      {post.status !== "archived" && (
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(post.id, "archived")}
                        >
                          <Archive className="w-4 h-4 mr-2" />
                          Archive
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => handleDelete(post.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the post
              from your calendar.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PostsTable;
