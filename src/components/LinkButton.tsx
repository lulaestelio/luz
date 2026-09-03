import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lock, MessageCircle, ExternalLink, Instagram } from 'lucide-react';
import { PrivacyIcon, TelegramIcon, TikTokIcon, XIcon } from './PrivacyIcon';
import { BioLink } from '../types';
import { triggerCherryBurst } from './CherryParticles';

interface LinkButtonProps {
  link: BioLink;
  onLinkClick?: (link: BioLink) => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link, onLinkClick }) => {
  const isRedPrimary = link.style === 'primary-red' || link.type === 'privacy';

  const renderIcon = () => {
    if (link.type === 'privacy') {
      return <PrivacyIcon className="w-6 h-6 text-white" />;
    }
    if (link.type === 'telegram') {
      return <TelegramIcon className="w-6 h-6 text-white" />;
    }
    if (link.type === 'x' || link.icon === 'x') {
      return <XIcon className="w-5 h-5 text-white" />;
    }
    if (link.type === 'instagram' || link.icon === 'instagram') {
      return <Instagram className="w-5 h-5 text-white" />;
    }
    if (link.type === 'tiktok' || link.icon === 'tiktok') {
      return <TikTokIcon className="w-6 h-6 text-white" />;
    }
    if (link.icon === 'lock') {
      return <Lock className="w-5 h-5 text-white" />;
    }
    if (link.icon === 'message') {
      return <MessageCircle className="w-5 h-5 text-white" />;
    }
    return <ExternalLink className="w-5 h-5 text-white" />;
  };

  const handleClick = (e: React.MouseEvent) => {
    triggerCherryBurst(e);
    if (onLinkClick) {
      onLinkClick(link);
    }
  };

  return (
    <motion.a
      id={`link-btn-${link.id}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{ scale: 1.015, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`group relative flex items-center justify-between w-full px-5 py-4 rounded-[20px] transition-all duration-300 select-none ${
        isRedPrimary
          ? 'bg-[#eb1c42] hover:bg-[#e0163c] text-white shadow-[0_8px_24px_rgba(235,28,66,0.35)] active:shadow-none'
          : 'bg-[#101014]/95 hover:bg-[#18181e] text-white border border-white/10 hover:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(235,28,66,0.15)]'
      }`}
    >
      {/* Left Icon + Text Block */}
      <div className="flex items-center gap-3.5">
        {/* Icon container */}
        <div className="flex-shrink-0 flex items-center justify-center w-7 h-7">
          {renderIcon()}
        </div>

        {/* Text column */}
        <div className="flex flex-col text-left">
          <span className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-tight">
            {link.title}
          </span>
          <span
            className={`text-[10px] sm:text-[10.5px] font-bold tracking-[0.2em] uppercase leading-tight mt-1 ${
              isRedPrimary ? 'text-white/90' : 'text-neutral-400 group-hover:text-neutral-300'
            }`}
          >
            {link.subtitle}
          </span>
        </div>
      </div>

      {/* Trailing Arrow */}
      <div className="flex-shrink-0 pl-2">
        <ArrowRight
          className={`w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1 ${
            isRedPrimary ? 'text-white' : 'text-neutral-400 group-hover:text-white'
          }`}
        />
      </div>
    </motion.a>
  );
};
