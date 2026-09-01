export interface BioLink {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  type: 'privacy' | 'telegram' | 'tiktok' | 'custom' | 'whatsapp' | 'instagram' | 'x' | 'vip';
  style: 'primary-red' | 'dark-card' | 'outline' | 'gradient';
  icon: string;
  isActive: boolean;
  clicks?: number;
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'x' | 'whatsapp' | 'tiktok' | 'youtube' | 'telegram';
  url: string;
  username: string;
  isActive: boolean;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  handle: string;
  tagline: string;
  avatarUrl: string;
  verified: boolean;
  links: BioLink[];
  socials: SocialLink[];
  themeColor: string;
  glowIntensity: 'subtle' | 'medium' | 'high';
}
