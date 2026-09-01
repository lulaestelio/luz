import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, Share2, MessageCircle, Send } from 'lucide-react';
import { triggerCherryBurst } from './CherryParticles';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileName: string;
  url: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  profileName,
  url,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    triggerCherryBurst(e);
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: profileName,
          text: `Acesse os links oficiais de ${profileName}:`,
          url: url,
        });
      } catch (err) {
        // Ignored if cancelled
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm bg-[#141417] border border-white/10 rounded-3xl p-6 text-white shadow-2xl z-10"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="text-xl">🍒</span>
                <h3 className="text-lg font-bold text-white">Compartilhar Perfil</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 flex flex-col items-center text-center">
              {/* QR Code preview container */}
              <div className="p-3 bg-white rounded-2xl shadow-lg mb-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}&color=eb1c42`}
                  alt="QR Code"
                  className="w-36 h-36 rounded-lg"
                />
              </div>

              <p className="text-sm font-semibold text-neutral-200">
                {profileName}
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Escaneie com a câmera do celular ou copie o link direto
              </p>
            </div>

            {/* URL Copy Bar */}
            <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl p-2 mb-4">
              <input
                type="text"
                readOnly
                value={url}
                className="flex-1 bg-transparent text-xs text-neutral-300 px-2 outline-none truncate"
              />
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#eb1c42] hover:bg-[#d8143a] text-white shadow-md'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copiar
                  </>
                )}
              </button>
            </div>

            {/* Quick Share Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Links de ${profileName}: ${url}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-neutral-900 border border-white/5 hover:border-emerald-500/40 hover:bg-neutral-800 text-neutral-300 hover:text-emerald-400 transition-all text-[11px] font-medium gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp
              </a>

              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${profileName} - Links Oficiais`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-neutral-900 border border-white/5 hover:border-sky-500/40 hover:bg-neutral-800 text-neutral-300 hover:text-sky-400 transition-all text-[11px] font-medium gap-1.5"
              >
                <Send className="w-4 h-4 text-sky-400" />
                Telegram
              </a>

              <button
                onClick={handleNativeShare}
                className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-neutral-900 border border-white/5 hover:border-red-500/40 hover:bg-neutral-800 text-neutral-300 hover:text-red-400 transition-all text-[11px] font-medium gap-1.5"
              >
                <Share2 className="w-4 h-4 text-red-400" />
                Outros
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
