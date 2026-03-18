import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { ReactNode } from "react";

interface GlassModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
}

export function GlassModal({ open, onOpenChange, title, children }: GlassModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-white/[0.06] bg-[#0e0e1a]/95 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-3xl p-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none rounded-3xl" />
        <DialogHeader className="relative px-8 pt-8 pb-4">
          <DialogTitle className="text-2xl font-bold text-white">{title}</DialogTitle>
          <DialogDescription className="sr-only">{title}</DialogDescription>
        </DialogHeader>
        <div className="relative px-8 pb-8 space-y-4 max-h-[70vh] overflow-y-auto scrollbar-hidden">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ModalItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ModalItem({ icon, title, description }: ModalItemProps) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.05] transition-colors">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/[0.06]">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default GlassModal;
