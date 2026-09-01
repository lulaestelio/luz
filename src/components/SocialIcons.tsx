import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { TikTokIcon } from './PrivacyIcon';
import { SocialLink } from '../types';
import { triggerCherryBurst } from './CherryParticles';

// Custom sleek X (Twitter) icon
const XIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface SocialIconsProps {
  socials: SocialLink[];
  onSocialClick?: (social: SocialLink) => void;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ socials, onSocialClick }) => {
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-[22px] h-[22px]" />;
      case 'x':
        return <XIcon className="w-[18px] h-[18px]" />;
      case 'tiktok':
        return <TikTokIcon className="w-[20px] h-[20px]" />;
      default:
        return <Instagram className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 pt-3 pb-6">
      {socials.filter(s => s.isActive).map((social) => (
        <motion.a
          key={social.id}
          id={`social-btn-${social.platform}`}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            triggerCherryBurst(e);
            if (onSocialClick) onSocialClick(social);
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[#141417]/90 border border-white/10 text-neutral-300 hover:text-white hover:border-[#eb1c42]/60 hover:bg-[#1a1a1f] shadow-lg shadow-black/40 hover:shadow-[0_0_20px_rgba(235,28,66,0.3)] transition-all duration-300"
          aria-label={social.platform}
        >
          {renderSocialIcon(social.platform)}
        </motion.a>
      ))}
    </div>
  );
};
