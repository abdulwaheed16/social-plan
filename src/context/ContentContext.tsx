import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Post {
  id: string;
  date: Date;
  caption: string;
  platforms: string[];
  hashtags: string[];
  time: string;
  status: "draft" | "scheduled" | "published" | "archived";
}

interface ContentContextType {
  posts: Post[];
  addPost: (post: Omit<Post, "id">) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
  getPostsForDate: (date: Date) => Post[];
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem("socialplan-posts");
    return saved ? JSON.parse(saved).map((p: any) => ({ ...p, date: new Date(p.date) })) : [];
  });

  useEffect(() => {
    localStorage.setItem("socialplan-posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post: Omit<Post, "id">) => {
    const newPost = {
      ...post,
      id: Date.now().toString(),
    };
    setPosts((prev) => [...prev, newPost]);
  };

  const updatePost = (id: string, updatedPost: Partial<Post>) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, ...updatedPost } : post))
    );
  };

  const deletePost = (id: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const getPostsForDate = (date: Date) => {
    return posts.filter(
      (post) =>
        post.date.toDateString() === date.toDateString()
    );
  };

  return (
    <ContentContext.Provider
      value={{ posts, addPost, updatePost, deletePost, getPostsForDate }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return context;
};
