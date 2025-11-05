import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "accent";
}

export const ActionButton = ({ 
  icon: Icon, 
  label, 
  href,
  variant = "primary" 
}: ActionButtonProps) => {
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_8px_30px_hsl(var(--primary)/0.3)]",
    secondary: "bg-secondary text-secondary-foreground hover:shadow-[0_8px_30px_hsl(var(--secondary)/0.3)]",
    accent: "bg-accent text-accent-foreground hover:shadow-[0_8px_30px_hsl(var(--accent)/0.4)]",
  };

  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 hover:-translate-y-1 group",
        variantStyles[variant]
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      <span>{label}</span>
    </a>
  );
};
