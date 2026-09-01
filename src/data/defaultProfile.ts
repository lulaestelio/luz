import { ProfileData } from '../types';
import avatarImg from '../assets/images/prof.jpg';

export const initialProfile: ProfileData = {
  firstName: 'Luz',
  lastName: 'Ribeiro',
  handle: '@LUZRIBEIRO',
  tagline: 'Os seus maiores desejos estão aqui',
  avatarUrl: avatarImg,
  verified: true,
  themeColor: '#eb1c42',
  glowIntensity: 'high',
  links: [
    {
      id: 'link-privacy',
      title: 'Privacy',
      subtitle: 'CONTEÚDO COMPLETO',
      url: 'https://privacy.com.br/checkout/Luzribeiro',
      type: 'privacy',
      style: 'primary-red',
      icon: 'privacy',
      isActive: true,
      clicks: 1420,
    },
    {
      id: 'link-telegram',
      title: 'Telegram VIP',
      subtitle: 'GRUPO EXCLUSIVO',
      url: 'https://t.me/luzribeiro_bot',
      type: 'telegram',
      style: 'dark-card',
      icon: 'telegram',
      isActive: true,
      clicks: 890,
    },
    {
      id: 'link-tiktok',
      title: 'Meu TikTok',
      subtitle: 'VÍDEOS & NOVIDADES',
      url: 'https://www.tiktok.com/@saralima',
      type: 'tiktok',
      style: 'dark-card',
      icon: 'tiktok',
      isActive: true,
      clicks: 720,
    },
  ],
  socials: [
    {
      id: 'soc-instagram',
      platform: 'instagram',
      url: 'https://instagram.com/luzribeiro',
      username: '@luzribeiro',
      isActive: true,
    },
  ],
};
