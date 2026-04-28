import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  aspectRatio: string;
  className?: string;
  bgClass?: string;
  imageClass?: string;
  priority?: boolean;
  sizes?: string;
};

export default function Photo({
  src,
  alt,
  aspectRatio,
  className = "",
  bgClass = "bg-cream",
  imageClass = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  return (
    <div
      className={`${aspectRatio} relative overflow-hidden rounded-xl border border-border ${bgClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClass}`}
      />
    </div>
  );
}
