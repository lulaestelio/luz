import React from 'react';
import { motion } from 'motion/react';
import { triggerCherryBurst } from './CherryParticles';

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  handle: string;
  tagline: string;
  avatarUrl: string;
  onAvatarClick?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  firstName,
  lastName,
  handle,
  tagline,
  avatarUrl,
  onAvatarClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    triggerCherryBurst(e);
    if (onAvatarClick) onAvatarClick();
  };

  return (
    <div className="flex flex-col items-center text-center w-full select-none pt-4 pb-2">
      {/* Avatar with Red Glowing Halo Frame */}
      <div className="relative group cursor-pointer" onClick={handleClick}>
        {/* Ambient Red Radial Backlight */}
        <div 
          className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#eb1c42]/60 via-[#ff2a55]/40 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none"
        />

        {/* Outer subtle ring */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-b from-[#ff2a55] via-[#eb1c42] to-[#b30e2f] shadow-[0_0_25px_rgba(235,28,66,0.6)]"
        >
          {/* Inner dark padding border */}
          <div className="w-full h-full rounded-full p-[2px] bg-black overflow-hidden relative">
            <img
              src={avatarUrl}
              alt={`${firstName} ${lastName}`}
              className="w-full h-full object-cover object-[center_18%] rounded-full transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                if (e.currentTarget.src !== '/profile.jpg') {
                  e.currentTarget.src = '/profile.jpg';
                }
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Profile Name */}
      <div className="mt-5 space-y-0 text-center">
        <h1 className="text-[34px] sm:text-[38px] font-extrabold tracking-tight leading-[1.08] text-white">
          {firstName}
        </h1>
        <h2 className="text-[34px] sm:text-[38px] font-extrabold tracking-tight leading-[1.08] text-[#eb1c42] drop-shadow-[0_0_16px_rgba(235,28,66,0.35)]">
          {lastName}
        </h2>
      </div>

      {/* Handle */}
      <p className="mt-2 text-[11px] sm:text-xs font-bold tracking-[0.26em] text-neutral-400 uppercase select-all">
        {handle}
      </p>

      {/* Bio / Tagline */}
      <p 
        onClick={handleClick}
        className="mt-4 text-[15px] sm:text-base font-normal text-white/95 tracking-wide max-w-[280px] sm:max-w-xs mx-auto cursor-pointer hover:text-red-300 transition-colors"
      >
        {tagline}
      </p>
    </div>
  );
};
