/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialProfile } from './data/defaultProfile';
import { ProfileData, BioLink, SocialLink } from './types';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';
import { SocialIcons } from './components/SocialIcons';
import { CherryParticles } from './components/CherryParticles';
import { ShareModal } from './components/ShareModal';
import { Share2 } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleLinkClick = (clickedLink: BioLink) => {
    setProfile((prev) => ({
      ...prev,
      links: prev.links.map((link) =>
        link.id === clickedLink.id ? { ...link, clicks: (link.clicks || 0) + 1 } : link
      ),
    }));
  };

  const handleSocialClick = (_social: SocialLink) => {
    // Analytics / micro-interaction
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://luz-ribeiro.vercel.app';

  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-[#050507] text-white flex flex-col items-center justify-between relative overflow-x-hidden selection:bg-red-600 selection:text-white font-sans">
      {/* Dynamic Cherry Tap Particles */}
      <CherryParticles />

      {/* Atmospheric Background Ambient Red Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top radial cherry glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] sm:w-[600px] h-[480px] sm:h-[600px] bg-[radial-gradient(circle,rgba(235,28,66,0.35)_0%,rgba(140,12,35,0.18)_40%,transparent_75%)] blur-3xl opacity-80" />
      </div>

      {/* Discreet floating action bar for share */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <button
          id="btn-share-trigger"
          onClick={() => setIsShareOpen(true)}
          className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white backdrop-blur-md transition-colors"
          title="Compartilhar link"
          aria-label="Compartilhar"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Single Page Content Container */}
      <main className="w-full max-w-[360px] sm:max-w-[380px] flex-1 flex flex-col justify-between items-center px-4 py-8 sm:py-12 z-10 space-y-6">
        {/* Profile Header (Avatar, Names, Handle, Bio) */}
        <ProfileHeader
          firstName={profile.firstName}
          lastName={profile.lastName}
          handle={profile.handle}
          tagline={profile.tagline}
          avatarUrl={initialProfile.avatarUrl}
          onAvatarClick={() => {}}
        />

        {/* Action Link Buttons */}
        <div className="w-full space-y-3.5 my-auto">
          {profile.links
            .filter((l) => l.isActive)
            .map((link) => (
              <LinkButton
                key={link.id}
                link={link}
                onLinkClick={handleLinkClick}
              />
            ))}
        </div>

        {/* Bottom Social Icons */}
        <div className="w-full flex flex-col items-center justify-center pt-2">
          <SocialIcons
            socials={profile.socials}
            onSocialClick={handleSocialClick}
          />
        </div>
      </main>

      {/* Share / QR Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        profileName={`${profile.firstName} ${profile.lastName}`}
        url={currentUrl}
      />
    </div>
  );
}
