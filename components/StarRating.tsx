import { Star } from "lucide-react";

type Props = {
  count?: number;
  size?: number;
};

export default function StarRating({ count = 5, size = 20 }: Props) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-star text-star" strokeWidth={1.5} />
      ))}
    </div>
  );
}
