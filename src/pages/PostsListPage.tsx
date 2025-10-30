import { useState } from "react";
import { useContent } from "@/context/ContentContext";
import AppHeader from "@/components/app/AppHeader";
import PostsTable from "@/components/app/PostsList/PostsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Post } from "@/context/ContentContext";
import EditPostModal from "@/components/app/PostsList/EditPostModal";

const PostsListPage = () => {
  const { posts } = useContent();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const scheduledPosts = posts.filter((p) => p.status === "scheduled");
  const draftPosts = posts.filter((p) => p.status === "draft");
  const publishedPosts = posts.filter((p) => p.status === "published");
  const archivedPosts = posts.filter((p) => p.status === "archived");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Posts Management</h1>
              <p className="text-muted-foreground">
                Manage all your scheduled and published content
              </p>
            </div>
            <Button onClick={() => setIsCreateModalOpen(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </div>

          <Tabs defaultValue="scheduled" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md">
              <TabsTrigger value="scheduled">
                Scheduled ({scheduledPosts.length})
              </TabsTrigger>
              <TabsTrigger value="draft">
                Drafts ({draftPosts.length})
              </TabsTrigger>
              <TabsTrigger value="published">
                Published ({publishedPosts.length})
              </TabsTrigger>
              <TabsTrigger value="archived">
                Archived ({archivedPosts.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="scheduled" className="mt-6">
              <PostsTable posts={scheduledPosts} onEdit={setSelectedPost} />
            </TabsContent>

            <TabsContent value="draft" className="mt-6">
              <PostsTable posts={draftPosts} onEdit={setSelectedPost} />
            </TabsContent>

            <TabsContent value="published" className="mt-6">
              <PostsTable posts={publishedPosts} onEdit={setSelectedPost} />
            </TabsContent>

            <TabsContent value="archived" className="mt-6">
              <PostsTable posts={archivedPosts} onEdit={setSelectedPost} />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {selectedPost && (
        <EditPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}

      {isCreateModalOpen && (
        <EditPostModal
          post={null}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </div>
  );
};

export default PostsListPage;
