import { Phone, MessageCircle, FileText } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 h-16 bg-rust text-warm-white grid grid-cols-3 shadow-[0_-4px_16px_-4px_rgba(26,31,37,0.18)]">
      <a
        href={BUSINESS.phoneLink}
        className="flex flex-col items-center justify-center gap-0.5 hover:bg-rust-hover transition-colors"
      >
        <Phone size={18} />
        <span className="text-xs font-semibold">Call</span>
      </a>
      <a
        href={BUSINESS.smsLink}
        className="flex flex-col items-center justify-center gap-0.5 border-x border-rust-hover hover:bg-rust-hover transition-colors"
      >
        <MessageCircle size={18} />
        <span className="text-xs font-semibold">Text</span>
      </a>
      <a
        href="#contact"
        className="flex flex-col items-center justify-center gap-0.5 hover:bg-rust-hover transition-colors"
      >
        <FileText size={18} />
        <span className="text-xs font-semibold">Free Quote</span>
      </a>
    </div>
  );
}
