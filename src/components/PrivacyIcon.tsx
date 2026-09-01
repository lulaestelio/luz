import React from 'react';

export const PrivacyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Privacy Logo: Chat speech bubble with notch */}
      <path 
        d="M12 2C6.477 2 2 6.253 2 11.5c0 2.87 1.34 5.437 3.473 7.15-.17 1.37-.73 2.76-1.574 3.73-.242.278-.052.72.316.72 2.65 0 4.885-1.28 6.012-2.19.57.06 1.164.09 1.773.09 5.523 0 10-4.253 10-9.5S17.523 2 12 2Z" 
      />
    </svg>
  );
};

export const TelegramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.64 6.8-1.7 8.01c-.13.57-.46.71-.94.44l-2.6-1.92-1.25 1.21c-.14.14-.26.26-.52.26l.19-2.64 4.8-4.34c.21-.19-.05-.29-.32-.1l-5.93 3.73-2.56-.8c-.56-.17-.57-.56.12-.83l10.01-3.86c.46-.17.87.11.7.84Z"/>
    </svg>
  );
};

export const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.84-4.46V8.62a8.28 8.28 0 0 0 4.89 1.58V6.75a4.85 4.85 0 0 1-1-.06Z"/>
    </svg>
  );
};
