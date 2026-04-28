import { Camera, User, Award, Image as ImageIcon, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Camera,
  User,
  Award,
  Image: ImageIcon,
};

type Props = {
  aspectRatio: string;
  label: string;
  iconName: string;
  className?: string;
};

export default function ImagePlaceholder({ aspectRatio, label, iconName, className = "" }: Props) {
  const Icon = ICON_MAP[iconName] ?? Camera;
  return (
    <div
      className={`${aspectRatio} bg-cream rounded-xl border border-border shadow-[0_4px_24px_-8px_rgba(26,31,37,0.1)] flex flex-col items-center justify-center text-center px-4 ${className}`}
    >
      <Icon size={48} strokeWidth={1.25} className="text-slate-light" />
      <p className="text-sm text-slate-light mt-2 font-sans">{label}</p>
    </div>
  );
}
