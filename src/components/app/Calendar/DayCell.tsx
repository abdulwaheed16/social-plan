import { useContent } from "@/context/ContentContext";
import { Plus } from "lucide-react";

interface DayCellProps {
  date: Date | null;
  onDateClick: (date: Date) => void;
}

const DayCell = ({ date, onDateClick }: DayCellProps) => {
  const { getPostsForDate } = useContent();

  if (!date) {
    return <div className="aspect-square" />;
  }

  const posts = getPostsForDate(date);
  const isToday = date.toDateString() === new Date().toDateString();
  const isPast = date < new Date() && !isToday;

  return (
    <button
      onClick={() => onDateClick(date)}
      className={`
        aspect-square p-2 rounded-lg border transition-all hover:border-primary hover:shadow-md
        ${isToday ? "border-primary bg-primary/5" : "border-border"}
        ${isPast ? "opacity-60" : ""}
        group relative overflow-hidden
      `}
    >
      <div className="flex flex-col h-full">
        <div className={`text-sm font-semibold mb-1 ${isToday ? "text-primary" : ""}`}>
          {date.getDate()}
        </div>

        <div className="flex-1 space-y-1">
          {posts.slice(0, 2).map((post) => (
            <div
              key={post.id}
              className="text-xs px-1 py-0.5 rounded bg-gradient-hero text-white truncate"
            >
              {post.caption.slice(0, 20)}
            </div>
          ))}
          {posts.length > 2 && (
            <div className="text-xs text-muted-foreground">
              +{posts.length - 2} more
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Plus className="w-6 h-6 text-primary" />
        </div>
      </div>
    </button>
  );
};

export default DayCell;
