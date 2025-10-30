import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

interface PlatformSelectorProps {
  selected: string[];
  onChange: (platforms: string[]) => void;
}

const PlatformSelector = ({ selected, onChange }: PlatformSelectorProps) => {
  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { id: "twitter", name: "Twitter", icon: Twitter, color: "text-blue-400" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "text-blue-600" },
    { id: "facebook", name: "Facebook", icon: Facebook, color: "text-blue-500" },
  ];

  const togglePlatform = (platformId: string) => {
    if (selected.includes(platformId)) {
      onChange(selected.filter((p) => p !== platformId));
    } else {
      onChange([...selected, platformId]);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {platforms.map((platform) => {
        const Icon = platform.icon;
        const isSelected = selected.includes(platform.id);

        return (
          <button
            key={platform.id}
            onClick={() => togglePlatform(platform.id)}
            className={`
              p-4 rounded-lg border-2 transition-all
              ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-muted-foreground"
              }
            `}
          >
            <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? "text-primary" : platform.color}`} />
            <div className="text-sm font-medium">{platform.name}</div>
          </button>
        );
      })}
    </div>
  );
};

export default PlatformSelector;
